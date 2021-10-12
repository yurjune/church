import React, { useState, useRef, useEffect, useMemo } from "react";
let ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3060';
axios.defaults.withCredentials = true;

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const QuillEditor = (props) => {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);  // ReactQuill component
  const quill = quillRef.current?.getEditor();  // Quill instance

  useEffect(() => { // 수정 모드일 때
    if (props.isEdit && quill) {
      props.setTitle(props.data.title);
      quill.root.innerHTML = props.data.content;
    }
  }, [props.data, quill]);

  useEffect(() => {
    const html = quill?.root.innerHTML;
    props.setContent(html);
  }, [value, quill]);

  const imageHandler = () => {
    const formData = new FormData();  
    const input = document.createElement('input');  
    input.setAttribute('type', 'file');  
    input.setAttribute('accept', 'image/*');  
    input.click();  
    input.onchange = async () => {
      try {
        const file = input.files[0];  
        formData.append('image', file);
        const result = await axios.post('/post/image', formData);
        const url = result.data;
        const quill = quillRef.current?.getEditor();
        const range = quill.getSelection()?.index;
        console.log('range:', range);
        if (range !== null && range !== undefined) {
          quill?.setSelection(range, 1);
          quill?.clipboard.dangerouslyPasteHTML(
            range,
            `<img src="http://localhost:3060/${url}" />`
          );
        }
        props.setImageFiles(prev => [...prev, url]);
      } catch (error) {
        console.error(error);
      }
    };  
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      } 
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }), []);

  return (
    <>
      {ReactQuill && (
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={value}
          onChange={setValue}
          formats={formats}
          modules={modules}
        />
      )}
    </>
  );
}

export default QuillEditor;

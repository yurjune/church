import React, { useState, useRef, useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
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

const ReactQuill = dynamic(
  /* When next/dynamic wraps the component, it doesn't seem forwarding ref to the internal component. 
  If I wrapped ReactQuill component with ref renamed to forwardedRef, it seemed working. */
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  }, {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  },
);

const QuillEditor = (props) => {
  const [value, setValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const quillRef = useRef(null);  // ReactQuill component
  const quill = quillRef.current?.getEditor();  // Quill instance

  useEffect(() => { // 수정 모드일 때
    if (props.isEdit && !isLoaded && quill) {
      setIsLoaded(true);
      console.log(props.isEdit);
      props.setTitle(props.data.title);
      quill.root.innerHTML = props.data.content;
      // console.log(props.data.Images.src);
    }
  }, [quill]);

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
      <ReactQuill
        forwardedRef={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        formats={formats}
        modules={modules}
      />
    </>
  );
}

export default QuillEditor;

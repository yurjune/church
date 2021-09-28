import react from 'react';

import AppLayout from '../components/AppLayout';
import Header from '../components/Header';
import Carousels from '../components/Carousels';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header></Header>
      <Carousels></Carousels>
      <Footer></Footer>
    </>
  );
}

export default Home;

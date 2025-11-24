"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Page from "./layout/homepage/Page";
import { useEffect } from 'react';



const Home = () => {
  useEffect(( ) => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: 'bottom-top'
      })
    }
    initAOS()
  }, [])
  return (
    <div>
     <Page></Page>
    </div>
  );
};

export default Home;

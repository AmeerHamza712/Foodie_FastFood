import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4, faCoffee, faGaugeMed, faSign, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/hero';
import { useState } from 'react';
import { Card } from './Components/Navbar/Card';
import { Hero2 } from './Components/Hero/Hero2';
import { Service } from './Components/Services/service';
import { Menu } from './Components/Services/menu';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MySlider, Slider } from './Components/Slider/slider';
import { Testimonial } from './Components/Swiper/swiper';
import { Banner } from './Components/Banner/banner';
import { Contact } from './Components/Contact/contact';
import { Footer } from './Components/Footer/footer';
function App() {
  let [store,setStore]=useState([])
  let [count,setCount]=useState(0)
  return (

    <div className="App bg-yellow-100/10 overflow-hidden">
    
      <Navbar store={store} setStore={setStore} count={count} setCount={setCount} />
      {/* <Hero store={store} setStore={setStore} count={count} setCount={setCount} /> */}
      <Hero2/>
      <Service/>
      <Menu store={store} setStore={setStore} count={setCount} setCount={setCount} />
      {/* <MySlider/> */}
      <Testimonial/>
      <Banner/>
      <Contact/>
      <Footer/>

      </div>

  );
}

export default App;

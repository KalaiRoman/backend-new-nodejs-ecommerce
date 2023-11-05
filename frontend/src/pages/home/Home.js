import React, { useEffect, useState } from 'react'
import './styles/Home.scss';
import Header from './Header';
import ProductCards from './ProductCards';
import BanneerSection from './BanneerSection';
import { toast } from 'react-toastify';
function Home() {
  const datas = Array(10).fill("kalai");

  const [locations, setLocations] = useState([]);


  function showPosition(position) {
    setLocations(position?.coords);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      toast.error("Geolocation is not supported by this browser.")
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    const userid = Math.floor(Math.random() * 8976989);
    const RandomUserid = `${userid}USERIDRANDOM`;

    if (localStorage.getItem("unknowuser")) {
    }
    else {
      localStorage.setItem("unknowuser", RandomUserid)
    }
  }, [])
  return (
    <div className='main-home-section'>
      <BanneerSection />
    </div>
  )
}

export default Home
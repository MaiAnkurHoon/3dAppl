import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo , smallHeroVideo} from '../utils';

const Heroic = () => {
const [videoSrc, setVideoSrc] = useState(window.innerWidth<760 ? smallHeroVideo : heroVideo)
const handleVideoSrcSet = () => {
    if(window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)}
        else{
            setVideoSrc(heroVideo)
        }
}


    useGSAP(() => {
            gsap.to('#heroic' , {opacity : 1, delay: 1.75})
    },[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className = "hero-title " id="heroic">Iphone 15 pro</p>
        
        <div className="md:w-10/12 w-9/12"></div>
            <video className="pointer-events-none" autoPlay muted playsInline={true} key = {videoSrc}>
                <source src={videoSrc} type="video/mp4" />
            </video>
      </div>

    </section>
  )
}

export default Heroic

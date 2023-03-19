import { ArrowUpward } from '@mui/icons-material'
import React from 'react'

const ScrollButton = () => {

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    window.addEventListener('scroll', handleScroll);


    function handleScroll() {
        var button = document.getElementById("scroll-btn");
        if (window.scrollY > 0) {
          button.style.opacity = "1";
          button.style.pointerEvents= 'auto'
        } else {

          button.style.opacity = "0";
          button.style.pointerEvents= 'none';
        }
      }
      

  return (
    <div>
        <button className='scroll-btn' id='scroll-btn' onClick={() => scrollToTop()}><ArrowUpward/></button>

    </div>
  )
}

export default ScrollButton
import React, { useEffect, useState }  from 'react'
import "./Fixedfoot.css"

function Fixedfoot() {
    

    const[show, SetShow]=useState(true)
    const controlFixedbar =()=>{
        if(window.scrollY>0){
            SetShow(false)
        }
        else {
            SetShow(true)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',controlFixedbar)
        return()=>{
            window.removeEventListener('scroll',controlFixedbar)
        }
    },[])


  return (
    <div className={`fixedmain ${show && 'hide'}`}>
        <div className='fixedcontain'>
            <div>
                <div className='fixed1'>All Apple Originals</div><div className='fixed2'>Start watching with 7 days free. Or 3 months free when you buy an eligible Apple device. <span className='fixed3'>Terms Apply.</span></div>
            </div>
            <div className='fixedright'>
                <div className='fixed4'><button className='b2 fixedbutton'>Start Free Trial</button></div>
                <div className='fixed5'>7 days free, then ₹ 99.00/month.</div>
            </div>
        </div>
    </div>
  )
}

export default Fixedfoot
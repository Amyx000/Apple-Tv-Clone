import React from 'react'
import "./Carddeck2.css"

function Carddeck2(Props) {
  return (
    <div className='card'>
        <h2 className='title'>{Props.title}</h2>
        <p className='sub'>{Props.sub}</p>
        <div className='deck2'>
            <div>
                <img className='img1' src={Props.i1} alt=''></img>
                <div className='fadediv1'></div>
                <div className='div1'>
                    <p>{Props.t1}</p>
                    <h2 className='sub1'>{Props.sub1}</h2>
                    <p>{Props.des1}</p>
                </div>
            </div>
            <div>
                <img className='img2' src={Props.i2} alt=''></img>
                <div className='fadediv1'></div>
                <div className='div2'>
                    <p>{Props.t2}</p>
                    <h2 className='sub2'>{Props.sub2}</h2>
                    <p>{Props.des2}</p>
                </div>
            </div>
            <div>
               <img className='img3' src={Props.i3} alt=''></img>
               <div className='fadediv1'></div>
               <div className='div3'>
                    <p>{Props.t3}</p>
                    <h2 className='sub3'>{Props.sub3}</h2>
                    <p>{Props.des3}</p>
                </div>
            </div>
            
        </div>
        <hr></hr>
 </div>
  )
}

export default Carddeck2
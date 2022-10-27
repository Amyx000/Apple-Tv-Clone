import React, { useState } from 'react'
import "./Carddeck1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'

function Carddeck1(Props) {

    const[clss1, SetClss1]=useState("nodots")
   
    const changeClass1 = ()=>{
        SetClss1("threedots");
    }
    
    
    const[clss2, SetClss2]=useState("nodots")
    const changeClass2 = ()=>{
        SetClss2("threedots");
    }
    const[clss3, SetClss3]=useState("nodots")
    const changeClass3 = ()=>{
        SetClss3("threedots");
    }
    const[clss4, SetClss4]=useState("nodots")
    const changeClass4 = ()=>{
        SetClss4("threedots");
    }


    const outClass=()=>{
        SetClss1("nodots");
        SetClss2("nodots");
        SetClss3("nodots");
        SetClss4("nodots");
    }
  return (
    <div className='card'>
        <h2 className='title'>{Props.title}</h2>
        <p className='sub'>{Props.sub}</p>
        <div className='deck1'>
            <div>
                <img className='img1' src={Props.i1} alt=''></img>
                <div  onMouseEnter={changeClass1} onMouseOut={outClass} className='fadediv'></div>
                <div onMouseEnter={changeClass1} className={clss1}><FontAwesomeIcon icon={faEllipsis}/></div>
                <div className='div1'>
                    <p>{Props.t1}</p>
                    <h2 className='sub1'>{Props.sub1}</h2>
                    <p>{Props.des1}</p>
                </div>
            </div>
            <div>
                <img className='img2' src={Props.i2} alt=''></img>
                <div  onMouseEnter={changeClass2} onMouseOut={outClass} className='fadediv'></div>
                <div onMouseEnter={changeClass2} className={clss2}><FontAwesomeIcon icon={faEllipsis}/></div>
                <div className='div2'>
                    <p>{Props.t2}</p>
                    <h2 className='sub2'>{Props.sub2}</h2>
                    <p>{Props.des2}</p>
                </div>
            </div>
            <div>
               <img className='img3' src={Props.i3} alt=''></img>
               <div  onMouseEnter={changeClass3} onMouseOut={outClass} className='fadediv'></div>
                <div onMouseEnter={changeClass3} className={clss3}><FontAwesomeIcon icon={faEllipsis}/></div>
               <div className='div3'>
                    <p>{Props.t3}</p>
                    <h2 className='sub3'>{Props.sub3}</h2>
                    <p>{Props.des3}</p>
                </div>
            </div>
            <div>
                <img className='img4' src={Props.i4} alt=''></img>
                <div  onMouseEnter={changeClass4} onMouseOut={outClass} className='fadediv'></div>
                <div onMouseEnter={changeClass4} className={clss4}><FontAwesomeIcon icon={faEllipsis}/></div>
                <div className='div4'>
                    <p>{Props.t4}</p>
                    <h2 className='sub4'>{Props.sub4}</h2>
                    <p>{Props.des4}</p>
                </div>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}


export default Carddeck1
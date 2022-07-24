import React from "react";
import Header from "./Header"
import Carddeck1 from "./Carddeck1"
import "./App.css"
import fourdeck from "./fourdeck.json"
import threedeck from "./threedeck.json"
import Carddeck2 from "./Carddeck2";
import Footer from "./Footer";
import Fixedfoot from "./Fixedfoot";

function App (){

return(
  <>
  <div>
    <Header/>
    <div className="cardholder">
      
    {  fourdeck.map(fourdeck=>{
        return(
          
         <Carddeck1 title={fourdeck.title}
      i1={fourdeck.img1}
      i2={fourdeck.img2}
      i3={fourdeck.img3}
      i4={fourdeck.img4}
      t1={fourdeck.t1}
        t2={fourdeck.t2}
        t3={fourdeck.t3}
        t4={fourdeck.t4}
        sub1={fourdeck.sub1}
        sub2={fourdeck.sub2}
        sub3={fourdeck.sub3}
        sub4={fourdeck.sub4}
        des1={fourdeck.des1}
        des2={fourdeck.des2}
        des3={fourdeck.des3}
        des4={fourdeck.des4}
        sub={fourdeck.sub}
        key={fourdeck.id}
     >

    </Carddeck1>

    
        )
      })
      
      
      }

{  threedeck.map(threedeck=>{
        return(
          
         <Carddeck2 title={threedeck.title}
      i1={threedeck.img1}
      i2={threedeck.img2}
      i3={threedeck.img3}
      
      t1={threedeck.t1}
        t2={threedeck.t2}
        t3={threedeck.t3}
        
        sub1={threedeck.sub1}
        sub2={threedeck.sub2}
        sub3={threedeck.sub3}
        
        des1={threedeck.des1}
        des2={threedeck.des2}
        des3={threedeck.des3}
        
        sub={threedeck.sub}
        key={threedeck.id}
     >

    </Carddeck2>
        )
      })}

      <Footer></Footer>
      <Fixedfoot></Fixedfoot>

    
   
    </div>
  </div>
  </>
)
  
}


export default App;

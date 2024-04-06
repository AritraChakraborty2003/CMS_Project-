import React from 'react';
import './Corporate.css'; // Make sure the CSS file is imported
import axios from "axios"
import { useState , useEffect } from 'react';
const Weddings = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:8800/schoolEventsAPI").then(
        (res)=>{ setData((res.data).reverse())}
    ).catch((err) => {console.log(err)})
},[])
  return (
    <div>
    <div className="birthday-gallery">
      <h1>Captured Moments: A School Event Gallery</h1>
     
    </div>
    <div className='displaySection'>
    
    {
   
   data.map((val)=>(
    
    <div>
    <div className="imgHolder"> 
      {(val.gallery).split(".")[1]!="mp4" && <img src={'http://127.0.0.1:8800/'+val.gallery}></img>}
      <div className="VideoHolder"> 
      {(val.gallery).split(".")[1]=="mp4" &&  <video controls source src={'http://127.0.0.1:8800/'+val.gallery} type="video/mp4"/>}
        </div>
      </div>
      </div>
      
 ))  }
</div>
</div>
  )
};

export default Weddings;

import { useState } from "react"
import "./imageCms.css"
import axios from "axios"
const ImageHandle = () =>{

      

        const [file, setFile] = useState(null);
        const [choice,setChoice] =useState('');
        const handleChange = (e)=>
        {
            setFile(e.target.files)
        }
        const handleSubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          let newArr = [];
          //********* HERE IS THE CHANGE ***********
          for (let i = 0; i < file.length; i++) {
            formData.append('files', file[i]);
          }
          setChoice(document.getElementById("events").value)

          console.log(formData.get('files'));
          console.log('http://127.0.0.1:8800/'+choice+'API/');
      
          axios
            .post('http://127.0.0.1:8800/'+choice+'API/', formData)
            .then((res=>{
              if(res.status===200)
                  {
                     document.getElementById("tag").innerHTML="Image Upload Successful";
                  }
              else{
                   console.log(res.status);
              }
            }))
        };
      
        return (
         <div>
       
            <div className="banner">
              <div className="bannerText">
                 <p className="bannerHeaderText">CMS</p>
                 <br/>
                 <p className="bannerSupport">(The One stop soutions for your content needs on <span class="float" id="float"> </span> for dazzzling sphere)</p>
              </div>
            </div>
             <div class="containerCMS">
              <div className="headerText1">
             <h1 id="tag" ></h1>
             </div>
                <div class="box">

              
                <select class="event" id="events">
                <option value="weddings">weddings</option>
                <option value="birthdays">birthdays</option>
                <option value="babyShowers">babyShowers</option>
                <option value="collegeFests">collegeFests</option>
                <option value="corporateEvents">corporateEvents</option>
                <option value="schoolEvents">schoolEvents</option>
              
              </select>
            
                        <button type="button" class="btn" onClick={()=>{setChoice(document.getElementById("events").value); console.log(choice);
                    document.getElementById("formDiv").style.visibility="visible"}}>Click Here</button>
                        </div>
             <div class="formContainer" id="formContainer">
             
        <div class="formDiv" id="formDiv">
        <div class="uploadIcon">
            <img src="https://i.postimg.cc/pL0FK1Yz/upload.png" class="imgBanner"/>
        </div>
        <div class="formHolder">
        <form method="post" enctype="multipart/form-data"    onSubmit={handleSubmit}>
        <label for="files" class="label">Select your files:</label>
        <br/>
        <br/>
        <input type="file" id="files" name="files" multiple   onChange={handleChange}/>
        <br/>
        <br/>
        <div class="btnHolder">
        <input type="submit" class="btn1"/>
        </div>
        </form>
     
        </div>
        
                </div>
            
            
                
            </div>
          </div>
    
            </div>
  )}



export default ImageHandle;



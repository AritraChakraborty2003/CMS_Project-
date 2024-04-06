const express=require("express")
const mongoose=require("mongoose")
const ejs=require("ejs")
const mysql2=require("mysql2")
const multer = require("multer")
const cors=require("cors")
const dotenv=require("dotenv");
const app = express()
const fs=require('fs')
app.use(express.json())
app.use(cors())
app.use(express.static("uploads"))
//Use of MongoDB (MERN stack Project)
dotenv.config();
const testSchema=new mongoose.Schema({
    gallery:{
        type:String,
        required:true
    }
})

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        var dir="./uploads"
        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir);
        }
        cb(null,dir)
    },
    filename:function(req,file,cb){
            cb(null,file.originalname)
    }

    }
)
mongoose.connect("mongodb://localhost:27017/clientcms")
const birthday=mongoose.model('birthdays',testSchema);
const wedding=mongoose.model('weddings',testSchema);
const corporateevent=mongoose.model('corporateevents',testSchema);
const babyshower=mongoose.model('babyshowers',testSchema);
const collegefest=mongoose.model('collegefests',testSchema);
const schoolevent=mongoose.model('schoolevents',testSchema);


var upload=multer({storage:storage}).array('files',100);

/*Post of images and videos in specific upload end points*/
app.post("/weddingsAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
            files.map((val)=>{
                    const image=val.filename;
                    let newweddings=new wedding({
                        gallery:image
                    })
                     newweddings.save()   
            })

            return res.json({status:'success'})
        
        }
        }
    )

      
            
         
            }

        )

app.post("/birthdaysAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
            files.map((val)=>{
                const image=val.filename;
                let newbirthDays=new birthday({
                    gallery:image
                })
                 newbirthDays.save()   
        })}
        return res.json({status:'success'})
        })
    }
)

app.post("/corporateEventsAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
            
                files.map((val)=>{
                    const image=val.filename;
                    let newcorporateevents=new corporateevent({
                        gallery:image
                    })
                     newcorporateevents.save()   
      })}
      return res.json({status:'success'})
    })})
           
           
    

app.post("/collegeFestsAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
                files.map((val)=>{
                    const image=val.filename;
                    let newcollegefests=new collegefest({
                        gallery:image
                    })
                     newcollegefests.save()   
            })}
        
            return res.json({status:'success'})
    })
})

       
         
    

app.post("/schoolEventsAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
          
                files.map((val)=>{
                    const image=val.filename;
                    let newschoolevents=new schoolevent({
                        gallery:image
                    })
                     newschoolevents.save()   
            })}
        
            return res.json({status:'success'})
        })
})
           
app.post("/babyShowersAPI",(req,res,next) => {
   
    upload(req,res,function(err){
        if(err){
            return res.json({Message:"Error"})
        }
        else{
            var files=req.files;
       
                files.map((val)=>{
                    const image=val.filename;
                    let newbabyshowers=new babyshower({
                        gallery:image
                    })
                    newbabyshowers.save()   
            })}
            return res.json({status:'success'})
        
})
        })
           
             

/* ----------- */

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
})

/*  The get() response of APIs */
app.get("/birthdaysAPI",(req,res)=>{
     birthday.find()
    .then(birthdays=>res.json(birthdays))
    .catch((err)=>res.json(err))
})
app.get("/weddingsAPI",(req,res)=>{
    wedding.find()
    .then(weddings=>res.json(weddings))
    .catch((err)=>res.json(err))
})
app.get("/babyShowersAPI",(req,res)=>{
    babyshower.find()
    .then(babyshowers=>res.json(babyshowers))
    .catch((err)=>res.json(err))
})
app.get("/corporateEventsAPI",(req,res)=>{
     corporateevent.find()
    .then(corporateevents=>res.json(corporateevents))
    .catch((err)=>res.json(err))
})
app.get("/collegeFestsAPI",(req,res)=>{
    collegefest.find()
    .then(collegefests=>res.json(collegefests))
    .catch((err)=>res.json(err))
})
app.get("/schoolEventsAPI",(req,res)=>{
    schoolevent.find()
    .then(schoolevents=>res.json(schoolevents))
    .catch((err)=>res.json(err))
})
/*---------------------------------*/
app.listen(8800);

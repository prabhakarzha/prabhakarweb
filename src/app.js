const express =require("express");
const path =require("path");
require("./db/conn");
const User = require("./models/usermessage");
const app =express();


const port =process.env.PORT ||3000;

//setting path
const staticpath = path.join(__dirname, "../public");
//middleware
app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist.css")));
app.use('/jss',express.static(path.join(__dirname, "../node_modules/bootstrap/dist.js")));
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");


app.get("/",(req,res)=>{
    
    res.render("index");
});



app.get("/contact",(req,res)=>{
    
    res.render("contact");
});
app.get("/About",(req,res)=>{
    
    res.render("About");
});
app.get("/skills",(req,res)=>{
    
    res.render("skills");
});
app.get("/Work",(req,res)=>{
    
    res.render("Work");
});





app.post("/contact",async(req,res) => {
    try{
       //res.send(req.body);
       const userData = new User(req.body);
       await userData.save();
      res.status(201).render("/");
    } catch(error) {
        res.status(500).send(error);
    }
})


app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})
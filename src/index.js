const express = require("express");
const app = express();
const hbs = require("hbs");
const bcrypt =require('bcryptjs')
const bodyparser = require('body-parser')
const mongo = require("../DB/database")
let path=require("path");
const PORT = process.env.PORT || 3889;
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname,"../public")));
hbs.registerPartials(path.join(__dirname,"../partials/"));

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {
    let {email, password} = req.body;
    mongo.Student.find({email_id: email}, (err, data) => {
        if(err){
            console.log(err);
        }else{
            try{
                if(data.length > 0){
                    if(bcrypt.compareSync(password, data[0].password)){
                        console.log("Compared");
                        res.redirect("/?msg=Login Successful")

                    }else{
                        res.redirect("/?msg=Invalid Credentials");
                    }
                }else{
                    console.log("Data is not found");
                }
            }catch(err){
                console.log(err);
            }
        }
    })
})
app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.post("/registration",async(req,res)=>
{
    const{fullname,fname,mname,dob,gen,category,address,qualification,university,percentage,year,identity,
        idno,contact,email,pwd,pwd1}=req.body;
  const epass=await bcrypt.hash(pwd,12)
  const dbdata={student_name:fullname,father_name:fname,mother_name:mname,date_of_birth:dob,
category:category,gender:gen,complete_address:address,qualification:qualification,board:university,
marks:percentage,passing_year:year,id_type:identity,id_number:idno,mobile_number:contact,
email_id:email,password:epass}
  await mongo.Student.insertMany([dbdata],(err,resp)=>
{
    if(err){
        console.log(err);
    }else{
        console.log(resp)
    }
});
console.log(dbdata);
res.redirect("/login");
   
});
app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
})
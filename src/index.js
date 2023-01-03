const express = require("express");
const app = express();
const hbs = require("hbs");
const bcrypt = require('bcryptjs')
const bodyparser = require('body-parser')
const mongo = require("../DB/database")
let path = require("path");
const session = require("express-session");
const mongosession = require("connect-mongodb-session")(session);
const PORT = process.env.PORT || 3889;
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "hbs");
<<<<<<< HEAD
app.set("views",path.join(__dirname,"../templates/views"));
=======
app.use(express.static(path.join(__dirname, "../public")));
hbs.registerPartials(path.join(__dirname, "../partials/"));
>>>>>>> 0dadcc9bff4350c5e4fb3d7086dab8d060ab1ac1
app.use(express.static(path.join(__dirname,"../public")));
hbs.registerPartials(path.join(__dirname,"../templates/partials/"));


const store = new mongosession({
    uri: mongo.url,
    collection: 'mysession',
});
app.use(session({
    secret: 'AATAMSU',
    resave: false,
    saveUninitialized: false,
    store: store
}));

const isStudent = (req,res, next) => {
    if(req.session.isStudent){
        next()
    } else {
        res.redirect('/login');
    }
}


app.get("/login", (req, res) => {
    if(req.session.isStudent){
        res.redirect("/")
    }else{
        res.render("login");
    }
});
app.post("/login", (req, res) => {
    let {email, password} = req.body;
    mongo.Student.find({email_id: email}, (err, data) => {
        if(err){
            console.log(err);
            res.redirect("/?msg=Some Error Orrcured")
        }else{
            try{
                if(data.length > 0){
                    if(bcrypt.compareSync(password, data[0].password)){
                        console.log("Compared");
                        req.session.isStudent = true;
                        req.session.StudentName = data[0].student_name;
                        res.redirect("/")

                    }else{
                        res.redirect("/login?msg=Invalid Credentials");
                    }
                }else{
                    res.redirect("/signup?msg=Data is not found");
                }
            }catch(err){
                console.log(err);
                res.redirect("/signup?msg=Data is not found");
            }
        }
    })
})
app.get("/signup", (req, res) => {
    res.render("signup");
})
app.post("/registration", async (req, res) => {
    const { fullname, fname, mname, dob, gen, category, address, qualification, university, percentage, year, identity,
        idno, contact, email, pwd, pwd1 } = req.body;
    const epass = await bcrypt.hash(pwd, 12)
    const dbdata = {
        student_name: fullname, father_name: fname, mother_name: mname, date_of_birth: dob,
        category: category, gender: gen, complete_address: address, qualification: qualification, board: university,
        marks: percentage, passing_year: year, id_type: identity, id_number: idno, mobile_number: contact,
        email_id: email, password: epass
    }
    await mongo.Student.insertMany([dbdata], (err, resp) => {
        if (err) {
            console.log(err);
        } else {
            console.log(resp)
        }
    });
    console.log(dbdata);
    res.redirect("/login");
});

app.get("/sign",(req,res)=>{
    res.render("sign");
})
app.post("/register",async(req,res)=>
{
    const{firstname,lastname,fname,mname,dob,gender,category,address,city,state,zip,qualification,university,percentage,year,identity,
        idno,contact,email,pwd,pwd1}=req.body;
        const fullname= firstname+" "+lastname;
        const complete_address= address +","+city+","+state+","+zip;
  const epass=await bcrypt.hash(pwd1,12)
  const dbdata={student_name:fullname,father_name:fname,mother_name:mname,date_of_birth:dob,
category:category,gender:gender,complete_address:complete_address,qualification:qualification,board:university,
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
<<<<<<< HEAD
console.log(dbdata);
res.redirect("/login");  
});
// Dashboard page
app.get("/",(req,res)=>{
    res.render("Dashboard");
})
// student page
app.get("/student",(req,res)=>{
    res.render("student");
})
// after search on the student page the details show of the student
app.get("/info",(req,res)=>{
    res.render("studentinfo");
=======
// console.log(dbdata);
res.redirect("/login");
   
});

app.get("/", (req, res) => {
    res.render("Dashboard");
})
app.get("/student", (req, res) => {
    res.render("student");
})

app.get("/signup",(req,res)=>{
    if(req.session.isStudent){
        res.redirect("/");
    }else{
        res.render("signup");
    }
});

app.get("/",isStudent ,(req,res)=>{
    res.render("Dashboard", {isStudentName: req.session.StudentName});
})
app.get("/student",(req,res)=>{
    res.render("student", {isStudentName: req.session.StudentName});
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        return res.redirect("/login");
    })
>>>>>>> 0dadcc9bff4350c5e4fb3d7086dab8d060ab1ac1
})
app.listen(PORT, () => {
    console.log("Server is started at port " + PORT);
})
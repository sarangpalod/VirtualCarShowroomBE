const express =  require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express ();
dotenv.config();

const port = process.env.PORT || 3000;





const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

 mongoose.connect(`mongodb+srv://${username}:${password}@cluster539.ubtj2zi.mongodb.net/registrationFormDB`, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

const registrationSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const Registration = mongoose.model("Registration" , registrationSchema);

app.use(bodyParser.urlencoded ({ extended: true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({"index" : "index"});
})

app.post("/register", async (req, res) => {
    try{
        const {name, email, password } = req.body;

        
        if(!name || !email || !password){
            return res.json({status : "error", error : "Invalid input"})
        }

        const existingUser = await Registration.findOne({email : email});
        if(!existingUser){
            const registrationData = new Registration({
                name,
                email,
                password
            });
            await registrationData.save();
            res.json({status : "ok"})
        }
        else { 
            res.json({status : "error", error : "Email already in use"})
        }
        
    }

    catch (error) {
        console.log(error)
        res.json({status : "error", error : "Server error"})
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})

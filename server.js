// import
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongose = require("mongoose");
const nameSchema = require("./schema/name_schema");

// port
const portNumber = 1234;
// Est connect to DB
mongose.connect("mongodb://localhost:27017/activityTracker",
    () => {
        console.log("Connected to DB");
    },
    (error) => {
        console.log("error in connecting DB : ");
        console.log(error);
    });
    
// listen to the port
app.listen(
    portNumber,
    () => {
        console.log("app is listening on : " + portNumber);
    }
)

//  GET api for getting Message

app.post("/signup-post-request", async (req, res) =>  {
    const name = req.query.Name;
    const email = req.query.Email; 
    const password = req.query.Password;
    const confirmPass = req.query.confirmPassword;
    var result = await nameSchema.create({
       Name:name,
        Email: email,
        Password: password,
        confirmPassword: confirmPass
    })
    res.status(201).send("User has added Successfully!!!",result);
});


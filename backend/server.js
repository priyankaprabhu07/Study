import express from 'express';
import mongoose from "mongoose";

import cors from 'cors';

const app = express();
const port = 5000;

// CORS policy
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

//MongoDB connection
mongoose.connect("mongodb+srv://pihuu:Pihu&pilli1104@cluster0.dkap272.mongodb.net/")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });


// Define Mongoose schema and model
const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    place: String,
    course: String,
    dob: Date
});

const Form = mongoose.model("Form", formSchema);


app.post('/form', async (req, res) => {

    try {

        const newForm = new Form(req.body);

        await newForm.save();

        res.json({
            message: "Form saved successfully",
            data: newForm
        });

    } catch (error) {

        res.status(500).json({
            message: "Error saving form",
            error: error.message
        });

    }

});

app.get('/users', async (req, res) => {

    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching forms",
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log('server is running');
});


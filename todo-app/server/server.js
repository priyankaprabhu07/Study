const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());


// ✅ CONNECT TO MONGODB
mongoose.connect("mongodb+srv://pihuu:Pihu&pilli1104@cluster0.dkap272.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error ❌", err);
  });
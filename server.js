const express=require("express"); 
const errorHandler = require("./middleWares/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv=require('dotenv').config();

const port =process.env.PORT;
const app = express();
connectDb(); 
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"));

app.use('/api/users',require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server up! ${port}`);
})
const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();

const app = express();
app.use('/',express.static(__dirname + '/public'));

app.use(cors({orgin:'http://localhost:3000'}))

    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started at port " +process.env.PORT);
    });

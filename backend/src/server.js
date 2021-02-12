import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "full_stack_eletro"
})

server.get("/product", (req, res) => {
    
    connection.query("SELECT * FROM product", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});


server.listen(3333);
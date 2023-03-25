import express, {Application} from "express";
import http from "http";

const app: Application = express();

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server is running!")
})
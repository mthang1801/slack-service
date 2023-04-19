import * as dotenv from 'dotenv';
import * as express from "express";
import * as httpServer from "http";
import { join } from 'path';
import * as socketio from "socket.io";
import namespaces from './data/namespaces';

dotenv.config()

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(join(__dirname, "..", "public")))

const server = httpServer.createServer(app);
const io = socketio(server);

namespaces.forEach(namespace => {
    
})
const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is Listen on PORT ${PORT}`))

 




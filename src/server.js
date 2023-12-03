import http from 'node:http'
import {json} from "./middlewares/json.js";

const users = []

const server = http.createServer(async (req, res) => {
    const {method, url} = req

//Buffer Stream
   await json(req, res);


    if (method === "GET" && url === '/users') {
        return res
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const {name, email} = req.body;
        users.push({
            id: 1,
            name: name,
            email: email
        })

        return res.writeHead(201).end()
    }


    console.log(method, url)


    return res.writeHead(404).end("Rota nao existe")


})

server.listen(3333)
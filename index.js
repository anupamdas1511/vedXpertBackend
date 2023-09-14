import http from 'http'
import app from './app.js'

const server = http.createServer(app)

const {API_PORT} = process.env
const port = API_PORT

// server listening
server.listen(port, () => {
    console.log(`listening on port ${process.env.API_PORT}`)
})
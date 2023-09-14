import http from 'http'
import app from './app.js'

const server = http.createServer(app)

const {API_PORT} = process.env

server.listen(API_PORT, () => {
    console.log(`listening on port ${API_PORT}`)
})
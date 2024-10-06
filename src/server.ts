import express from 'express'
import router from './routes/coments-router.js'
import './db/connection.js'

const server = express()
const port = 3333

server.use(express.json())
server.use('/api', router)

server.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})

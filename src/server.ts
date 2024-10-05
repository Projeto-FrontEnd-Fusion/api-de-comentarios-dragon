import express from 'express'

const server = express()
const port = 3333

server.get('/', (_req, res) => {
	res.status(200).json({ Hello: 'World!' })
})

server.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})

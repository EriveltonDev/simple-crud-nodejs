import express, { Response, Request } from 'express'
import { router } from './routes'

const server = express()

server.use(express.json())
server.use(router)

server.get('/', (_: Request, response: Response) => {
    response.status(200).json({message: 'API is running'})
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})

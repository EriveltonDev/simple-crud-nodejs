import 'express-async-errors'
import express, { type Response, type Request, type NextFunction } from 'express'
import { routes } from './routes'
import { AppError } from './errors/AppError'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
})

server.get('/', (_: Request, response: Response) => {
  response.status(200).json({ message: 'API is running' })
})

server.listen(3000, () => {
  console.log('Server is running on port 3000')
})

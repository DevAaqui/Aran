import express from 'express'
import bodyParser from 'body-parser'

import todosroutes from './routes/todos'


const app = express()

app.use(bodyParser.json())

app.use(todosroutes)

app.listen({port: 3000})
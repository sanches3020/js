import express from 'express'
import {config} from './config.js'

const app = express()

app.use(express.static('../jscript'))

app.use(express.json())
app.post('/config', (request, response) => {
    try {

        response.json()
    } catch (e) {
        response.status(500).json({error: 'Invalid data'})
    }
})


app.get('/config',(request, response) => {
    response.json(config)
})

app.listen(config.PORT, () => {
    console.log(`Server: http://localhost:${config.PORT}`)
})

import express from 'express'
import {put, config} from './config.js'

const app = express()

app.use(express.static('.'))

app.use(express.json())
app.post('/config', (req, res) => {
    try {
        for (const key of Object.keys(req.body)) {
            put(key, req.body[key])
        }
        res.json(config)
    } catch (e) {
        res.status(500).json({error: 'Invalid data'})
    }
})

app.listen(config.PORT, () => {
    console.log(`Server: http://localhost:${config.PORT}`)
})

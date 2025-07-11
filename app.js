import 'dotenv/config'
import express from 'express'
import cloudinaryConfig from './lib/cloudinaryConfig.js'
import imagesRouter from './routes/images.route.js'

const app = express()

cloudinaryConfig()

app.use(cors({ origin: '*' })) // Not safe for production

//built-in middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/v1/images', imagesRouter)

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.listen(5000, async (req, res) => {
    console.log(`app is listening on port [http://localhost:5000]`)
})
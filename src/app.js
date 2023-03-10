import express from 'express'
import formRoutes from './routes/user.js'
import cors from 'cors'
import router from './routes/user.js';

const app = express();

app.use(formRoutes)
app.use(cors())
app.use(express.json())

//modulos
app.use('/info', router)

export default app;
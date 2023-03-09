import express from 'express'
import formRoutes from './routes/user.js'

const app = express();

app.use(formRoutes)

export default app;
import express from'express'
const app = express()
import cors from'cors'
import projectsRouter from './routes/projects.js'

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())

app.use("/api/projects", projectsRouter)

app.listen(8800, () => {
    console.log("server listening on port 8800");
})
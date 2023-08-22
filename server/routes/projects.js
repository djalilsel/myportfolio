import Express from 'express'
import { getProjects } from '../controllers/projects.js'


const router = Express.Router()

router.get("/all", getProjects)

export default router
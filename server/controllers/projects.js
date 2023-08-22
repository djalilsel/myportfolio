import { db } from "../db.js"

export const getProjects = (req, res) => {
    
    const q = "SELECT * FROM projects"

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("no projects")
        res.status(200).json(data)
    })
}


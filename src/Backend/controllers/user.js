import {mysql} from "../db"

export const getUser = (_, res) => {
    const q = "SELECT * FROM interessado";

    mysql.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}
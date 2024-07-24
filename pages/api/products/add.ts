import {NextApiRequest, NextApiResponse} from "next";


export default async (req:NextApiRequest, res:NextApiResponse) => {
    const {name, email, subject, message} = req.body
}
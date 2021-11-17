import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import db from '../../../services/mongodb'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { post } = req.body

      await db.collection('posts').insertOne(post, (err, res) => {
        if (err) throw err

        db.close()
      })

      return res.status(200).json({
        post,
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}

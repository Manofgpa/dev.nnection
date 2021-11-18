import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { connectToMongoDB, db } from '../../../services/mongodb'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { Schema } = mongoose

  if (req.method === 'POST') {
    try {
      const { post } = req.body
      const postSchema = new Schema({
        message: String,
        user: String,
        timestamp: Date,
      })

      connectToMongoDB()

      db.close()

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

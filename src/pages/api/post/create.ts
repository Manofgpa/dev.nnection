import { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongoDB } from '../../../services/mongodb'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { post } = req.body

      try {
        connectToMongoDB()
        await newPost.save(async (err, newPostResult) => {
          console.log('Post created', newPostResult)
          res.end('New post created!')
        })
      } catch (error) {
        console.log(error)
      }

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

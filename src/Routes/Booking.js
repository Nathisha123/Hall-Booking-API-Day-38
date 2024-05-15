import express from 'express'
import  HomeController from '../Controller/Home.js'
import BookingRoutes from './Home.js'

let router=express.Router()

router.get('/',HomeController.homePage)

router.use('/hall-booking',BookingRoutes)

export default router
const Workout = require('../models/Workout')
const bcrypt = require('../')
//cryptr stuff; remember to change secret key to .env variable
const Cryptr = require('cryptr')
const cryptr = new Cryptr('SampleSecretKey')

//-=-=-=-=-=-=-//Encoder/Decoder//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
class MrCryptr {
    contructor() {}
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    encodeData(data, objBool) {
        if (objBool) { 
            const obj = JSON.stringify(data)
            const encryptedObj = cryptr.encrypt(obj)
            return encryptedObj
        }
        const encryptedData = cryptr.encrypt(data)
        return encryptedData
    }
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    decodeData(data, objBool) {
        const decoded = cryptr.decrypt(data)
        if (objBool) {
            return JSON.parse(decoded)
        } else {
            return decoded
        }
    }
}
let cryptrKeeper = new MrCryptr()
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//


module.exports = {
    getWorkouts: async (req,res)=>{
        console.log(req.user)
        try{
            const workoutItems = await Workout.find({userId:req.user.id})
            const workoutsLeft = await Workout.countDocuments
            //add a find for partial as well
            ({userId:req.user.id,completed: false})
            res.render('workouts.ejs', {workouts: workoutItems, left: workoutsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createWorkout: async (req, res)=>{
        try{
            await Workout.create({todo: req.body.workoutItem, completed: false, userId: req.user.id})
            console.log('Workout has been added!')
            res.redirect('/workouts')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Workout.findOneAndUpdate({_id:req.body.workoutIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Workout.findOneAndUpdate({_id:req.body.workoutIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteWorkout: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Workout.findOneAndDelete({_id:req.body.workoutIdFromJSFile})
            console.log('Deleted Workout')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}
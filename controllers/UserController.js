import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserController = {
    async getUsers(req,res) {
        try {
            const users = await UserModel.find()
            res.status(200).send(users)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: 'Error obtaining users'})
        }
    },
    async register(req,res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const user = await UserModel.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            res.status(500).send({ messago: 'There was an error creating the user', error});
        }
    }, 
    async login(req,res) {
        try {
            const user = await UserModel.findOne({
                email: req.body.email
            })
            if (!user){
                return res.status(400).send({ message: 'Wrong credentials'})
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if(!isMatch){
                return res.status(400).send({ message: 'Wrong credentials'})
            }
            const token = jwt.sign({_id:user._id}, 'mysecretword',)
            UserModel.findByIdAndUpdate(user._id,{
                $push: {
                    tokens:token
                }
            })
            res.send({
                user,
                token
            })
        } catch (error) {
            console.error(error)
            res.status(500).send ({ message: 'There was an error creating the user', error});
        }
    },
    async logout(req,res) {
        try {
            await UserModel.findByIdAndUpdate(req.user._id, {
                $pull: {
                    tokens: req.headers.authorization
                }
            });
            res.send({ message: 'Successfully logout'})
        } catch (error) {
            console.error(error)
            res.status(500).send({message: 'There was a problem trying to logout', error});
        }
    }
}

export default UserController;
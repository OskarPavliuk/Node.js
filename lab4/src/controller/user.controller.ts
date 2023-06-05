import express from "express";
import * as userService from '../services/user.service'

const userRoutes = express.Router();

userRoutes.route("/").get((req, res)=>{
    return res.send(userService.getAll());
})
userRoutes.route("/:id").get((req, res)=>{
    const user =userService.getOne(req.body.id);
    return res.send(user);

})
userRoutes.route("/").post((req, res)=>{
    const {name, username} = req.body;
    if(name && username){
        const user = userService.create(req.body);
        res.status(201).send(user);
        return;
    }
    res.sendStatus(400);
})

userRoutes.route("/:id").put((req, res) => {
    try{
        const updatedUser = userService.update(req.params.id, req.body);
        res.send(updatedUser);
    } catch (e){
        res.status(500).send({error:e});
    }

})
userRoutes.route("/:id").put((req, res) => {
    try{
        userService.deleteOne(req.params.id);
        } catch (e){
        res.status(500).send({error:e});
    }

})
export default userRoutes;

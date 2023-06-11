import {database} from '../database'
import {User} from '../entities/User.entity';
import uuid from 'crypto'
export function create(user: User){
    user.id=uuid.randomUUID();
    database.push(user);
    return user;
}
export function getOneById(id: string){
    return database.find(u=>u.id=id);
}

export function getAll(){
    return [...database];
}
export function deleteOne(id: string){
    const index = database.findIndex(u=>u.id=id);
    database.splice(index, 1);
}
export function updateOne(id: string, data: User){
    const user = getOneById(id);
    if(user){
        let key:keyof typeof user;
        for(key in user){
            user[key]=data[key];
        }
    return user;
    } else{
        throw new Error("User not found");
    }
}
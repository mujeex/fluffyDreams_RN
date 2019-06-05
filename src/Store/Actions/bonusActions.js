import {ADD_POINTS} from './actionTypes'

export const addPoints= (points)=>{
    return{
        type:ADD_POINTS,
        value: points
    }
}
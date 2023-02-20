import { Router } from 'express';

import {Todo} from '../model/todosModel'

const router = Router()

const todos: Todo[] = []

router.get('/', (req,res,next)=> {
    return res.status(200).json({todos:todos})
})

router.post('/todo', (req,res,next)=> {
    const newTodo : Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newTodo)
    return res.status(201).json({todos: todos, message: "Todo Created"})
})

router.put('/todo/:todoId', (req,res,next)=> {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todoItem=> todoItem.id === todoId)
    if(todoIndex>-1){
        todos[todoIndex] = {id: new Date().toISOString(), text: req.body.text}
        return res.status(200).json({message: 'TODO UPDATED', todos: todos})
    }
    else{
        return res.status(404).json({message: 'ID not found'})
    }
})

router.delete('/todo/:todoId', (req,res,next)=> {
    const todoId = req.params.todoId

    const array = todos.filter((todoItem) => todoItem.id !== todoId)
    if(array){
        return res.status(200).json({message: 'Deleted', todos: array})
    }
    else{
        return res.status(404).json({message: 'ID not found'})
    }
    
    // const todoIndex = todos.findIndex(todolist => {todolist.id === todoId})
    // if(todoIndex>-1){
    //     todos.splice(todoIndex,1)
    //     return res.status(200).json({message: 'DELETED the todo'})
    // }
    // else{
    //     return res.status(404).json({message: 'Did not find ID'})
    // }
    
})

export default router
import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

let initialState =[]

export const todosReducer =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_TODO:
            return[
                ...state,{
                    id: action.payload.id,
                    text: action.payload.text,
                    complete: false
                }
            ]
        
        case TOGGLE_TODO:
            return state.map((todo)=>
                (todo.id=== action.payload.id)?
            {
               ...todo,
               complete: !todo.complete 
            }:todo)
        

        default:
           return state
    }
}
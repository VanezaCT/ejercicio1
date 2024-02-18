import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers(
   {
        todoState: todosReducer,
        filterReducer: filterReducer

   }
)
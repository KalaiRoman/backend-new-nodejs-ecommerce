import { combineReducers } from "redux";
import reducer from "./Bike_reducer";

import bikeeditreducer from './Bike_reducer_edit'




const RootReducer = combineReducers({
    bike: reducer,
    bikeedit:bikeeditreducer
});


export default RootReducer;
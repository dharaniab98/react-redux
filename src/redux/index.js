import {combineReducers} from 'redux';
import mobileReducer from './mobile/reducer';

const rootReducer = combineReducers({mobiles:mobileReducer})
export default rootReducer
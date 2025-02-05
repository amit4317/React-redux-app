import { combineReducers } from "redux";

import Userlist from "./userreducer";
import Productlist from "./productreducer";
import Apilist from "./apireducer";

const ALlreducer = combineReducers({Userlist, Productlist, Apilist});

export default ALlreducer;
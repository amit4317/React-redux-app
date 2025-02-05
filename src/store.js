import { legacy_createStore as createStore } from "redux";

import ALlreducer from "./mainreducer";

const Mystore =  createStore(ALlreducer);


export default Mystore;
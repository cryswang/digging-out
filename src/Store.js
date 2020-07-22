/* This will link the App to the reducer (redux store).
This then needs to be used within the application. It can
be put in either App.js or index.js */

import { createStore } from "redux";
import reducer from "./Reducer";

const rootStore = createStore(reducer);

export default rootStore;
import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import countriesReducer from "./countriesReducer";

const rootReducer = combineReducers({
  cartReducer,
  countriesReducer,
});

// export type Store = ReturnType<typeof rootReducer>

export default rootReducer;

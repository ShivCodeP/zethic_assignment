import { createStore, combineReducers} from "redux";

import { default as ProductReducer } from "../features/Product/reducer.js";

import { default as AuthReducer } from "../features/Auth/reducer.js";

const rootReducer = combineReducers({
  productState: ProductReducer,
  authState: AuthReducer
});

export const store = createStore(rootReducer);

console.log(store.getState())
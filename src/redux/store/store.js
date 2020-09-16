import{createStore}from "redux"
import conterReducer from'../reducer/conterReducer'
const store =createStore(conterReducer)
export default store
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import type { ThunkDispatch, ThunkAction as BaseThunkAction } from 'redux-thunk'
import thunk from 'redux-thunk'

import ReducerAuth from './ReducerAuth'
import ReducerClient from './ReducerClient'
import {combineReducers} from 'redux'
import {firestoreReducer,fire} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'




const ReducerRoot = combineReducers({
    auth:ReducerAuth,
    clients:ReducerClient,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default ReducerRoot;


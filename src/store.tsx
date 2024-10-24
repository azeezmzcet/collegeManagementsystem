
// store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import courseReducer from './course/reducer';
import teacherReducer from './createteacher/reducer.tsx';
import { courseSaga } from './course/saga.tsx';


import { teacherSaga } from './createteacher/saga.tsx';
import authReducer from './login/loginreducer.tsx';
import watchLogin from './login/saga.tsx';



const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  courseReducer,
  teacherReducer,
  authReducer,
  

  
  
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(courseSaga); 
 sagaMiddleware.run(teacherSaga); 
 sagaMiddleware.run(watchLogin); 

 export type RootState = ReturnType<typeof rootReducer>;
 
export default store;


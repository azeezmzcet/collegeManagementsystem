// // // store.js
// // import { createStore, applyMiddleware } from 'redux';
// // import createSagaMiddleware from 'redux-saga';
// // import { courseReducer } from './reducers';
// // import rootSaga from './sagas';

// // const sagaMiddleware = createSagaMiddleware();
// // const store = createStore(courseReducer, applyMiddleware(sagaMiddleware));

// // sagaMiddleware.run(rootSaga);

// // export default store;



// store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import courseReducer from './course/reducer';
import teacherReducer from './createteacher/reducer.tsx';
import { courseSaga } from './course/saga.tsx';

//import teacherReducer from './teacherdashboard/reducer';
import { teacherSaga } from './createteacher/saga.tsx';

// import teacherCreateReducer from './createteacher/reducer';
// import { teacherCreateSaga } from './createteacher/saga';

// import rootReducerrr from '../dashboardredux/dashboard/reducer.tsx';
// import rootSaga from '../dashboardredux/dashboard/saga.tsx';


// import rootReducerrr from './dashboard/reducer';
// import rootSaga from './dashboard/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  courseReducer,
  teacherReducer,
  // teacherCreateReducer,
  // rootReducerrr,
  
  // other reducers can go here if you have more
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(courseSaga); // Run the saga middleware
 sagaMiddleware.run(teacherSaga);
// sagaMiddleware.run(teacherCreateSaga); 
// sagaMiddleware.run(rootSaga);

export default store;


import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action){
  //axios weather response comes in from actions
  switch (action.type) {
    case FETCH_WEATHER:
      //Dont push, state is immutble, have to concat
      //return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}

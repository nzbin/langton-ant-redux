import { combineReducers } from 'redux';

import boardReducer from './reducer_board';
import playStatusReducer from './reducer_play_status';
import generationsReducer from './reducer_generations';

const rootReducer = combineReducers({
  board: boardReducer,
  playState: playStatusReducer,
  counter: generationsReducer
});

export default rootReducer;
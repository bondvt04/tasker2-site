import { AppState } from './app-state';

import {
  INCREMENT,
  DECREMENT
} from './counter-action-creators';
import {Reducer} from "redux";
import {Action} from "./action";


let initialState: AppState = { counter: 0 };
// Create our reducer that will handle changes to the state
export const counterReducer: Reducer<AppState> =
  (state: AppState = initialState, action: Action): AppState => {
    switch (action.type) {
      case INCREMENT:
        return (<any>Object).assign({}, state, { counter: state.counter + 1 });
      case DECREMENT:
        return (<any>Object).assign({}, state, { counter: state.counter - 1 });
      default:
        return state;
    }
  };

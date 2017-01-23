import {Action} from "./action";

interface Reducer<T> {
  (state: T, action: Action): T;
}

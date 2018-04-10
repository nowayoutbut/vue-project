import { MutationTree } from 'vuex';
import { State } from './';

const mutations: MutationTree<State> = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    console.log(state);
    state.count--;
  },
};

export default mutations;

import Vue from 'vue';
import Vuex, { MutationTree, ActionTree } from 'vuex';
import { resolve } from 'path';
import mutations from './mutations';

Vue.use(Vuex);

export interface State {
  count: number;
}

function sleep(wait: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}

const actions: ActionTree<State, State> = {
  async asyncIncrement({ commit }) {
    commit('increment');
  },
};

const state: State = {
  count: 10,
};

const store = new Vuex.Store<State>({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
});

if (module.hot) {
  module.hot.accept(['./mutations'], () => {
    store.hotUpdate({
      mutations: require('./mutations').default,
    });
  });
}

export default store;

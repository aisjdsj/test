// import { createStore } from 'vuex'

import { createStore } from 'vuex';

interface State {
  cards: number[];
}

const store = createStore<State>({
  state: {
    cards: [1, 2, 3, 4, 5],
  },
  mutations: {
    shuffleCards(state) {
      state.cards.sort(() => Math.random() - 0.5);
    },
    updateCard(state, payload: { index: number; newValue: number }) {
      state.cards[payload.index] = payload.newValue;
    },
  },
});

export default store;


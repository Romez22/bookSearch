import { createEntityStore } from '@datorama/akita';

const initialState = {};

export const bookStore = createEntityStore(initialState, {
  name: 'book'
});

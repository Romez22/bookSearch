import { createEntityQuery } from '@datorama/akita';
import { bookStore } from './book.store';

export const bookQuery = createEntityQuery(bookStore);

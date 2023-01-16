import { bookStore } from './book.store';

export async function update(id, data) {
  await Promise.resolve();
  bookStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  bookStore.remove(id);
}

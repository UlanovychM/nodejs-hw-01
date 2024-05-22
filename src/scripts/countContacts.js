import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    return JSON.parse(buffer.toString().length);
  } catch (e) {
    console.log(e);
  }
};

console.log(await countContacts());

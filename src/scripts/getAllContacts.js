import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    return JSON.parse(buffer.toString());
  } catch (e) {
    console.log(e);
  }
};

console.log(await getAllContacts());

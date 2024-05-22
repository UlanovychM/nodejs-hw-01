import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer.toString());
    data.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (e) {
    console.log(e);
  }
};

await addOneContact();

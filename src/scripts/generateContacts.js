import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const buffer = await fs.readFile(PATH_DB);
    const data = JSON.parse(buffer.toString());
    const newUsers = Array.from({ length: number }, () => createFakeContact());
    const allUsers = [...data, ...newUsers];
    await fs.writeFile(PATH_DB, JSON.stringify(allUsers, null, 2));
  } catch (e) {
    console.log(e);
  }
};

await generateContacts(5);

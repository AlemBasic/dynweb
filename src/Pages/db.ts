export {};
const pgp = require('pg-promise')();
const connectionString = 'postgres://user:1814@localhost:5432/oblig';
export const db = pgp(connectionString);

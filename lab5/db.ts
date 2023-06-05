import { Client, ClientConfig } from 'pg';

// Вводимо нашу базу даних
const connectionOptions: ClientConfig = {
  host: 'host',
  port: 'port',
  user: 'user',
  password: 'password',
  database: 'database',
};


const client: Client = new Client(connectionOptions);

export default client;
import bcrypt from 'bcrypt';
import { getClient } from '../db'

async function loadAdminUser(username: string, password: string) {
  const client = await getClient();
  await client.connect();
  await client.query("begin");

  const saltRounds = 10;
  const hashdedPassword = await bcrypt.hash(password, saltRounds);
  await client.query(
    "insert into public.users (username, password, is_admin) values ($1, $2, $3)",
    [username, hashdedPassword, true]
  );
  await client.query("commit");
  console.log(`executing loading admin user ${username}, ${password}`);
  client.end();
}
const username = process.argv[2];
const password = process.argv[3];
loadAdminUser(username, password)
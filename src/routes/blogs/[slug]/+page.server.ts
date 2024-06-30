import { sql } from "@vercel/postgres";
import { createClient } from "@vercel/postgres";

async function queryNames() {
  const client = createClient();
  await client.connect();

  try {
    const names = await client.sql`SELECT * FROM names;`;
    return names;
  } finally {
    await client.end();
  }
}

export async function load({ locals }) {
  return {
    names: await queryNames(),
  };
}

import { Client } from "pg";

describe("Database", () => {
  test("connection", async () => {
    const database = new Client({
      host: "127.0.0.1",
      port: 5432,
      database: "cicd_database",
      user: "${{secrets.DATABASE_POSTGRES_USER}}",
      password: "${{secrets.DATABASE_POSTGRES_PWD}}",
    });

    const connected = await database
      .connect()
      .then(() => true)
      .catch(() => false)
      .finally(async () => await database.end());
    expect(connected).toBe(true);
  });
});

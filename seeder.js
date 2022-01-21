
const { MongoClient } = require("mongodb");
require("dotenv").config();
const fs = require("fs").promises;
const path = require("path");
const loading = require("loading-cli");
const { MONGODB_URI, MONGODB__PRODUCTION_URI} = process.env;

 const client = new MongoClient(
    process.env.NODE_ENV === "production" ? MONGODB__PRODUCTION_URI : MONGODB_URI
  );

async function main() {
  try {
    await client.connect();
    const db = client.db();
    const results = await db.collection("cards").find({}).count();

    if (results) {
      console.info("deleting collection");
      await db.collection("cards").drop();
    }

    const load = loading("importing cards 🃏").start();

    const data = await fs.readFile(path.join(__dirname, "card_data.json"), "utf8");
    await db.collection("cards").insertMany(JSON.parse(data));

    load.stop();
    console.info(
      `Card collection set up.`
    );
    process.exit();
    
  } catch (error) {
    console.error("error:", error);
    process.exit();
  }
}

main();
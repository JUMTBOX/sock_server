const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const { MongoURI } = process.env;

const client = new MongoClient(MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;

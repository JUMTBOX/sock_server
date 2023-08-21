const mongoClient = require("./mongoConnect");

const userLogin = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const users = client.db("board").collection("users");
    const findUser = await users.findOne({ userId: req.body.userId });
    if (findUser.password === req.body.password) {
      res.json("OK");
    } else {
      res.json("wrongpw");
    }
  } catch (err) {
    res
      .status(500)
      .json("cannot find user or something went wrong at serverside");
    console.error(err);
  }
};

const userRegister = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const users = client.db("board").collection("users");
    const findUser = await users.findOne({ userId: req.body.userId });
    if (findUser) {
      console.log("already registered user!");
      res.json("fail");
    } else {
      const signup = await users.insertOne({
        userId: req.body.userId,
        password: req.body.password,
      });
      if (signup) res.json("OK");
      console.log("register success!");
    }
  } catch (err) {
    res.status(500).json("register failed");
    console.error(err);
  }
};

module.exports = { userLogin, userRegister };

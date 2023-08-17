const mongoClient = require("./mongoConnect");

const getAllArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");

    const allArticles = board.find({});
    const allData = await allArticles.toArray();
    if (allArticles) res.status(200).json(allData);
  } catch (err) {
    res.status(400).json("글 읽어오기 실패");
    console.error(err);
  }
};

const createArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");

    const addArticle = await board.insertOne({
      title: req.body.title,
      author: req.session.userID,
      content: req.body.content,
    });
    if (addArticle) res.status(200).json("포스팅 성공!");
  } catch (err) {
    res.status(400).json("포스팅 실패");
    console.error(err);
  }
};

module.exports = { getAllArticle, createArticle };

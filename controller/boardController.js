const { ObjectId } = require("mongodb");
const mongoClient = require("./mongoConnect");

const getAllArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");
    board.createIndex({ article_id: 1 });
    const allArticles = board.find({});
    const allData = await allArticles.toArray();
    if (allArticles) res.status(200).json(allData);
  } catch (err) {
    res.status(400).json("글 읽어오기 실패");
    console.error(err);
  }
};

const getOneArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");

    const oneArticle = board.findOne({ article_id: req.params.id });
    if (oneArticle) res.status(200).json(oneArticle);
  } catch (err) {
    res.status(400).json("글을 찾을 수 없습니다.");
    console.error(err);
  }
};

const createArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");

    const addArticle = await board.insertOne({
      article_id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    });
    if (addArticle) res.status(200).json("포스팅 성공!");
  } catch (err) {
    res.status(400).json("포스팅 실패");
    console.error(err);
  }
};

const modifyArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const board = client.db("board").collection("articles");
    const getModifiedOne = board.findOne({
      article_id: ObjectId(req.params.id),
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAllArticle, getOneArticle, createArticle };

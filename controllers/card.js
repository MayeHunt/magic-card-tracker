const Card = require("../models/Card");

exports.list = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.render("cards", { cards: cards });
  } catch (e) {
    res.status(404).send({ message: "could not list cards" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Card.findByIdAndRemove(id);
    res.redirect("/cards");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};

exports.create = async (req, res) => {
  
  try {
    let card = new Card({ Name: req.body.Name, Type: req.body.Type, Level: req.body.Level, Race: req.body.Race, Attribute: req.body.Attribute, ATK: req.body.ATK, DEF: req.body.DEF, Collected: req.body.Collected});
    await card.save();
    console.log(req.body)
    res.redirect("/cards/?message=card has been created");
  } catch (e) {
    if(e.errors) {
      console.log(e.errors);
      res.redirect('/cards')
      return;
    }
    return res.status(400).send({
      message: e,
    });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  try {
    const card = await Card.findById(id);
    res.render('update', { card: card, id: id });
  } catch (e) {
    res.status(404).send({
      message: `could find card ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const card = await Card.updateOne({ _id: id }, req.body);
    res.redirect('/cards/?message=card has been updated');
  } catch (e) {
    res.status(404).send({
      message: `could find card ${id}.`,
    });
  }

};

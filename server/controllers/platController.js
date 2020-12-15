
const Plat = require('../models/platModel');



exports.addPlat = async   function(req, res) {
    
    const plat = new Plat({
    name: req.body.name,
    sizes: req.body.sizes,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    priceIngredients: req.body.priceIngredients,
    supplements: req.body.supplements,
    priceSupplements: req.body.priceSupplements,
    description: req.body.description,
  });
  const newPlat = await plat.save();
  if (newPlat) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newPlat });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
  
  }
  exports.getPlats = async function (req, res){
    const plats = await Plat.find({});
    if (plats) {
      res.send(plats);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  }
 

  exports.getPlat = async function (req, res){
    
    const plat = await Plat.findOne({ _id: req.params.id });
    if (plat) {
      res.send(plat);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  }
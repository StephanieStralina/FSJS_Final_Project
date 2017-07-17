// src/routes/index.js
const router = require('express').Router();
//mongoose
const mongoose = require('mongoose');

// const FILES =
// [
//   {"name":"Potato Curry", "img": "https://thehealthytart.com/wp-content/uploads/2017/05/chickpea-and-potato-curry-with-bowl.jpg", "url": "https://thehealthytart.com/chickpea-potato-curry/" },
//   {"name":"Biancomangiare", "img": "http://www.cardamomoandco.it/wp-content/uploads/2017/05/biancomangiare-alle-mandorle-8293.jpg", "url": "http://www.cardamomoandco.it/2017/05/biancomangiare-ricetta.html" },
//   {"name":"Pork Carnitas Tacos", "img": "http://www.beckysbestbites.com/wp-content/uploads/2017/03/Easy-Slow-Cooker-Pork-Carnitas-Tacos-featured.jpg", "url": "http://www.beckysbestbites.com/easy-slow-cooker-pork-carnitas-tacos/" },
//   {"name":"Miso Ramen", "img": "https://i2.wp.com/drizzleanddip.com/wp-content/uploads/2017/05/O6A4385.jpg?w=700", "url": "http://drizzleanddip.com/2017/05/29/easy-miso-ramen-recipe-with-roast-chicken-and-mushrooms/" },
//   {"name":"Quinoa Spring Rolls", "img": "http://strengthandsunshine.com/wp-content/uploads/2017/05/Spring-Rolls-with-Homemade-Duck-Sauce-4.jpg", "url": "http://strengthandsunshine.com/quinoa-spring-rolls-homemade-duck-sauce-gluten-free-vegan-allergy-free/" },
//   {"name":"Hillbilly Hamburger Casserole", "img": "http://simplegreenmoms.pqr9ltq9weu7exq.netdna-cdn.com/wp-content/uploads/2017/04/Hillbilly-Hamburger-Casserole-Simple-Green-Moms-Recipes-3.jpg?x92350", "url": "http://simplegreenmoms.com/hillbilly-hamburger-casserole/" },
//   {"name":"Fried Cheese with Jam", "img": "https://i0.wp.com/www.spainonafork.com/wp-content/uploads/2017/05/QUESO1-11.png?w=500", "url": "http://www.spainonafork.com/fried-cheese-with-blueberry-jam/" },
//   {"name":"Bahn Mi", "img": "https://www.morselsofparadise.com/wp-content/uploads/2017/05/Pork-Banh-Mi-3-1.jpg", "url": "https://www.morselsofparadise.com/banh-mi-recipe/" },
//   {"name":"Grilled Veggie Platter", "img": "https://i1.wp.com/www.spainonafork.com/wp-content/uploads/2017/05/veggies3-11.png?w=500", "url": "http://www.spainonafork.com/grilled-vegetable-platter/" },
//   {"name":"Coconut Curry", "img": "https://i2.wp.com/www.nikkisplate.com/wp-content/uploads/2017/05/CoconutCurryRice.jpg?w=700", "url": "http://www.nikkisplate.com/4-ingredient-coconut-curry-rice/" },
//   {"name":"Asparagus Tortellini", "img": "https://i2.wp.com/supermancooks.com/wp-content/uploads/2017/05/asparagus-tortellini2a.jpg?w=680", "url": "http://supermancooks.com/asparagus-tortellini-blue-cheese-pesto/" },
//   {"name":"All-American Hot Dogs", "img": "http://thenutfreevegan.net/wp-content/uploads/2017/05/MG_1867memorial-day-vegan-hot-dog-recipe-seattle-new-york-kansas-city-vegan-frankfurter-best-delicious_.jpg", "url": "http://thenutfreevegan.net/all-american-hot-dogs-three-ways/" }
// ]

//express router bundle of middleware below
router.use('/doc', function(req, res, next) {
  res.end(`Documentation http://expressjs.com/`);
});

// router.get('/', (req, res) => {
//   res.render('home');
// });

router.get('/file', function(req, res, next) {
  mongoose.model('File').find({}, function(err, files) {
  if (err) {
    console.log(err);
    res.status(500).json(err);
  }

  res.json(files);
});
});

// router.get('/file/:fileId', function(req, res, next) {
//   const {fileId} = req.params;
//   const file = FILES.find(entry => entry.id === fileId);
//   if (!file) {
//     return res.status(404).end(`Could not find file '${fileId}'`);
//   }
//   res.json(file);
// });

router.post('/file', function(req, res, next) {
  const newId = '' + FILES.length;
  const data = req.body;
  data.id = newId;

  FILES.push(data);
  res.status(201).json(data);
});

// router.put('/file/:fileId', function(req, res, next) {
//   const {fileId} = req.params;
//   const file = FILES.find(entry => entry.id === fileId);
//   if (!file) {
//     return res.status(404).end(`Could not find file '${fileId}'`);
//   }
//
//   file.name = req.body.name;
//   file.img = req.body.img;
//   res.json(file);
// });


// router.get('/recipes', function(req, res, next){
//   res.end("GET THE RECIPES");
// });
//
// router.post('/recipes', function(req, res, next){
//   res.end("RECIPES GOT")
// });



module.exports = router;

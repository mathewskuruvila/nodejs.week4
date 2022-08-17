const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  var products = [
    {
      name: "vivo Y01",
      description: "Slate Gray, 8GB RAM, 128GB Storage ",
      image: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/f/n/f/-original-imaggbtuwq32w4et.jpeg?q=70"
    },
    {
      name: "Vivo Y21G ",
      description: "128 GB, 8 GB RAM, Turbo Cyan, Mobile Phone",
      image: "https://www.reliancedigital.in/medias/Vivo-T1-Pro-5G-Mobiles-492850285-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQyNTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGM1L2g2MS85ODY2ODAxNjc2MzE4LmpwZ3xhMGMzMzBhZTY3NWVjNGExMGVjZjEyNzVhZGM4NjMyMTgzY2Q4MjhlZDAwOWZmY2I5NWNhYmFjODI0MTA3ZmIw"
    },
    {
      name: "Vivo V23 5G",
      description: "(Stardust Black, 8GB RAM) (128GB Storage)",
      image: "https://www.mantraman.in/wp-content/uploads/2022/03/ESF.jpg"
    },
    {
      name: "Vivo Y75",
      description: "4G 128 GB, 8 GB RAM, Dancing Waves, Mobile Phone",
      image: "https://www.reliancedigital.in/medias/Vivo-Y75-Mobiles-492850352-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTA2Njh8aW1hZ2UvanBlZ3xpbWFnZXMvaDcxL2g5MS85ODY2Nzk5MzgyNTU4LmpwZ3w4NzM2YzYxMzdmY2I3ODI4OWZmY2ZlOTMzZjNkODVhNTM0MGU3YzkwMjA0ODE1YjY0YTEzYmZmMTczYjhlNjY0"
    }
  ]

  if (req.session.login) {
    res.render('home', { products });
  } else {
    res.redirect("/");

  }
});

module.exports = router;




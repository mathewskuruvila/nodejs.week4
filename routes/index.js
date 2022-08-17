const express = require('express');
const router = express.Router();

/*login page. */
router.get('/', function (req, res) {

  if (req.session.login) {
    res.redirect('/home')
  } else {
    res.render('index', { loginError: req.session.loginError });
    req.session.loginError = false
  }
});


const uname = 'mathews'
const passw = 202020

router.post('/login', (req, res) => {

  let userName = req.body.name
  let inPassword = req.body.password
  if (userName == uname && inPassword == passw) {
    req.session.login = true
    res.redirect('/home')
  } else {

    req.session.loginError = true
    res.redirect('/')

  }
})
router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})



module.exports = router;

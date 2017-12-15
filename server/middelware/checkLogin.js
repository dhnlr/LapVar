function checkLogin(req,res,next) {
  if (req.header.tokenFb && req.header.tokenFb != null) {
    next()
  }
  else {
    res.json({
      message : "you must login"
    })
  }

}

module.exports = checkLogin;

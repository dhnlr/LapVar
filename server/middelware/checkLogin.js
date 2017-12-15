function checkLogin(req,res,next) {
  if (req.header.tokenFb && req.header.tokenFb != null) {
    next()
  }
  else {
    res.json({
      message : 1
    })
  }

}

module.exports = checkLogin;

module.exports.logRequest = function (req, res, next) {
  console.log(req.headers);
  if(req.body){
    console.log(req.body);
  }
  next();
};

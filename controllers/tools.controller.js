module.exports.getAllTools = (req, res, next) => {
  const { ip, query, params, body, headers } = req;
  // console.log(ip, query, params, body, headers);
  
  // res.download(__dirname + "/tools.controller.js");
  // res.json({ "name": "abc" });
  // res.redirect("/login");
  res.send("found tools");
};


module.exports.saveATool = (req, res) => {
  
};


module.exports.getToolDetail = (req, res) => {
  res.send("tool detail found");
};

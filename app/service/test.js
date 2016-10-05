module.exports = function (testmodel) {
    var userService = {};
     userService.signupDetail = function (req,testmodel,Sequelize,res) {
      console.log("welcome signupDetail");
     
          return testmodel.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email:req.body.email,
                password:req.body.password
            });

  };
  return userService;
}
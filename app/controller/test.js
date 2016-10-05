module.exports = function (databaseBS, Sequelize) {
    var signupmodel = require('../module/signup').UserDetial(databaseBS, Sequelize, "signups");
    var test = require('../service/test')(signupmodel);

    var testController = {};

     
      testController.signup = function (router) {
        router.post('/signup', function (req, res, next) {
            console.log("Helo signups");
            test.signupDetail(req, signupmodel, Sequelize,res);
        });
    }

   
    return testController;
}
module.exports = {
    UserDetial: function (sequelize, Sequelize, modelName) {
        var User = sequelize.define('signups', {
            last_name: {
                type: Sequelize.STRING,
                // validate: {
                //     notEmpty: true
                // }
            },
             first_name: {
                type: Sequelize.STRING,
                // validate: {
                //     notEmpty: true
                // }
            },
            email: {
                type: Sequelize.STRING,
                // validate: {
                //     notEmpty: true
                // }
            },
            password: {
                type: Sequelize.STRING,
                // validate: {
                //     notEmpty: true
                // }
            }
            
        });
        return User;
    }
}

const sequelize = require('../config/connection');
const seedUser = require('./userdata');
const seedBlog = require('./blogdata');
const seedComment = require('./commentdata');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedBlog();
    await seedComment();
    process.exit(0);
};

seedAll();
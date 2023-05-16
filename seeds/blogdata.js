

const { Blog } = require('../models');

const blogData = [
    {
        post_title: 'Getting out of Town',
        content: "The best way to find your way out of town is to find the nearest exit. Then leave.",
        creator_username: 3
    },
    {
        post_title: 'Getting out of the way',
        content: "The best way to get out of the way is to move. Then apologize to the person for the inconvience you caused being there.",
        creator_username: 1
    },
    {
        post_title: 'Getting out of your clothes',
        content: "The best way to get out of your clothes is to take them off. Then avoid mirrors, desperately.",
        creator_username: 2
    },
    {
        post_title: 'Getting out of your way',
        content: "The best way to get out of your way is to stop making excuses, stop finding reasons you can't, and just do. Then reap the rewards.",
        creator_username: 4
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
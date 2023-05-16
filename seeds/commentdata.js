const { Comment } = require('../models');

const commentData = [
    {
        
        comment: "I'm too sexy for my shirt",
        commenters_id: 1,
        blog_id: 3
    },
    {
        
        comment: "I'm too sexy for Milan",
        commenters_id: 2,
        blog_id: 1
    },
    {
        
        comment: "I'm too sexy for your party",
        commenters_id: 3,
        blog_id: 2
    },
    {
        
        comment: "And I'm too sexy for this song",
        commenters_id: 4,
        blog_id: 4
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
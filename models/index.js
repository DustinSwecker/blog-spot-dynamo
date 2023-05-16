const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'creator_username',
});

Blog.belongsTo(User, {
    foreignKey: 'creator_username',
    onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'commenters_id',
    onDelete: 'cascade'
});

Comment.belongsTo(User, {
    foreignKey: 'commenters_id',
    onDelete: 'cascade'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'cascade'
});

module.exports = { User, Blog, Comment }; 
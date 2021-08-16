module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.TEXT,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    topicId: {
      type: Sequelize.INTEGER,
      references: { model: 'Topics', key: 'id' },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.Users);
    Post.belongsTo(models.Topics);
  };

  return Post;
};

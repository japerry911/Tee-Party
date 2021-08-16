const db = require('../models');

const User = db.Users;

checkDuplicateUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (user) {
      return res.status(400).send({
        message: 'Failed, username is already in use',
      });
    }

    next();
  } catch (err) {
    res.status(500).send(`Server error: ${err.message}.`);
  }
};

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
};

module.exports = verifySignUp;

const db = require('../models');
const config = require('../config/auth.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = db.Users;

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 8);

    await User.create({
      username: req.body.username,
      password: hashedPassword,
    });

    res.status(201).send('User was registered successfully');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./dbConfig.js');

const router = express.Router();

const secret = process.env.TOKEN_SECRET || 'idk lol';

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        password: user.password,
        department: user.department
    };

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    db.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;
  
    db.getBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                    secret,
                });
            }
            else {
                res.status(401).json({message: 'You shall not pass!'});
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err){
                res.status(401).json({message: 'You shall not pass!'})
            }
            else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({message: 'You shall not pass!'});
    }
}

router.get('/users', restricted, (req, res) => {
    db.get()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;
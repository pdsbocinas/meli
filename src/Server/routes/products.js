import express from 'express'
const router = express.Router();

const signature = {
  author: {
    name: 'Pablo',
    lastname: 'Sanchez'
  }
}

export default function () {
  router.get('/', function (req, res) {
    res.json(signature);
  });
}


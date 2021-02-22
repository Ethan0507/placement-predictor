const express = require('express');
const { check } = require('express-validator');

const studentController = require('../controllers/student-controller');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.use(checkAuth);

router.post(
  '/',
  studentController.updateDetails
);


module.exports = router;

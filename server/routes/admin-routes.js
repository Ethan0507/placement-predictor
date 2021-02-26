const express = require('express');

const adminController = require('../controllers/admin-controller');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.use((req, res, next) => {
    checkAuth(req, res, next, 'admin');
});

router.get('/', adminController.getUsers);

router.post('/newUser', adminController.addUsers);

router.post('/update/:uid', adminController.updateUser);

router.delete('/delete/:uid', adminController.deleteUser);

module.exports = router;

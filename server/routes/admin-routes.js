const express = require('express');

const adminController = require('../controllers/admin-controller');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.use((req, res, next) => {
    res.locals.accessRole = "admin";
    checkAuth(req, res, next);
});

router.get('/', adminController.getUsers);

router.post('/newUser', adminController.addUsers);

router.post('/update/:uid', adminController.updateUser);

router.delete('/delete/:uid', adminController.deleteUser);

module.exports = router;

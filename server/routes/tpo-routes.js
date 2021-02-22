const express = require('express');
const { check } = require('express-validator');

const tpoController = require('../controllers/tpo-controller');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// router.get('/:pid', tpoController.);

// router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.get('/view-students/details/:student', tpoController.getStudentDetailsById);
router.get('/view-students', tpoController.getStudentDetails);

// router.post(
//   '/',
//   fileUpload.single('image'),
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 }),
//     check('address')
//       .not()
//       .isEmpty()
//   ],
//   placesControllers.createPlace
// );

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   placesControllers.updatePlace
// );

// router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;

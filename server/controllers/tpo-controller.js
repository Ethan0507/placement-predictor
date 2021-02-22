const HttpError = require('../models/http-error');
const StudentDetail = require('../models/studentdetail');



const getStudentDetailsById = async (req, res, next) => {

    const studentId = req.params.student;

    let student;
    try {
        student = await StudentDetail.find({ userId: studentId });
    } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not find details for student.',
          500
        );
        return next(error);
      }
    
      if (!student) {
        const error = new HttpError(
          'Could not find details for the provided student-id.',
          404
        );
        return next(error);
      }
    
      res.json({ student: student[0] });
};

const getStudentDetails = async (req, res, next) => {
    let students;

    try {
        students = await StudentDetail.find({});
    } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not find students.',
          500
        );
        return next(error);
      }
    
      if (!students) {
        const error = new HttpError(
          'Could not find students.',
          404
        );
        return next(error);
      }
    
      res.json({ students: students });
}


exports.getStudentDetailsById = getStudentDetailsById;
exports.getStudentDetails = getStudentDetails;
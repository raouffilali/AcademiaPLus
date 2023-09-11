import Student from "../models/Users/Student";

const verifyEmail = async (req, res, next) => {
  try {
    const { code } = req.query;
    const student = await Student.findOne({ verificationCode: code });

    if (!student) {
      return res.status(404).json({ message: "Invalid verification code" });
    }

    if (student.verified) {
      return res.status(403).json({ message: "User is already verified" });
    }

    // Set the user as verified and clear the verification code
    student.verified = true;
    student.verificationCode = undefined;
    await student.save();
    console.log(
      ` ${student.firstName} ${student.lastName}'s email has been verified`
    );

    return res
      .status(200)
      .json({
        message: `Congrats 🎉 ${student.firstName} ${student.lastName} your email has been verified, ENJOY!`,
      });
  } catch (error) {
    next(error);
  }
};
export default verifyEmail;

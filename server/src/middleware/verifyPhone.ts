import Student from "../models/Users/Student";

const verifyPhone = async (req, res, next) => {
  try {
    console.log(req.body);
    const { otp } = req.body;
    const student = await Student.findOne({ verificatioOTP: otp });

    if (!student) {
      return res.status(404).json({ message: "Invalid verification code" });
    }

    if (student.phoneVerified) {
      return res.status(403).json({ message: "Phone is already verified" });
    }

    // Set the phone as verified and clear the verification code
    student.phoneVerified = true;
    student.verificatioOTP = undefined;
    await student.save();
    console.log(
      `${student.firstName} ${student.lastName}'s phone has been verified`
    );

    return res.status(200).json({
      message: `Phone number for ${student.firstName} ${student.lastName} has been verified.`,
    });
  } catch (error) {
    next(error);
  }
};

export default verifyPhone;

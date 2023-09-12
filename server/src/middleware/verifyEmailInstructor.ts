import Instractor from "../models/Users/Instractor";

const verifyEmail = async (req, res, next) => {
  try {
    const { code } = req.query;
    const instractor = await Instractor.findOne({ verificationCode: code });

    if (!instractor) {
      return res.status(404).json({ message: "Invalid verification code" });
    }

    if (instractor.verified) {
      return res.status(403).json({ message: "User is already verified" });
    }

    // Set the user as verified and clear the verification code
    instractor.verified = true;
    instractor.verificationCode = undefined;
    await instractor.save();
    console.log(
      ` ${instractor.fullName} 's email has been verified`
    );

    return res
      .status(200)
      .json({
        message: `Congrats 🎉 ${instractor.fullName} your email has been verified, ENJOY!`,
      });
  } catch (error) {
    next(error);
  }
};
export default verifyEmail;

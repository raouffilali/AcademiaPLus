// generate code for OTP verification with 4 digits

const generateOTP = () => {
    const code = Math.floor(Math.random() * 10000);
    return code;
    }

export default generateOTP;

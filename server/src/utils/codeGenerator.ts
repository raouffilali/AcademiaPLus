// a function that generate random code for email verification

 const generateCode = () => {
    const code = Math.floor(Math.random() * 1000000);
    return code;
    }


export default generateCode;

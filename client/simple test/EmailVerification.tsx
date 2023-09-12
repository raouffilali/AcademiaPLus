import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const EmailVerification = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to login page
      return <Navigate to="/login" />;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
      <p className="text-lg">Your email has been verified.</p>
      <p className="text-lg">Redirecting to the login page...</p>
    </div>
  );
};

export default EmailVerification;

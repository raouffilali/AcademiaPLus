// Middleware to check if the user is an instructor
const checkInstructorRole = (req, res, next) => {
    // Check if the user is authenticated and has the role "instructor"
    if (req.user && req.user.role === 'Instructor') {
      // User is an instructor, proceed to the next middleware or route
      next();
    } else {
      // User is not authorized, return a 403 Forbidden response
      res.status(403).json({ error: 'Access denied. You are not an instructor.' });
    }
  };

    // Export the middleware
export default checkInstructorRole;

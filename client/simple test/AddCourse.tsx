import React, { useState } from 'react';
import axios from 'axios';
import './AddCourse.css'; // Import your CSS file

function AddCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    category: '',
    level: '',
    description: '',
    price:""
    // Add more fields as needed
  });

  const [message, setMessage] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken');

      const response = await axios.post('http://localhost:5000/api/courses/course', courseData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        const createdCourse = response.data;
        setMessage('Course created successfully!');
        // You can redirect or perform other actions here
      } else {
        setMessage('Course creation failed');
      }
    } catch (error) {
      console.error('An error occurred while creating the course:', error);
      setMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="add-course-container">
      <div className="form-wrapper">
        <h1>Add a New Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={courseData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="level">Level:</label>
            <input
              type="text"
              id="level"
              name="level"
              value={courseData.level}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="level">Price:</label>
            <input
              type= "number"
              id="price"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Add more input fields for other course details */}

          <button type="submit" className='bg-redPal'>Add Course</button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default AddCourse;

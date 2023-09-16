import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB
      const { name, size } = event.target.files[0];

      if (!allowedExtensions.test(name)) {
        alert("Invalid file type. Allowed extensions are .pdf, .doc, .docx");
        setCv(null);
      } else if (size > fileSizeLimit) {
        alert("File size exceeds 5MB limit");
        setCv(null);
      } else {
        // Here, create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("cv", event.target.files[0]);
        setCv(event.target.files[0]);
      }
    } else {
      setCv(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      name: fullName,
      email,
      phone,
      education,
      experience,
      message: coverLetter,
      cv,
    });

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password); // Fixed: Use password instead of phone
    formData.append("education", education);
    formData.append("qualifications", experience); // Fixed: Use experience instead of qualifications
    formData.append("coverLetter", coverLetter);
    if (cv !== null) {
      formData.append("cv", cv);
    }

    const apiUrl = "http://localhost:5000/api/instructor/instructor-register";

    try {
      await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Your application has been submitted successfully! 🎉");
    } catch (error) {
      console.error(error);
      alert("Error submitting your application! 😢 try again later");
    }

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setEducation("");
    setExperience("");
    setCoverLetter("");
    setCv(null);
  };

  return (
    <div className=" mb-10 p-6 lg:w-[480px] mt-4 border border-gray-300 rounded-lg bg-white text-gray-500 text-[15px]">
      <p className="text-center font-semibold text-xl text-gray-900">
        Submit a Request
      </p>
      <form onSubmit={handleSubmit} className=" mt-5 space-y-4">
        <div>
          <label htmlFor="name" className=" mb-2 block">
            Full Name
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded-md w-full  focus:border-gray-500 focus:outline-none "
            id="name"
            placeholder="Enter your full name"
            type="text"
            value={fullName}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className=" mb-2 block">
            Email
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded-md w-full  focus:border-gray-500 focus:outline-none "
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className=" mb-2 block">
            Phone
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded-md w-full  focus:border-gray-500 focus:outline-none "
            id="phone"
            type="tel"
            value={phone}
            placeholder="Enter your phone"
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
        <div>
          <label className=" mb-2 block">Password</label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded-md w-full  focus:border-gray-500 focus:outline-none "
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="education" className=" mb-2 block">
            Education
          </label>
          <input
            className=" text-sm py-2 px-4 border border-gray-200 rounded-md w-full  focus:border-gray-500 focus:outline-none  "
            id="education"
            type="text"
            placeholder="Enter your Education level"
            value={education}
            onChange={(event) => setEducation(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="experience" className=" mb-2 block">
            Qualifications
          </label>
          <textarea
            className=" text-sm border border-gray-200 rounded-md p-4 focus:border-gray-500 focus:outline-none w-full"
            id="experience"
            value={experience}
            placeholder="indicate class and division"
            onChange={(event) => setExperience(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className=" mb-2 block">
            Cover letter
          </label>
          <textarea
            className=" text-sm border border-gray-200 rounded-md p-6  w-full  focus:border-gray-500 focus:outline-none "
            id="message"
            value={coverLetter}
            placeholder="Write you message"
            onChange={(event) => setCoverLetter(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cv" className=" mb-2 block">
            CV
          </label>
          <input
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          className="mt-2 px-20 py-3 rounded-lg bg-redPal text-white hover:bg-red-500 "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

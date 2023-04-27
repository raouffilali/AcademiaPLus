import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
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
        setCv(event.target.files[0]);
      }
    } else {
      setCv(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ name, email, phone, education, experience, message, cv });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("education", education);
    formData.append("experience", experience);
    formData.append("message", message);
    if (cv !== null) {
      formData.append(
        "cv",
        cv instanceof File ? new Blob([cv], { type: cv.type }) : cv
      );
    }

    const apiUrl = "http://127.0.0.1:5174/api/teachers";

    try {
      await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Your application has been submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting your application!");
    }

    setName("");
    setEmail("");
    setPhone("");
    setEducation("");
    setExperience("");
    setMessage("");
    setCv(null);
  };

  return (
    <div className="mx-52 mt-20  h-[480px] w-[380px]  shadow-md rounded-lg bg-gray-50 text-gray-500 text-[15px]">
      <div className="mt-5 ml-10 mr-10 flex flex-col justify-between space-y-2 ">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="" htmlFor="name">
              Name
            </label>
            <input
              className=" text-[11px] border border-gray-200 rounded-md p-1 w-[310px]"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className=" text-[11px] border border-gray-200 rounded-md p-1 w-[310px]"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              className=" text-[11px] border border-gray-200 rounded-md p-1 w-[310px]"
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <input
              className=" text-[11px] border border-gray-200 rounded-md p-2 w-[310px]"
              id="education"
              type="text"
              value={education}
              onChange={(event) => setEducation(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="experience">
              Qualifications(indicate class and division)
            </label>
            <textarea
              className=" text-[11px] border border-gray-200 rounded-md p-2 w-[310px]"
              id="experience"
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className=" text-[11px] border border-gray-200 rounded-md p-2 w-[310px]"
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cv">CV</label>
            <input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
          </div>
          <button
            className="mt-2 ml-20 px-8 py-1 rounded-lg bg-blueLink text-white hover:bg-DarkBluePal "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

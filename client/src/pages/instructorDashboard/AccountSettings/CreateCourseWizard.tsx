import React, { useState } from "react";
import axios from "axios";

const BasicInfo: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [price, setPrice] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const apiURL = `http://localhost:5000/api/courses/course`;

  // get token that is stored in local storage
  const token = localStorage.getItem("authToken");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    };
    try {
      const { data } = await axios.post(
        apiURL,
        {
          courseTitle,
          category,
          courseLevel,
          price,
          courseDescription,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    onNext();
  };


  const handleNext = () => {
    onNext();
  };

  return (
    <div className=" container">
      <div className="shadow rounded bg-white p-4 text-sm">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block font-semibold text-gray-600 mb-1">
            Course Title
          </label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Write a 60 character course title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border bg-white p-2 rounded w-full"
          >
            <option className=" w-7 rounded-lg" value="">Select Category</option>
            {/* Add your category options here */}
            <option className=" w-7 rounded-lg" value="mobile">Mobile Development</option>
            <option className=" w-7 rounded-lg" value="web">Web Development</option>
            <option className=" w-7 rounded-lg" value="desktop">Desktop Development</option>
            <option className=" w-7 rounded-lg" value="game">Game Development</option>
            <option className=" w-7 rounded-lg" value="data">Data Science</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1">
            Course Level
          </label>
          <select
            value={courseLevel}
            onChange={(e) => setCourseLevel(e.target.value)}
            className="border bg-white p-2 rounded w-full"
          >
            <option className="text-gray-500" value="">
              Select Level
            </option>
            {/* Add your level options here */}
            <option value="begginers">Begginers</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-gray-600 block font-semibold mb-1">
            Course Description
          </label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="border p-2 rounded w-full h-24"
            placeholder="Insert course description"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-gray-600 mb-1">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Price in DZD "
          />
        </div>
        <button type="submit" className="float-right mt-12 px-12 py-4 bg-bluePal text-white text-md rounded-xl font-bold">Save</button>
      </form>
      </div>
    </div>
  );
};

const CoursesMedia: React.FC<{
  onNext: () => void;
  onPrevious: () => void;
}> = ({ onNext, onPrevious }) => {
  const [courseCoverImage, setCourseCoverImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleNext = () => {
    // Validate the form data, then call the onNext function
    onNext();
  };
  const handleCourseCoverImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setCourseCoverImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container shadow bg-white rounded p-4 ">
      <h2 className="text-xl font-semibold mb-4">Course Media</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Course Cover Image</label>
        <div className="flex items-center">
          <input
            type="file"
            id="courseCoverImage"
            accept=".jpg, .jpeg, .png, .gif"
            onChange={handleCourseCoverImageChange}
          />
          {courseCoverImage && (
            <img src={courseCoverImage} alt="Course Cover" />
          )}
        </div>
        <p className="text-sm text-gray-500">
          Upload your course image here. It must meet our course image quality
          standards to be accepted. Important guidelines: 750x440 pixels; .jpg,
          .jpeg, .gif, or .png. No text on the image.
        </p>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Video URL</label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter a valid video URL"
        />
        <p className="text-sm text-gray-500">
          Students who watch a well-made promo video are 5X more likely to
          enroll in your course.
        </p>
      </div>
    </div>
  );
};
interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
}

interface Lecture {
  id: string;
  title: string;
  description: string;
}

const Curriculum: React.FC<{ onNext: () => void; onPrevious: () => void }> = ({
  onNext,
  onPrevious,
}) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [lectureTitle, setLectureTitle] = useState<string>("");
  const [lectureDescription, setLectureDescription] = useState<string>("");

  const handleAddSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      title: "New Section",
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  const handleDeleteSection = (sectionId: string) => {
    const updatedSections = sections.filter(
      (section) => section.id !== sectionId
    );
    setSections(updatedSections);
  };

  const handleAddLecture = () => {
    if (currentSection) {
      const updatedSections = sections.map((section) => {
        if (section.id === currentSection) {
          const newLecture: Lecture = {
            id: Date.now().toString(),
            title: lectureTitle,
            description: lectureDescription,
          };
          return { ...section, lectures: [...section.lectures, newLecture] };
        }
        return section;
      });
      setSections(updatedSections);
      setLectureTitle("");
      setLectureDescription("");
    }
  };

  return (
    <div className="p-4 bg-white rounded container shadow">
      <h2 className="text-gray-800 font-medium">Curriculum</h2>
      <hr className="my-2" />
      <button  className=" mb-2 text-sm py-1 hover:bg-blueLink hover:text-white px-4 font-medium bg-white border border-blueLink rounded text-blueLink text-start " onClick={handleAddSection}>Add Section</button>
      <div className=" rounded bg-slate-100  p-2">
        <div>
          {sections.map((section) => (
            <div key={section.id} className="section">
              <div className=" section-header">
                <h3>{section.title}</h3>
              </div>
              <ul className="lectures-list rounded bg-white ">
                {section.lectures.map((lecture) => (
                  <li key={lecture.id} className="lecture">
                    <h4>{lecture.title}</h4>
                    <p>{lecture.description}</p>
                  </li>
                ))}
              </ul>
              {currentSection === section.id && (
                <div className="add-lecture rounded p-3 space-y-2 bg-white">
                  <input
                    type="text"
                    value={lectureTitle}
                    onChange={(e) => setLectureTitle(e.target.value)}
                    placeholder="Enter lecture title"
                  />

                  <div className="space-x-2">
                    <button className=" rounded text-xs text-white font-medium p-1 px-3 bg-gray-500">
                      Add article+
                    </button>
                    <button
                      value={lectureDescription}
                      className=" rounded text-xs text-white font-medium p-1 px-3 bg-gray-500"
                    >
                      Add description
                    </button>
                  </div>
                </div>
              )}
              <div className="flex my-2">
                <button
                  className="text-sm py-1 hover:bg-blueLink hover:text-white px-4 font-medium bg-white border border-blueLink rounded text-blueLink text-start "
                  onClick={() => setCurrentSection(section.id)}
                >
                  Add Lecture +
                </button>
                <button
                  className="text-sm text-end flex-1 text-red-500"
                  onClick={() => handleDeleteSection(section.id)}
                >
                  Delete Section
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Settings: React.FC<{ onPrevious: () => void }> = ({ onPrevious }) => {
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState<string>("");

  const handleNewRequirementChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewRequirement(e.target.value);
  };

  const handleNewRequirementKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && newRequirement.trim() !== "") {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const handleDeleteRequirement = (index: number) => {
    const updatedRequirements = requirements.filter((_, i) => i !== index);
    setRequirements(updatedRequirements);
  };

  return (
    <div className="container shadow p-4 bg-white rounded ">
      <h2>Requirements</h2>
      <hr className="my-2" />
      <div>
        <div className="flex flex-wrap">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded py-1 px-3 m-1 flex items-center"
            >
              <span>{requirement}</span>
              <button
                className="ml-2 text-lg text-red-600"
                onClick={() => handleDeleteRequirement(index)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={newRequirement}
          onChange={handleNewRequirementChange}
          onKeyDown={handleNewRequirementKeyDown}
          placeholder="Type and press Enter"
          className="border rounded p-2 w-full"
        />
      </div>
    </div>
  );
};

export { BasicInfo, CoursesMedia, Curriculum, Settings };

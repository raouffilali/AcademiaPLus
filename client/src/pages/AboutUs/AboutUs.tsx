// src/components/AboutUs.tsx
import React from "react";
import { NavBar } from "../../constants";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="lg:w-full xl:w-full 2xl:w-full top-14 md:h-[420px] bg-gradient-to-r from-red-50 to-[#e2eefc]">
        <NavBar
          isAuthenticated={false}
          isFixed={false}
          isTeacher={false}
          handleLogout={function (): void {
            throw new Error("Function not implemented.");
          }}
        />{" "}
         <div className="text-center justify-center items-center mx-[12px] lg:mx-[80px] pt-12">
          <h2 className="text-4xl font-bold text-gray-800">
             Academia Plus 
          </h2>
          <p className="mt-4 text-4xl font-bold text-gray-800">
            Elevating Education Through Innovation
          </p>
          <p className="text-gray-700 leading-relaxed  mt-4">
              Whether you're a student, teacher, or lifelong learner, Academia
              Plus is here to support your educational goals. Join us on this
              exciting journey as we revolutionize education through
              accessibility, innovation, and inclusivity.
            </p>
        </div>
      </div>
      <div className=" min-h-screen pb-12 ">
        <div className="mt-6 mx-[12px] lg:mx-[80px] text-gray-800">
          <h1 className="text-2xl text-redPal font-semibold mb-8">About Us</h1>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              At Academia Plus, our story is one fueled by a passion for
              learning, a commitment to innovation, and a desire to transform
              education for the better. It's a story of how a group of
              educators, technologists, and dreamers came together to create
              something truly exceptional.
            </p>
            <h2 className="text-2xl font-semibold mt-4 mb-4">
              The Birth of Academia Plus
            </h2>
            <p className="text-gray-700">
              With our team in place, we set out to create Academia Plus, a
              platform that would revolutionize the way people learn. It wasn't
              just about moving traditional classrooms online; it was about
              reimagining education entirely.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Academia Plus Founders
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="border border-gray-300 rounded p-4">
                <img
                  src="team-member-1.jpg"
                  alt="Team Member 1"
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold mt-4">Ardjane Sanaa</h3>
                <p className="text-gray-700">Co-Founder & Devoloper</p>
              </div>

              {/* Team Member 2 */}
              <div className="border border-gray-300 rounded p-4">
                <img
                  src="team-member-2.jpg"
                  alt="Team Member 2"
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold mt-4">Filali Abderaouf</h3>
                <p className="text-gray-700">Co-Founder & Devoloper</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At Academia Plus, our mission is to provide accessible and
              innovative learning solutions that empower students of all ages to
              excel in their educational journeys. We believe in the
              transformative power of education and aim to make learning a fun
              and engaging experience for everyone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Academia Plus?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Interactive and immersive learning experiences</li>
              <li>Comprehensive library of educational content</li>
              <li>Flexible and accessible anytime, anywhere</li>
              <li>Virtual lab for hands-on experimentation</li>
              <li>Engaging educational games and activities</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or feedback? Feel free to reach out to us. We'd
              love to hear from you!
            </p>
            <p className="mt-4">
              Email: info@academiaplus.com
              <br />
              Phone: +213 ......
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-700">
              Academia Plus is not just a platform; it's a community of
              learners, teachers, and education enthusiasts. Join us on this
              journey of exploration, discovery, and excellence in education.
            </p>
            <p className="mt-4">
              Connect with us on social media:
              <br />
              <span className="hover:text-blue-500  text-redPal  hover:underline cursor-pointer">
                Facebook
              </span>{" "}
              |{" "}
              <span className="hover:text-blue-500  text-redPal hover:underline cursor-pointer">
                Twitter
              </span>{" "}
              |{" "}
              <span className="hover:text-blue-500 text-redPal  hover:underline cursor-pointer">
                Instagram
              </span>{" "}
              |{" "}
              <span className="hover:text-blue-500 text-redPal  hover:underline cursor-pointer">
                LinkedIn
              </span>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-gray-700">
              We are committed to continuous improvement and innovation. Your
              feedback and suggestions are invaluable to us as we strive to make
              Academia Plus the best educational platform it can be. Together,
              we can shape the future of learning.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

import React from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaShare,
  FaUserGraduate,
  FaClock,
  FaBook,
  FaEye,
  FaMoneyBillAlt,
  FaStar,
} from "react-icons/fa"; // Import icons from React Icons
import { AcademicCourseDetailsProps } from "../../constants/interfaces";

const AcademicCourseDetailsSection: React.FC<AcademicCourseDetailsProps> = ({
  instructor,
  rating,
  views,
  price,
  instructorJob,
  numLessons,
  duration,
}) => {
  return (
    <div className="space-y-6 flex-col mb-10">
      <div className="flex text-gray-400 items-center  space-x-2">
        <FaHeart className="hover:text-redPal ml-0 h-5 cursor-pointer" />{" "}
        {/* أيقونة القلب للمفضلة */}
        <p>المفضلة</p>
      </div>
      <div className="shadow text-gray-600 border rounded p-2 space-y-4">
        <div className="flex  items-center space-x-2">
          <FaShoppingCart className="ml-0 h-5" /> {/* أيقونة السلة للشراء */}
          <button className="text-white bg-emerald-500 rounded hover:bg-emerald-600 px-8 py-2">
            اشترك الآن
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <FaShare className="ml-0 h-5" /> {/* أيقونة المشاركة */}
          <p className="">مشاركة الدورة</p>
        </div>
      </div>
      <div className="bg-white text-gray-600 rounded border p-4 shadow border-neutral-200">
        {/* قسم تفاصيل الدورة */}
        <div className="list-disc mt-6 mb-6 justify-between space-y-4 font-light text-sm">
          <p className="font-bold text-gray-800 text-lg">تفاصيل الدورة</p>

          <p className="flex">
            <span className="flex-1 icon">
              <FaUserGraduate className="ml-0" />{" "}
              {/* أيقونة المعلم للمدرب */}
            </span>
            المعلم: {instructor}
          </p>
          <p className="flex">
            <span className="flex-1 icon">
              <FaStar className=" ml-0  text-goldPal" /> {/* أيقونة النجمة للتقييم */}
            </span>
            التقييم: {rating}
          </p>
          <p className="flex">
            <span className="flex-1 icon">
              <FaEye className=" ml-0 " /> {/* أيقونة العين للمشاهدات */}
            </span>
            المشاهدات: {views}
          </p>
          <p className="flex">
            <span className="flex-1 icon">
              <FaMoneyBillAlt className="ml-0 " />{" "}
              {/* أيقونة النقود للسعر */}
            </span>
            السعر: {price}
          </p>
          <p className="flex">
            <span className="flex-1 icon">
              <FaUserGraduate className="ml-0 " />{" "}
              {/* أيقونة المعلم لوظيفة المدرب */}
            </span>
            وظيفة المدرب: {instructorJob}
          </p>
          <p className="flex ">
            <span className="flex-1 icon">
              <FaBook className="ml-0" /> {/* أيقونة الكتاب لعدد الدروس */}
            </span>
            عدد الدروس: {numLessons}
          </p>
          <p className="flex">
            <span className="flex-1 icon">
              <FaClock className="ml-0" /> {/* أيقونة الساعة للمدة */}
            </span>
            المدة: {duration}
          </p>
        </div>
      </div>
      <div className="rounded text-gray-600 bg-white shadow space-y-2 text-sm p-4 border">
        <img src="/assets/key.svg" className="mr-2 float-left h-5" />
        <p>الوصول مدى الحياة</p>
        <img src="/assets/mobile.svg" className="mr-2 float-left h-5" />
        <p>الوصول على الهاتف المحمول والتلفزيون</p>
        <img src="/assets/cloud.svg" className="mr-2 float-left h-5" />
        <p>المهام</p>
        <img src="/assets/teacher.svg" className="mr-2 float-left h-5" />
        <p>شهادة الإكمال</p>
      </div>
    </div>
  );
};

export default AcademicCourseDetailsSection;

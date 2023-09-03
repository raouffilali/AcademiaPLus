import { Link } from "react-router-dom";

const VirtualLabSection = () => {
  return (
    <div className="w-full space-y-3 lg:space-y-0 lg:py-0 py-2  lg:flex my-10  bg-slate-50 bg-[url(assets/bg/academic_bg.png)]">
        <img
        src="assets/lab/primaryLab.jpg"
        alt="Virtual Lab"
        className="rounded-lg lg:w-1/2 "
      />
      <div className=" lg:mr-[80px] lg:pl-6   space-y-6 text-center">
        <h2 className="text-3xl font-medium text-emerald-500 mb-4">
          المختبر الافتراضي
        </h2>
        <p className="text-gray-600 text-lg ">
          استكشف عالمًا مليئًا بالتجارب في المختبر الافتراضي. قم
          بتطبيق المفاهيم العلمية وتجربة الظواهر بنفسك. اكتشف وتعلم بطريقة ممتعة
          وتفاعلية!
        </p>

        <div>
          <Link
            to="/virtual-lab"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            دخول المختبر الافتراضي
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default VirtualLabSection;

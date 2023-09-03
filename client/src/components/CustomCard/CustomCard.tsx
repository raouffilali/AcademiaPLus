import React from "react";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

interface CustomCardProps {
  imageSrc: string;
  title: string;
  rating: string;
  description: string;
  year: string;
  subject: string;
}

const CustomCard = ({
  imageSrc,
  title,
  rating,
  description,
  year,
  subject,
}: CustomCardProps) => {
  const handleClick = () => {
    // Handle card click event here
  };
  if (title === "مجموعة المراجعة") {
    return (
      
        <Card className="w-full max-w-[26rem] h-full p-5   hover:bg-greenish border-dashed border">
          <CardHeader 
            shadow={false}
            floated={false}
            color="blue-gray"
            className="relative"
          >
            <img
              src={imageSrc}
              alt="image"
              className="bg-blue-200 object-cover h-40 w-full rounded-t-xl"
            />
            <Typography
              variant="h6"
              color="white"
              className="absolute top-0 right-0 px-2 py-1 bg-emerald-500 rounded-tr-lg text-sm font-medium"
            >
              {year}
            </Typography>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="font-medium" style={{ fontFamily: "Tajawal", fontWeight: 600 }}>
                {title}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-500" />
                {rating}
              </Typography>
            </div>
            <Typography className="text-gray-600 font-light text-sm">
              {description}
            </Typography>
          </CardBody>
          <hr className="border border-dashed" />
          <CardFooter className="pt-3">
            <div className="flex  justify-between space-x-16">
              {/* Group of User Avatars */}
              <div className="flex -space-x-2">
                <img src="/assets/instructor/user8.jpg" alt="User 1" className="w-8 h-8 rounded-full" />
                <img src="/assets/instructor/user1.jpg" alt="User 2" className="w-8 h-8 rounded-full" />
                <img src="/assets/instructor/user4.jpg" alt="User 3" className="w-8 h-8 rounded-full" />
                <img src="/assets/instructor/user7.jpg" alt="User 3" className="w-8 h-8 rounded-full" />
                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
              </div>
              {/* Circular Button with White Arrow */}
              <div className="bg-emerald-500 hover:bg-emerald-600  rounded-full p-2">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardFooter>
        </Card>
      
    );
  } else {
  return (
    <div className="hover:bg-greenish">
        <Card className=" w-full  max-w-[26rem] h-full p-4 hover:bg-greenish border-dashed border">
          <CardHeader 
            shadow={false}
            floated={false}
            color="blue-gray"
            className="relative"
          >
            <img
              src={imageSrc}
              alt="image"
              className="bg-blue-200 object-cover h-40 w-full rounded-t-xl"
            />
            <Typography
              variant="h6"
              color="white"
              className="absolute top-0 right-0 px-2 py-1 bg-emerald-500 rounded-tr-lg text-sm font-medium"
            >
              {year}
            </Typography>
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className=" font-medium"style={{ fontFamily: "Tajawal", fontWeight: 600 }}>
                {title}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-500" />
                {rating}
              </Typography>
            </div>
            <Typography className="text-gray-600 font-light text-sm">
              {description}
            </Typography>
          </CardBody>
          <hr className="border border-dashed" />
          <CardFooter className="pt-3">
            <Button
              className="bg-white border-2 border-emerald-500 text-emerald-500 hover:text-white hover:bg-emerald-500 w-full px-20 rounded-full py-3 flex items-center justify-center"
            >
              ابدأ التعلم
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </div>
  );
  }
};

export default CustomCard;

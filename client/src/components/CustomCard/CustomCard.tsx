import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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

  if (title === "الألعاب التعليمية" || title === "فروض و امتحانات") {
    return (
      <Card className="flex-row w-full hover:bg-greenish  max-w-[48rem] border-dashed border">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none "
        >
          <img
            src={imageSrc}
            alt="image"
            className="w-full h-full object-cover bg-gray-200"
          />
          <Typography
            variant="h6"
            color="white"
            className="absolute top-0 left-0 px-2 py-1 bg-emerald-500   rounded-tr-lg text-sm font-medium"
          >
            {year}
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="text-emerald-500 uppercase mb-4">
            {title}
          </Typography>
          <Typography className="text-gray-600 font-light text-sm mb-8">
            {description}
          </Typography>
          <Link to="#" className="hover:bg-emerald-500 rounded-xl bg-gray-100 inline-block">
            <Button
              variant="text"
              className="flex text-emerald-500 hover:text-white items-center gap-2"
            >
              استكشف المزيد
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <Card className="w-full hover:bg-greenish px-3 max-w-[26rem] border-dashed border">
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
            <Typography variant="h5" color="blue-gray" className="font-medium">
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
          <Typography className="text-gray-600 font-light text-sm">{description}</Typography>
        </CardBody>
        <hr className="border border-dashed" />
        <CardFooter className="pt-3">
          <Link to={`/details/${year}/${subject}`}>
          <Button
        className="bg-emerald-500 hover:bg-emerald-600 w-full rounded-b-lg py-3 flex items-center justify-center"
        
      >
        
        ابدأ التعلم
        <ArrowRightIcon className="w-5 h-4 text-white ml-2" />
      </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
};

export default CustomCard;

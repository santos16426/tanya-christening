import Image from "next/image";
import RightPane from "./RightPane";
import { eventDetails } from "@/constants/template";
type Props = {};

function index({}: Props) {
  return (
    <div className="relative flex flex-col lg:flex-row w-full h-full">
      <div
        className="absolute top-0 left-0 z-10 w-1/3 lg:w-1/5 aspect-square"
        style={{
          backgroundImage: `url('/images/frames/flower_frame.png')`,
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute bottom-0 right-0 z-10 w-1/3 lg:w-1/5 aspect-square -rotate-180"
        style={{
          backgroundImage: `url('/images/frames/flower_frame.png')`,
          backgroundSize: "cover",
        }}
      />
      <div className="w-full h-fit lg:h-full justify-end lg:pr-28 items-center flex relative pt-20 lg:pt-0">
        <div className="relative scale-[80%] lg:scale-100 shadow-xl w-fit h-fit rounded-full flex flex-col items-center justify-center">
          <Image
            src="/images/gallery/img17.jpg"
            alt="img"
            width={1500}
            height={1500}
            className="z-10  rounded-full aspect-square object-cover w-[490px] h-[490px]"
          />
          <div className="bg-[#FEC89D] absolute w-[520px] h-[520px] top-[-30px] left-0 rounded-full" />
          <div className="bg-transparent border-2 border-[#A46141]  bottom-[-60px] left-[-35px] absolute w-[490px] h-[490px] rounded-full" />
        </div>
      </div>
      <RightPane {...eventDetails} />
    </div>
  );
}

export default index;

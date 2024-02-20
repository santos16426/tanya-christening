import Gallery from "@/components/Gallery";
import Homepage from "@/components/Homepage";
import LayoutGrid from "@/components/ui/layout-grid";
import Image from "next/image";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    className: "md:col-span-2 md:row-span-2",
    thumbnail: "/images/gallery/img10.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/images/gallery/img12.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/images/gallery/img3.jpg",
  },
  {
    id: 4,
    className: "col-span-1 md:row-span-2",
    thumbnail: "/images/gallery/img14.jpg",
  },
  {
    id: 6,
    className: "md:col-span-2 md:row-span-2",
    thumbnail: "/images/gallery/img14.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Homepage />
      <LayoutGrid cards={cards} />
      <div className="relative h-full w-full flex justify-between items-center flex-col lg:py-20 gap-10">
        <p className="text-6xl">
          Tanya&apos;s 1<sup>st</sup> Birthday Party POV Camera
        </p>

        <p className="text-2xl">
          We want your perspective from the night! All photos will be submitted
          to a gallery once the event concludes.
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Scan the QR Code and share photos!</p>
          <Image
            height="250"
            width="250"
            alt="qr"
            src="/images/qr_pov.jpg"
            className="bg-white p-1 rounded-md"
          />
          <p className="text-2xl">No app download required</p>
        </div>
      </div>
    </main>
  );
}

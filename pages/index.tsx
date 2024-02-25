import Homepage from "@/components/Homepage";
import LayoutGrid from "@/components/ui/layout-grid";
import Image from "next/image";
import { template } from "@/constants/template";

export default function Home() {
  return (
    <main>
      <Homepage />
      {template[1].cards && <LayoutGrid cards={template[1].cards} />}
      <div className="relative h-full w-full flex justify-between items-center flex-col lg:py-20 gap-10 p-20">
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

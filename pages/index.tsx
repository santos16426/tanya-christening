import Gallery from "@/components/Gallery";
import Homepage from "@/components/Homepage";
import { template } from "@/constants/template";

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <Homepage />
      </section>
      <section className="">
        <Gallery
          images={[
            "/images/gallery/img1.jpg",
            "/images/gallery/img2.jpg",
            "/images/gallery/img3.jpg",
            "/images/gallery/img4.jpg",
            "/images/gallery/img5.jpg",
            "/images/gallery/img6.jpg",
            "/images/gallery/img7.jpg",
            "/images/gallery/img8.jpg",
            "/images/gallery/img9.jpg",
            "/images/gallery/img10.jpg",
            "/images/gallery/img11.jpg",
            "/images/gallery/img12.jpg",
            "/images/gallery/img13.jpg",
            "/images/gallery/img14.jpg",
            "/images/gallery/img15.jpg",
            "/images/gallery/img16.jpg",
            "/images/gallery/img17.jpg",
            "/images/gallery/img18.jpg",
            "/images/gallery/img19.jpg",
            "/images/gallery/img20.jpg",
          ]}
        />
      </section>
      <section className="h-screen">
        <p>FAQs</p>
      </section>
    </main>
  );
}

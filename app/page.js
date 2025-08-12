import Image from "next/image";
import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/Whychooseus";
import Games from "./sections/Games";
import MahavirBookFAQ from "./sections/Faq";
import Testimonial from "./sections/Testimonial";


export default function Home() {
  return (
   <>
   <Hero/>

   <Games/>
      <WhyChooseUs/>
      <MahavirBookFAQ/>
      <Testimonial/>
   </>
  );
}

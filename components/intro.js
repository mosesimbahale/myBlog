import { CMS_NAME, CMS_URL } from "../lib/constants";
import HeaderTW from "./HeaderTW";


export default function Intro() {
  return (
    <>
      <HeaderTW />




 
  

      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12      repeating-radial-gradient(circle closest-corner at 100px 100px, #553c9a, #b393d3 10%, #553c9a 20%);">
        
      
        <h3 className="text-6xl md:text-4xl font-bold tracking-tighter ">
          Efficient & Effective Programming.
        </h3>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A statically generated blog example using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href={CMS_URL}
            className="underline hover:text-success duration-200 transition-colors"
          >
            Sanity.io
          </a>
          .
        </h4>


 



      </section>
    </>
  );
}

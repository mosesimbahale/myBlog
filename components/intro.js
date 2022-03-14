import { CMS_NAME, CMS_URL } from "../lib/constants";
import HeaderTW from "./HeaderTW";


export default function Intro() {
  return (
    <>
      <HeaderTW />




 
    <div class='max-w-md mx-auto m-8'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search blog..." /> 
    </div>
    </div>








      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12      repeating-radial-gradient(circle closest-corner at 100px 100px, #553c9a, #b393d3 10%, #553c9a 20%);">
        <h3 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
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

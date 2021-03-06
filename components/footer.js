import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-accent-2 text-white">
      <Container>
    
     




        <div className=" font-sans py-28 flex flex-col lg:flex-row items-center">
          <h4 className="text-4xl lg:text-3xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            For the most effective and efficient ways of coding & the use of Machine
            learning with JS
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-indigo-500 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Get the App
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 bg-white hover:bg-black hover:text-white border border-indigo-500 text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              View on GitHub
            </a>

            <a 
              href="https://www.youtube.com/channel/UCGHLJQ2E9UvsU_tPJ7xUqYw/featured"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-indigo-500 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Youtube
            </a>
          </div>

          <h6> Copyright © 2022 SmartSoft, Inc. All rights reserved</h6>

        </div>
      </Container>
    </footer>
  );
}

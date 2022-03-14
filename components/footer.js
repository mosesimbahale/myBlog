import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-2 border-t border-accent-2 ">
      <Container>
    
         
          <form
            class="m-8 flex justify-center "
            action="https://app.us14.list-manage.com/subscribe/post?u=9b23e62248df71de729332324&amp;id=2c22f8bb88"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
          >
            <input
              class="rounded-l-lg p-4 border-t mr-0 border-b border-5 text-gray-800 border-gray-200 bg-white"
              placeholder="your@mail.com"
            />
            <button class="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-black border-t border-b border-r">
              Subscribe
            </button>
          </form>

     

        <div className=" font-sans py-28 flex flex-col lg:flex-row items-center">
          <h4 className="text-4xl lg:text-3xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            For the most effective and efficient ways of coding & use of Machine
            learning with JS
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Get the App
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>

            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Youtube
            </a>
          </div>

          <h6> Copyright © 2022 Solid, Inc. All rights reserved</h6>
        </div>
      </Container>
    </footer>
  );
}

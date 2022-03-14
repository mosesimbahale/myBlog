import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import { BookmarkIcon } from '@heroicons/react/solid'




export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (




    <div class="max-w-md mx-auto bg-white  shadow-md overflow-hidden  hover:shadow-medium transition-shadow duration-300 ">
      <div class="w-sm">
        <div class="md:shrink-0">
          <CoverImage
            slug={slug}
            title={title}
            imageObject={coverImage}
            url={imageBuilder(coverImage).url()}
          />
        </div>

        <div class="p-8">
          <div class=" tracking-wide text-sm text-indigo-500 font-semibold">
            <Date dateString={date} />
          </div>

          <p class="mt-2 text-slate-500">
            <p className="text-lg leading-relaxed mb-2">{excerpt}</p>
            <Avatar name={author?.name} picture={author?.picture} />
          </p>



          <BookmarkIcon className="h-7 w-7 text-indigo-400"/>
       
  

          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </a>



          
    

    
        </div>
      </div>



   
    </div>





  );
}

import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import { BookmarkIcon } from '@heroicons/react/solid';




export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (




    <div class="max-w-md mx-auto bg-white  shadow-md overflow-hidden  hover:shadow-medium rounded-lg transition-shadow duration-100 ">
      
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
      
      
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



          <BookmarkIcon className="h-7 w-7 text-indigo-400 mb-5"/>
          <button type="button"
           class=" text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
           > Read more
           
          </button>
  

          <div className="mb-5">
            
              {title}
            
          </div>

      
    

    
        </div>
      </div>


      </Link>
   
    </div>





  );
}

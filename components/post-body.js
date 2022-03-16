import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";

export default function PostBody({ content }) {
  return (
    <>
    <div class="bg-clip-padding p-6 bg-white border-4 border-violet-300 border-dashed">
    <div className="max-w-2xl mx-auto bg-white" className={markdownStyles.markdown}>
      
      <PortableText value={content} />
      </div>
    </div>
    </>
  );
}

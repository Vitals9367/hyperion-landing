import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { format } from "date-fns";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
    },
    description: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    formattedDate: {
      type: "string",
      resolve: (post) => format(post.date, "MMMM d, yyyy"),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});

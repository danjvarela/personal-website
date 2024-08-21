import { groq } from "next-sanity"

/**
 * get home page content
 */
export const homeQuery = groq`*[_type == "home"][0]`

/**
 * get works page content
 */
export const worksQuery = groq`*[_type == "works"][0]`

export const blogsQuery = groq`*[_type == "blog"]`

export const blogQuery = (slug: string) =>
  groq`*[_type == "blog" && slug.current == "${slug}"]{
    ...,
    "content":content[]{
      ...,
      "asset":asset->
    }
  }[0]
`

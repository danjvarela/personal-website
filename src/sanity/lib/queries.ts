import { groq } from "next-sanity"

/**
 * get home page content
 */
export const homeQuery = groq`*[_type == "home"]{
  content,
  seo
}[0]`

/**
 * get works page content
 */
export const worksQuery = groq`*[_type == "works"][0]`

export const blogsQuery = groq`*[_type == "blog"]`

export const blogQuery = groq`*[_type == "blog" && slug.current == $slug]{
    ...,
    "content":content[]{
      ...,
      title,
      description,
      altText,
      "asset":asset->{
        ...,
        altText,
        _ref,
        _type,
        description,
        "tags": opt.media.tags[]->name.current,
        title
      }
    }
  }[0]
`

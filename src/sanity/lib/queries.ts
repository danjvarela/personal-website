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

export const blogsQuery = groq`*[_type == "blog"] | order(_createdAt desc)`

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

export const seoQuery = groq`*[_type == $type]{seo}[0]`

export const slugSpecificSeoQuery = groq`*[_type == $type && slug.current == $slug]{seo}[0]`

export const settingsQuery = groq`*[_type == "settings"]{
  ...,
  favicon{
    asset->
  }
}[0]`

export const allPagesQuery = groq`*[_type == "home" || _type == "blog" || _type == "blogs" || _type == "works"]`

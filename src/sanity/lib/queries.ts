import { groq } from "next-sanity"

/**
 * get home page content
 */
export const homeQuery = groq`*[_type == "home"][0]`

/**
 * get works page content
 */
export const worksQuery = groq`*[_type == "works"][0]`

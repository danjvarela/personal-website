import { groq } from "next-sanity"

/**
 * get home page content
 */
export const homeQuery = groq`*[_type == "home"][0]`

/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch"
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: "sanity.imagePalette"
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions"
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: "sanity.fileAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: "geopoint"
  lat?: number
  lng?: number
  alt?: number
}

export type Settings = {
  _id: string
  _type: "settings"
  _createdAt: string
  _updatedAt: string
  _rev: string
  favicon?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
}

export type Blogs = {
  _id: string
  _type: "blogs"
  _createdAt: string
  _updatedAt: string
  _rev: string
  seo?: SeoMetaFields
}

export type Blog = {
  _id: string
  _type: "blog"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  content?: Array<
    | {
        children?: Array<
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
          | ({
              _key: string
            } & LinkWithIcon)
        >
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | ({
        _key: string
      } & LinkWithDescription)
    | {
        asset?: {
          _ref: string
          _type: "reference"
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        title?: string
        description?: string
        altText?: string
        _type: "image"
        _key: string
      }
    | ({
        _key: string
      } & Code)
  >
  tags?: Array<
    {
      _key: string
    } & Tag
  >
  seo?: SeoMetaFields
}

export type Works = {
  _id: string
  _type: "works"
  _createdAt: string
  _updatedAt: string
  _rev: string
  content?: Array<
    | {
        children?: Array<
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
          | ({
              _key: string
            } & LinkWithIcon)
        >
        style?: "normal" | "h3" | "h4" | "blockquote"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | ({
        _key: string
      } & LinkWithDescription)
    | ({
        _key: string
      } & Project)
  >
  seo?: SeoMetaFields
}

export type Project = {
  _type: "project"
  title?: string
  deployedLink?: string
  githubLink?: string
  description?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: "span"
      _key: string
    }>
    style?: "normal"
    listItem?: "bullet" | "number"
    markDefs?: Array<{
      href?: string
      _type: "link"
      _key: string
    }>
    level?: number
    _type: "block"
    _key: string
  }>
  isAPI?: boolean
  tags?: Array<string>
}

export type LinkWithIcon = {
  _type: "linkWithIcon"
  title?: string
  icon?: IconPicker
  url?: string
}

export type LinkWithDescription = {
  _type: "linkWithDescription"
  title?: string
  description?: string
  url?: string
}

export type Home = {
  _id: string
  _type: "home"
  _createdAt: string
  _updatedAt: string
  _rev: string
  content?: Array<
    | {
        children?: Array<
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
          | ({
              _key: string
            } & LinkWithIcon)
        >
        style?: "normal" | "h3" | "h4" | "blockquote"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | ({
        _key: string
      } & LinkWithDescription)
  >
  seo?: SeoMetaFields
}

export type Tags = Array<
  {
    _key: string
  } & Tag
>

export type Tag = {
  _type: "tag"
  value?: string
  label?: string
}

export type MediaTag = {
  _id: string
  _type: "media.tag"
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: Slug
}

export type Slug = {
  _type: "slug"
  current?: string
  source?: string
}

export type MetaTag = {
  _type: "metaTag"
  metaAttributes?: Array<
    {
      _key: string
    } & MetaAttribute
  >
}

export type MetaAttribute = {
  _type: "metaAttribute"
  attributeKey?: string
  attributeType?: "string" | "image"
  attributeValueImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  attributeValueString?: string
}

export type SeoMetaFields = {
  _type: "seoMetaFields"
  nofollowAttributes?: boolean
  metaTitle?: string
  metaDescription?: string
  metaImage?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  seoKeywords?: Array<string>
  openGraph?: OpenGraph
  additionalMetaTags?: Array<
    {
      _key: string
    } & MetaTag
  >
  twitter?: Twitter
}

export type Twitter = {
  _type: "twitter"
  cardType?: string
  creator?: string
  site?: string
  handle?: string
}

export type OpenGraph = {
  _type: "openGraph"
  url?: string
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  title?: string
  description?: string
  siteName?: string
}

export type SanityImageCrop = {
  _type: "sanity.imageCrop"
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot"
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: "sanity.imageAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData"
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata"
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Code = {
  _type: "code"
  language?: string
  filename?: string
  code?: string
  highlightedLines?: Array<number>
}

export type IconPicker = {
  _type: "iconPicker"
  provider?: string
  name?: string
  svg?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Settings
  | Blogs
  | Blog
  | Works
  | Project
  | LinkWithIcon
  | LinkWithDescription
  | Home
  | Tags
  | Tag
  | MediaTag
  | Slug
  | MetaTag
  | MetaAttribute
  | SeoMetaFields
  | Twitter
  | OpenGraph
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Code
  | IconPicker
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/lib/queries.ts
// Variable: homeQuery
// Query: *[_type == "home"]{  content,  seo}[0]
export type HomeQueryResult = {
  content: Array<
    | ({
        _key: string
      } & LinkWithDescription)
    | {
        children?: Array<
          | ({
              _key: string
            } & LinkWithIcon)
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
        >
        style?: "blockquote" | "h3" | "h4" | "normal"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
  > | null
  seo: SeoMetaFields | null
} | null
// Variable: worksQuery
// Query: *[_type == "works"][0]
export type WorksQueryResult = {
  _id: string
  _type: "works"
  _createdAt: string
  _updatedAt: string
  _rev: string
  content?: Array<
    | ({
        _key: string
      } & LinkWithDescription)
    | ({
        _key: string
      } & Project)
    | {
        children?: Array<
          | ({
              _key: string
            } & LinkWithIcon)
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
        >
        style?: "blockquote" | "h3" | "h4" | "normal"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
  >
  seo?: SeoMetaFields
} | null
// Variable: blogsQuery
// Query: *[_type == "blog"] | order(_createdAt desc)
export type BlogsQueryResult = Array<{
  _id: string
  _type: "blog"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  content?: Array<
    | ({
        _key: string
      } & Code)
    | ({
        _key: string
      } & LinkWithDescription)
    | {
        children?: Array<
          | ({
              _key: string
            } & LinkWithIcon)
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
        >
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: "reference"
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        title?: string
        description?: string
        altText?: string
        _type: "image"
        _key: string
      }
  >
  tags?: Array<
    {
      _key: string
    } & Tag
  >
  seo?: SeoMetaFields
}>
// Variable: blogQuery
// Query: *[_type == "blog" && slug.current == $slug]{    ...,    "content":content[]{      ...,      title,      description,      altText,      "asset":asset->{        ...,        altText,        _ref,        _type,        description,        "tags": opt.media.tags[]->name.current,        title      }    }  }[0]
export type BlogQueryResult = {
  _id: string
  _type: "blog"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  content: Array<
    | {
        children?: Array<
          | ({
              _key: string
            } & LinkWithIcon)
          | {
              marks?: Array<string>
              text?: string
              _type: "span"
              _key: string
            }
        >
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal"
        listItem?: "bullet" | "number"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
        title: null
        description: null
        altText: null
        asset: null
      }
    | {
        _key: string
        _type: "code"
        language?: string
        filename?: string
        code?: string
        highlightedLines?: Array<number>
        title: null
        description: null
        altText: null
        asset: null
      }
    | {
        asset: {
          _id: string
          _type: "sanity.imageAsset"
          _createdAt: string
          _updatedAt: string
          _rev: string
          originalFilename?: string
          label?: string
          title: string | null
          description: string | null
          altText: string | null
          sha1hash?: string
          extension?: string
          mimeType?: string
          size?: number
          assetId?: string
          uploadId?: string
          path?: string
          url?: string
          metadata?: SanityImageMetadata
          source?: SanityAssetSourceData
          _ref: null
          tags: null
        } | null
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        title: string | null
        description: string | null
        altText: string | null
        _type: "image"
        _key: string
      }
    | {
        _key: string
        _type: "linkWithDescription"
        title: string | null
        description: string | null
        url?: string
        altText: null
        asset: null
      }
  > | null
  tags?: Array<
    {
      _key: string
    } & Tag
  >
  seo?: SeoMetaFields
} | null
// Variable: seoQuery
// Query: *[_type == $type]{seo}[0]
export type SeoQueryResult =
  | {
      seo: null
    }
  | {
      seo: SeoMetaFields | null
    }
  | null
// Variable: slugSpecificSeoQuery
// Query: *[_type == $type && slug.current == $slug]{seo}[0]
export type SlugSpecificSeoQueryResult =
  | {
      seo: null
    }
  | {
      seo: SeoMetaFields | null
    }
  | null
// Variable: settingsQuery
// Query: *[_type == "settings"]{  ...,  favicon{    asset->  }}[0]
export type SettingsQueryResult = {
  _id: string
  _type: "settings"
  _createdAt: string
  _updatedAt: string
  _rev: string
  favicon: {
    asset: {
      _id: string
      _type: "sanity.imageAsset"
      _createdAt: string
      _updatedAt: string
      _rev: string
      originalFilename?: string
      label?: string
      title?: string
      description?: string
      altText?: string
      sha1hash?: string
      extension?: string
      mimeType?: string
      size?: number
      assetId?: string
      uploadId?: string
      path?: string
      url?: string
      metadata?: SanityImageMetadata
      source?: SanityAssetSourceData
    } | null
  } | null
} | null

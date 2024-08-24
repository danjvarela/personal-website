import {
  defineLocations,
  PresentationPluginOptions,
} from "@sanity/presentation"

export const presentationToolResolve: PresentationPluginOptions["resolve"] = {
  locations: {
    blog: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/blogs/${doc?.slug}`,
          },
          { title: "Blogs", href: `/blogs` },
        ],
      }),
    }),
    home: defineLocations({
      locations: [
        {
          title: "Home",
          href: "/",
        },
      ],
    }),
    works: defineLocations({
      locations: [
        {
          title: "Works",
          href: "/works",
        },
      ],
    }),
  },
}

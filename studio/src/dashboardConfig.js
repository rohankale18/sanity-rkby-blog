export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e93fc47ba0ea20b5a2433b",
                  title: "Sanity Studio",
                  name: "sanity-rkby-blog-studio",
                  apiId: "a17d2429-3f11-46df-917c-b9757703b980",
                },
                {
                  buildHookId: "61e93fc4a155ad00d007750a",
                  title: "Blog Website",
                  name: "sanity-rkby-blog",
                  apiId: "752ecc77-55f0-4ea7-b06d-a9b500c0880d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rohankale18/sanity-rkby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-rkby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

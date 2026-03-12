import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        frontmatterDelimiters: "---",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "weight",
            label: "Weight",
          },
          {
            type: "string",
            name: "aliases",
            label: "Aliases",
            list: true,
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/posts",
        frontmatterFormat: "yaml",
        frontmatterDelimiters: "---",
        match: {
          include: "**/*",
        },
        ui: {
          defaultItem: () => ({
            title: "Новый пост",
            date: new Date().toISOString(),
            draft: true,
            body: {
              type: "root",
              children: [
                {
                  type: "p",
                  children: [{ type: "text", text: "Краткое описание релиза..." }],
                },
                {
                  type: "html",
                  value: "<!--more-->",
                  children: [{ type: "text", text: "" }],
                },
                {
                  type: "p",
                  children: [{ type: "text", text: "Подробное описание, системные требования, ссылки..." }],
                },
              ],
            },
          }),
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "aliases",
            label: "Aliases",
            list: true,
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

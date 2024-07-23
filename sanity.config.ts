import { defineConfig, defineArrayMember } from "sanity";
import { structureTool } from "sanity/structure";



export default defineConfig({
  title: "J.A Web Design Sanity",

  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,

  plugins: [
    structureTool()],
  schema: {
    types: [
      {
        type: "document",
        name: "post",
        title: "Post",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
            title: "Block Content",
            name: "blockContent",
            type: "array",
            of: [
              defineArrayMember({
                title: "Block",
                type: "block",
                styles: [
                  { title: "H2", value: "h2" },
                  { title: "H3", value: "h3" },
                  { title: "H4", value: "h4" },
                  { title: "P", value: "p" },
                  { title: "Quote", value: "blockquote" },
                ],
                lists: [
                  { title: "Bullet", value: "bullet" },
                  { title: "Number", value: "number" },
                ],
                marks: {
                  decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                  ],
                  annotations: [
                    {
                      title: "URL",
                      name: "link",
                      type: "object",
                      fields: [
                        {
                          title: "URL",
                          name: "href",
                          type: "url",
                        },
                      ],
                    },
                  ],
                },
              }),
              {
                title: "Image",
                type: "image",
                fields: [
                  {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                  },
                ],
              },
              {
                title: 'CTA',
                type: 'object',
                name: 'cta',
                fields: [
                  {
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                  },
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
               },
            ],
          },
        ],
      },
    ],
  },
});
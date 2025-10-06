// stackbit.config.ts
import type { StackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const config: StackbitConfig = {
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "home",
          type: "page",
          filePath: "content/home.json",
          urlPath: "/",
          fields: [
            { name: "bgImage", type: "image", required: true, label: "Background Image" },
            { name: "overlayText", type: "string", required: false, label: "Overlay Text" }
          ]
        },
      ]
    })
  ],
  siteMap: ({ documents }) => {
    return documents
      .filter(d => d.modelName === "home" || d.modelName === "page")
      .map(d => ({
        stableId: d.id,
        urlPath: d.modelName === "home" ? "/" : `/${(d as any).slug ?? d.id}`,
        document: d,
        isHomePage: d.modelName === "home"
      }));
  },
  stackbitVersion: ""
};

export default config;

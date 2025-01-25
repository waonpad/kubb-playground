import { defineConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";

const OUTPUT_PATH = "./src/kubb/gen";

export default defineConfig({
  input: {
    path: "./api.json",
  },
  output: {
    path: OUTPUT_PATH,
    clean: true,
  },
  hooks: {
    done: [`biome check --write ${OUTPUT_PATH}`],
  },
  plugins: [
    pluginOas(),
    pluginTs({
      unknownType: "unknown",
    }),
    pluginZod({
      unknownType: "unknown",
    }),
    pluginClient({
      client: "fetch",
      paramsType: "object",
      baseURL: "${process.env.API_URL}",
      dataReturnType: "full",
    }),
  ],
});

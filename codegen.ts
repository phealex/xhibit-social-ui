import { CodegenConfig } from "@graphql-codegen/cli";
import { config as dotenv } from 'dotenv';

dotenv()

const schema = process.env.VITE_GRAPHQL_DEV_URL;

// console.log(schema); 

const config: CodegenConfig = {
  schema: schema,
  //   schema: "https://xhibit-backend-1010591944835.europe-west1.run.app/graphql",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;

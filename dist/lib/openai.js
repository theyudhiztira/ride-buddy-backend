import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-4sRnOLl7acH4A5m7fnM8q10W",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response);
//# sourceMappingURL=openai.js.map
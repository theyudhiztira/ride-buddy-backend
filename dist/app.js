import dotenv from "dotenv";
import express from "express";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const app = express();
const port = process.env.APP_PORT || 3000;
const configuration = new Configuration({
    organization: "org-4sRnOLl7acH4A5m7fnM8q10W",
    apiKey: process.env.OPENAI_API_KEY,
});
app.get('/', async (req, res) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    console.log(response.data);
    return res.send('Halo Halo Bandung');
});
app.listen(port, () => {
    return console.log(`App listening in port ${port}`);
});
//# sourceMappingURL=app.js.map
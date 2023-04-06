import dotenv from "dotenv";
import express,  {Application, Request, Response} from "express";

//Routes
import touringSuggestion from "./routes/touringSuggestions.js";

dotenv.config();

const app: Application = express();
const port = process.env.APP_PORT || 3000;


app.use(express.json());
// const configuration = new Configuration({
//     organization: "org-4sRnOLl7acH4A5m7fnM8q10W",
//     apiKey: process.env.OPENAI_API_KEY,
// });

app.get('/', async (req: Request, res: Response) => {
    // const openai = new OpenAIApi(configuration);
    // const response = await openai.listEngines();
    // console.log(response);
    return res.send('Halo Halo Bandung');
});
app.use('/touring', touringSuggestion);

app.listen(port, () => {
    return console.log(`App listening in port ${port}`);
});
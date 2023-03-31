import { Request, Response } from "express";
import OpenAI from "../../lib/openai.js";
import Query from "../../lib/queries.js";

class Suggestion {
    async getSuggestion(req: Request, res: Response){
        const generateQuery = await new Query('Jakarta', 'Yogyakarta', '14 Days').generate();
        const openAI = await new OpenAI().chat(generateQuery);

        return res.send({
            result: openAI
        });
    }
}

export default Suggestion;
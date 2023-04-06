import { Request, Response } from "express";
import Validator from "validatorjs";
import OpenAI from "../../lib/openai.js";
import Query from "../../lib/queries.js";

class Suggestion {
    async getSuggestion(req: Request, res: Response){
        try {
            const body = req.body;
            const rules = {
                origin: 'required',
                destination: 'required',
                duration: 'required|numeric',
                language: 'in:en,id',
                vehicle: 'in:car,motorcycle'
            }

            const validation = new Validator(body, rules);

            if(validation.fails()){
                return res
                .status(400)
                .send(validation.errors);
            }

            const generateQuery = await new Query(body.origin, body.destination, body.duration, body?.language, body?.vehicle).generate();
            const openAI = await new OpenAI().chat(generateQuery);

            return res.send({
                result: openAI
            });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            return res.send({
                message: error?.message
            })
        }
    }
}

export default Suggestion;
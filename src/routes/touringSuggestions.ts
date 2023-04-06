import express, {Request, Response} from "express";
import Suggestion from "../controllers/touring/suggestion.js";

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    return await new Suggestion().getSuggestion(req, res);
})

export default router;
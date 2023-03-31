import express, {Request, Response} from "express";
import Suggestion from "../controllers/touring/suggestion.js";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('Touring Suggestion')
});

router.get('/route', async (req: Request, res: Response) => {
    return await new Suggestion().getSuggestion(req, res);
})

export default router;
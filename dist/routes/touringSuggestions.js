import express from "express";
import Suggestion from "../controllers/touring/suggestion.js";
const router = express.Router();
router.get('/', (req, res) => {
    return res.send('Touring Suggestion');
});
router.get('/route', async (req, res) => {
    return await new Suggestion().getSuggestion(req, res);
});
export default router;
//# sourceMappingURL=touringSuggestions.js.map
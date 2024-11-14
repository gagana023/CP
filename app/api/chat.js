import { OpenAIApi } from "openai"
import { configuration } from "openai"

export default as async(req, res) => {
    const {question}=> req.body

    if (!question) {
        return res.status(400)jsxon
    }
}
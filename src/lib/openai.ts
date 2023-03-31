import { Configuration, OpenAIApi, CreateChatCompletionResponseChoicesInner } from "openai";

interface OpenAIInterface{
    chat(arg: string): Promise<CreateChatCompletionResponseChoicesInner[]>
}

class OpenAI implements OpenAIInterface{
    async chat(message: string): Promise<CreateChatCompletionResponseChoicesInner[]> {
        const configuration = new Configuration({
            organization: "org-4sRnOLl7acH4A5m7fnM8q10W",
            apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);
        const chat = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            n: 3,
            messages: [{role: "user", content: message}],
          });
        
        return chat.data.choices;
    }
}

export default OpenAI;
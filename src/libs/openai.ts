const { Configuration, OpenAIApi } = require("openai");

export const client = () => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    return openai;
}

export async function chat(prompt: string) {
    const openai = client();
    const completion = await openai.createChatCompletion({
        model: process.env.OPENAI_API_MODEL,
        messages: [
            {role: "user", content: "Merhaba sen kimsin"},
        ],
    });

    return completion.data;
}
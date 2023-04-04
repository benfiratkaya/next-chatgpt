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
        model: process.env.OPENAI_API_CHAT_MODEL,
        messages: [
            {role: "user", content: "Php ile yazılmış Hello World kodu yaz"},
        ],
    });

    return completion.data;
}

export async function translate(
    text: string,
    sourceLanguage: string,
    targetLanguage: string,
) {
    const openai = client();

    let prompt;
    if (sourceLanguage === "auto")
        prompt = `Translate this into ${targetLanguage}: ${text}`;
    else
        prompt = `Translate from ${sourceLanguage} to ${targetLanguage}: ${text}`;

    const completion = await openai.createCompletion({
        model: process.env.OPENAI_API_TRANSLATE_MODEL,
        prompt,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    return completion.data;
}
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
        prompt = `I want you to act as an ${targetLanguage} translator. I will speak to you in any language and you translate it and answer in the corrected and improved version of my sentence/phrase/word in ${targetLanguage}. I want you to only reply the translated sentence/phrase/word and nothing else, do not write explanations. You do not need to reply a complete sentence.`;
    else
        prompt = `I want you to act as an ${targetLanguage} translator. I will speak to you in ${sourceLanguage} and you translate it and answer in the corrected and improved version of my sentence/phrase/word in ${targetLanguage}. I want you to only reply the translated sentence/phrase/word and nothing else, do not write explanations. You do not need to reply a complete sentence.`;

    const content = `The text or word is: ${text}`;
    const completion = await openai.createChatCompletion({
        model: process.env.OPENAI_API_TRANSLATE_MODEL,
        messages: [
            { role: 'system', content: prompt },
            {
                role: 'user',
                content,
            },
        ],
        temperature: 0,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    });

    return completion.data;
}
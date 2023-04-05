const { Configuration, OpenAIApi } = require("openai");
import {languages} from "@/data/languages";

export const client = () => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration);
}

export async function chat(prompt: string, messages: ChatMessage[]) {
    const openai = client();
    const completion = await openai.createChatCompletion({
        model: process.env.OPENAI_API_CHAT_MODEL,
        messages: [
            ...messages,
            {
                role: "user",
                content: prompt
            },
        ],
    });

    return completion.data;
}

export async function translate(
    text: string,
    sourceLang: string,
    targetLang: string,
) {
    const openai = client();

    if (sourceLang !== 'auto')
        sourceLang = languages.find(k => k.code === sourceLang).name
    targetLang = languages.find(k => k.code === targetLang).name;

    let prompt;
    if (sourceLang === "auto")
        prompt = `I want you to act as an ${targetLang} translator. I will speak to you in any language and you translate it and answer in the corrected and improved version of my sentence/phrase/word in ${targetLang}. I want you to only reply the translated sentence/phrase/word and nothing else, do not write explanations. You do not need to reply a complete sentence.`;
    else
        prompt = `I want you to act as an ${targetLang} translator. I will speak to you in ${sourceLang} and you translate it and answer in the corrected and improved version of my sentence/phrase/word in ${targetLang}. I want you to only reply the translated sentence/phrase/word and nothing else, do not write explanations. You do not need to reply a complete sentence.`;

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
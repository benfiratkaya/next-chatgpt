interface ChatMessage {
    role: 'user' | 'system' | 'assistant'
    content: string
}
import {ChatBubbleOvalLeftEllipsisIcon, LanguageIcon} from "@heroicons/react/24/outline";

type Navigation = {
    name: string
    href: string
    icon: any
}

export const navigation: Navigation[] = [
    { name: 'Chat', href: '/chat', icon: ChatBubbleOvalLeftEllipsisIcon },
    { name: 'Translate', href: '/translate', icon: LanguageIcon },
]
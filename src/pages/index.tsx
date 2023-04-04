import Layout from "@/components/Layout";
import TemplateCard from "@/components/home/TemplateCard";

const cards = [
    {
        href: "/chat",
        title: "Chat",
        description: "Chat with AI powered chatbot."
    },
    {
        href: "/translate",
        title: "Translate",
        description: "Translate text to different languages."
    }
];

export default function Home() {
  return (
    <Layout title="Home">
        <div className="w-full h-full flex flex-col items-center justify-center px-4 lg:px-32">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {cards.map((card, index) => (
                    <TemplateCard
                        key={index}
                        href={card.href}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    </Layout>
  )
}

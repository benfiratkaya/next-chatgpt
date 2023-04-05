import Layout from "@/components/Layout";
import TemplateCard from "@/components/home/TemplateCard";
import {templateCards} from "@/data/templateCards";

export default function Home() {
  return (
    <Layout title="Home">
        <div className="w-full h-full flex flex-col items-center justify-center px-4 lg:px-32">
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {templateCards.map((card, index) => (
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

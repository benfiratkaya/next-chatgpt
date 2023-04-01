import Layout from "@/components/Layout";
import Content from "@/components/Content";
import TextareaAutosize from 'react-textarea-autosize';


export default function Home() {
  return (
    <Layout title="Chat">
        <Content />
        <div className="relative my-4 lg:my-6">
            <footer className="relative max-w-4xl mx-auto px-3 lg:px-0">
                <TextareaAutosize
                    rows={1}
                    name="comment"
                    id="comment"
                    className="px-4 py-3 bg-accents-1 focus:outline-none block w-full text-sm text-white rounded-md"
                    placeholder="Type your message here..."
                    defaultValue={''}
                />
            </footer>
        </div>
    </Layout>
  )
}

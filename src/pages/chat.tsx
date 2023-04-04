import Layout from "@/components/Layout";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import ChatTextarea from "@/components/ChatTextarea";

export default function ChatPage() {
    return (
    <Layout title="Chat">
        <Content />
        <Footer>
            <ChatTextarea />
        </Footer>
    </Layout>
  )
}

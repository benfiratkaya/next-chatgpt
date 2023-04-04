import Layout from "@/components/Layout";
import Content from "@/components/chat/Content";
import Footer from "@/components/chat/Footer";
import ChatTextarea from "@/components/chat/ChatTextarea";

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

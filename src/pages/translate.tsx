import Layout from "@/components/Layout";
import Textarea from "@/components/translate/Textarea";
import SwitchLanguage from "@/components/translate/SwitchLanguage";
import TargetText from "@/components/translate/TargetText";
import SourceLanguageSelector from "@/components/translate/SourceLanguageSelector";
import TargetLanguageSelector from "@/components/translate/TargetLanguageSelector";

export default function TranslatePage() {
    return (
        <Layout title="Translate">
          <div className="flex flex-col items-center px-4 lg:px-24 mt-16">
              <div className="w-full border border-accents-3 rounded-lg bg-accents-1">
                  <div className="relative flex px-5 py-3 border-b border-accents-3 select-none">
                      <div className="flex flex-1 items-center">
                          <SourceLanguageSelector />
                      </div>
                      <SwitchLanguage />
                      <div className="flex items-center flex-1">
                          <TargetLanguageSelector />
                      </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-accents-3">
                      <Textarea />
                      <TargetText />
                  </div>
              </div>
          </div>
        </Layout>
    )
}

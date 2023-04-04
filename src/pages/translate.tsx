import Layout from "@/components/Layout";
import {ArrowsRightLeftIcon, ChevronDownIcon} from "@heroicons/react/24/solid";
import {selectSourceLang, setSourceLang} from "@/redux/reducers/translateSlice";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "@/components/translate/Textarea";
import SwitchLanguage from "@/components/translate/SwitchLanguage";
import TargetText from "@/components/translate/TargetText";
import SourceLanguageSelector from "@/components/translate/SourceLanguageSelector";

export default function TranslatePage() {
    const sourceLang = useSelector(selectSourceLang);
    const dispatch = useDispatch();
  return (
    <Layout title="Translate">
      <div className="flex flex-col items-center px-4 lg:px-24 mt-16">
          <div className="w-full border border-accents-3 rounded-lg bg-accents-1">
              <div className="relative flex px-5 py-3 border-b border-accents-3">
                  <div className="flex flex-1 items-center">
                      <SourceLanguageSelector />
                  </div>
                  <SwitchLanguage />
                  <div className="flex items-center flex-1">
                      <select name="" id="" className="font-medium cursor-pointer bg-transparent outline-none ml-4 appearance-none">
                          <option value="English">English</option>
                          <option value="Turkish">Türkçe</option>
                      </select>
                      <ChevronDownIcon className="w-4 h-4 text-accents-5 ml-2"/>
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

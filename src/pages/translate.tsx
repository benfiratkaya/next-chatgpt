import Layout from "@/components/Layout";
import Textarea from "react-textarea-autosize";
import {ArrowsRightLeftIcon, ChevronDownIcon} from "@heroicons/react/24/solid";

export default function TranslatePage() {
  return (
    <Layout title="Translate">
      <div className="flex flex-col items-center px-4 lg:px-24 mt-16">
          <div className="w-full border border-accents-3 rounded-lg bg-accents-1">
              <div className="flex px-5 py-3 border-b border-accents-3">
                  <div className="flex flex-1 items-center">
                      <select name="" id="" className="font-medium cursor-pointer bg-transparent outline-none appearance-none">
                          <option value="auto" selected={true}>
                              Detect
                          </option>
                          <option value="English">English</option>
                          <option value="Turkish">Türkçe</option>
                      </select>
                      <ChevronDownIcon className="w-4 h-4 text-accents-5 ml-2"/>
                  </div>
                  <button>
                      <ArrowsRightLeftIcon className="w-5 h-5 text-accents-5"/>
                  </button>
                  <div className="flex items-center flex-1">
                      <select name="" id="" className="font-medium cursor-pointer bg-transparent outline-none ml-4 appearance-none">
                          <option value="English">English</option>
                          <option value="Turkish">Türkçe</option>
                      </select>
                      <ChevronDownIcon className="w-4 h-4 text-accents-5 ml-2"/>
                  </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-accents-3">
                  <Textarea
                      className="px-4 py-3 bg-accents-1 focus:outline-none w-full min-h-[120px] text-white rounded-bl-lg resize-none px-5 py-3"
                  >
                      asd
                  </Textarea>
                  <div
                      className="px-4 py-3 bg-accents-1 block w-full text-white rounded-br-lg px-5 py-3"
                  >
                      Hello!
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

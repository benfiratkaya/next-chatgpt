import React from 'react';
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";
import {setSearch} from "@/redux/reducers/translateSlice";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const SearchLanguage = () => {
    const dispatch = useDispatch();

    const handleInput = debounce((e) => {
        dispatch(setSearch(e.target.value));
    }, 500);

    return (
        <div className="border-b border-accents-3">
            <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="w-4 h-4 text-accents-5"/>
                </div>
                <input
                    placeholder="Search languages"
                    className="w-full px-4 pl-10 py-3 text-sm text-accents-5 bg-accents-2 outline-none"
                    onInput={handleInput}
                />
            </div>
        </div>
    );
};

export default SearchLanguage;

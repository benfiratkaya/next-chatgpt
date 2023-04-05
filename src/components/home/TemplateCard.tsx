import React from 'react';
import Link from "next/link";

const TemplateCard = ({href, title, description}: TemplateCard) => {
    return (
        <Link href={href} className="flex flex-col w-full h-full px-5 py-4 transition border-2 border-accents-3 rounded-lg hover:border-gray-500">
            <h3 className="font-medium">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </Link>
    );
};

export default TemplateCard;

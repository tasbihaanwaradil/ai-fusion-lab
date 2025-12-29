"use client";
import React, { useState } from 'react'
import AiModelList from './../../shared/AiModelList'
import Image from "next/image"

const AiMultiModels = () => {
    const [aiModelList, setAiModelList] = useState(AiModelList);
    return (
        <div className='flex flex-1 h-[75vh] border-b'>
            {aiModelList.map((model, index) => (
                <div key={index}>
                    <div>
                        <Image src={model.icon}
                            alt={model.model}
                            width={24}
                            height={24}
                        />
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AiMultiModels

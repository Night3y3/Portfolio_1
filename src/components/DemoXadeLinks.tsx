"use client";
import React from 'react'
import { LinkPreview } from './ui/link-preview'
import xadepic from "../../public/xade-trade-ui-pic.png"
import tradingview from "../../public/trading-view.png"

const DemoXadeLinks = () => {
    return (
        <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            I worked on blockchain trading platform using {" "}<LinkPreview url="https://www.tradingview.com/" isStatic imageSrc={tradingview.src} className=" font-bold hover:text-blue-500 hover:underline" width={300} height={250}>Trading-View Charts</LinkPreview>{" "} and wallets you can check it out <LinkPreview url="https://trade.xade.finance" isStatic imageSrc={xadepic.src} className=" font-bold hover:text-blue-500 hover:underline" width={300} height={250}>here</LinkPreview>{" "}.
        </p>
    )
}

export default DemoXadeLinks
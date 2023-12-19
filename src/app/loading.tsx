"use client";
import { PuffLoader } from "react-spinners";


export default function Loading() {
    return (


        <PuffLoader
            color="#fab514"
            size={300}
            className="h-11 w-11 absolute m-auto top-0 bottom-0 right-0 left-0 animate-spin text-[#2f7df4]"
        />
    )
}
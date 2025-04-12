import React from "react";
import hp from "../assets/team/hp.jpg";

export default function Sponsors() {
    return (
        <>
            {/* Desktop Layout */}
            <div className="hidden md:flex relative z-30 w-full h-screen items-center text-white justify-center">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-row items-center justify-center gap-10">
                        {/* images */}
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        {/* images */}
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        {/* images */}
                        <img src={hp} className="w-[10%]"/> 
                        <img src={hp} className="w-[10%]"/> 
                    </div>
                </div>
            </div>
        </>
    );
}
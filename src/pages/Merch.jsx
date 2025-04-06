import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Loader2 } from "lucide-react";
import Background from "../components/ui/Background";
import logo from "../assets/adhyaay.png";

export default function Merch() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="relative w-[80vw] h-[90vh] overflow-hidden flex flex-row bg-[#ffffff06] backdrop-blur-3xl rounded-4xl z-30">
        <div className="text-white w-full mt-5 flex items-center justify-center p-20">
          <div className="text-3xl font-bold w-fit flex justify-center flex-col  p-20 rounded-4xl">
            Get <span className="text-6xl font-extrabold">THE OFFICIAL TSHIRT MERCHANDISE</span> of
            <img src={logo} className="w-[500px]"/>
            <div className="text-3xl font-bold">
              at just <span className="text-7xl font-extrabold">₹499</span>
            </div>
          </div>
        </div>

        {/* Spline Model Section */}
        <div className="z-10 w-full ">
          {loading && (
            <div className="absolute flex items-center justify-center w-full h-full bg-gray-800/80">
              <Loader2 className="animate-spin text-white w-10 h-10" />
            </div>
          )}
          <div className="w-full h-screen flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/eioFOwKyu0T7k23M/scene.splinecode"
              className={`w-full h-full ${loading ? "hidden" : "block"}`}
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
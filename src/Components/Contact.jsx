import { SocialHandles } from "../data/data"
import { AnimatedTooltip } from "./AnimatedTooltip"
import DigitalCircuitContact from "./DigitalCircuitContact"
import CodeEditorContact from "./CodeEditorContact"
import SmoothCodeEditorContact from "./SmoothCodeEditorContact"
import ContactCards from "./ContactCards"

const Contact = () => { 
    return(
        <>
        <div id=" main-outer-border" className="min-h-screen mt-32 pl-[200px] border-2 border-green-400 grid grid-cols-2 gap-2">
            <div id="Social-handles" className=" border-2 border-red-500 flex flex-row w-full items-center justify-center text-white" >
                <div>
                    {/* <DigitalCircuitContact/>    */}
                    {/* <CodeEditorContact/> */}
                    {/* <SmoothCodeEditorContact/> */}
                    <ContactCards/>
                </div>    
            </div>
            <div id="pic" className=" border-2 border-red-500 items-center justify-center text-white">
                <div className="flex items-between justify-center p-8 text-white">
                    <img src="src\data\PXL_20241004_210039261 - Copy.jpg" alt="" />
                </div>
                <span id="Colophon" className=" border-2 border-red-500 m-8  flex items-between justify-center  text-white">
                    Design & code by &nbsp;<a href="http://localhost:5173/"> <u>Atharv Singh</u></a>
                    <span id="copyright" className=" border-2 border-red-500 m-8 flex items-between justify-center  text-white">
                        &copy; 2024
                    </span>
                </span>
            </div>
        </div>
        </>
    )
}

export default Contact

/* 
-gmail:
-github:
-linkedin:
-leetcode:
-codeforces:
-X(twitter) : catch me ranting here
-Spotify: 

*/
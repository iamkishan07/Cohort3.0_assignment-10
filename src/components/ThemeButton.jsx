import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { MyStore } from "../context/ContextApi";


const ThemeButton = () => {

 const {theme,setTheme}=useContext(MyStore);


 return (
   <button
    onClick={()=>setTheme(theme==="dark"?"light":"dark")}
    className="
    w-11 h-11 rounded-xl
    border border-zinc-700
    flex items-center justify-center
    "
   >

    {
      theme==="dark"
      ?
      <Sun className="text-yellow-400"/>
      :
      <Moon className="text-black"/>
    }

   </button>
 )

}

export default ThemeButton;
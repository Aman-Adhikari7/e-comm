import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {

    const[searchTerm, setSearchTerm]=useState("")
    const[isOPen,setIsOpen]= useState(false)

    const handelSearchToggle = () =>{
        setIsOpen(!isOPen)
    }

    const handleSearch= (e)=>{
        e.preventDefault()
        console.log("text",searchTerm)
        setIsOpen(false)
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOPen ?"absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
        { isOPen ? (
            <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
                <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outliner-none w-full
                  placeholder:text-gray-700"
                
                />
                {/* search icon */}
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                    <HiMagnifyingGlass className="h-6 w-6"/>
                </button>
                </div>
                {/* close Button */}
                <button type="button" 
                onClick={handelSearchToggle}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-200
                 hover:text-greay-800">
                    <HiMiniXMark className="h-6 w-6"/>
                </button>
             
            </form>
        ) : (
            <button onClick={handelSearchToggle}>
                <HiMagnifyingGlass className="h6 w-6"/>
            </button>
        )

        }
    </div>
  );
};

export default SearchBar;
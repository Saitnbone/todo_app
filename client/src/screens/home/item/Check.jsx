import React from "react";
import {AiOutlineCheck} from 'react-icons/ai'

const Check = ({isCompleted}) =>{
    return(
    <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400': ''} 
    w-5 h-5 mr-3 flex item-center justify-center`}>
        {
        isCompleted &&
        <AiOutlineCheck size={18} className="text-gray-900" />
        }
    </div>
    )
}

export default Check;
import React from "react";
import {AiOutlineCheck} from 'react-icons/ai'

const Check = ({isComplited}) =>{
    return(
    <div className="border-2 rounded-md border-pink-400">
        {
        isComplited &&
        <AiOutlineCheck size={24} className="text-gray-900" />
        }
    </div>
    )
}

export default Check;
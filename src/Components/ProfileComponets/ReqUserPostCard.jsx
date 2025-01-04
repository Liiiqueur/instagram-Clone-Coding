import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ReqUserPostCard = () => {
    return (
        <div>
            <div className="w-60 h-60">
                <img className="cursor-pointer" src="https://cdn.pixabay.com/photo/2023/12/11/09/36/whisky-8443153_640.jpg" alt="" />
                <div>
                    <div>
                        <div>
                            <AiFillHeart /> <span>10</span>
                        </div>
                        <div><FaComment /> <span>30</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReqUserPostCard;
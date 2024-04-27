import React, { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import { dateFormat } from "../../utils/dateFormat";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews(272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="avatar" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Name
              </h5>
              <p className="text-[14px] leding-6 text-textColor">
                {dateFormat("1- 1-2024")}
              </p>
              <p className="text-para mt-3 font-medium text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                nam!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FEB60D" />
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="avatar" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Name
              </h5>
              <p className="text-[14px] leding-6 text-textColor">
                {dateFormat("1- 1-2024")}
              </p>
              <p className="text-para mt-3 font-medium text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                nam!
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(4).keys()].map((_, index) => (
              <AiFillStar key={index} color="#FEB60D" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;

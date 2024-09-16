import React, { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import { dateFormat } from "../../utils/dateFormat";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews = [], totalRating = 0 }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews({totalRating || 0})
        </h4>

        {reviews.length > 0 ? (
          reviews?.map((review, index) => (
            <div key={index} className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img
                    src={reviews?.user?.photo || avatar}
                    alt="avatar"
                    className="w-full rounded-full"
                  />
                </figure>
                <div>
                  <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                    {review?.user?.name || "Anonymous"}
                  </h5>
                  <p className="text-[14px] leding-6 text-textColor">
                    {dateFormat(review?.createdAt)}
                  </p>
                  <p className="text-para mt-3 font-medium text-[15px]">
                    {review?.reviewText || "No review text available."}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(review?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} color="#FEB60D" />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[16px] leading-6 text-textColor">
            No reviews yet.
          </p>
        )}
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

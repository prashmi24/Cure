import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText.trim()) {
        setLoading(false);
        return toast.error("Please provide a rating and feedback.");
      }

      const res = await fetch(`${BASE_URL}/doctor/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating, reviewText }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      setRating(0);
      setReviewText("");
      toast.success(result.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} aria-labelledby="feedback-form-title">
      <div>
        <h3
          id="feedback-form-title"
          className="text-headingColor text-[16px] leading-6 font-semibold mb-4"
        >
          How would you rate the overall experience?
        </h3>

        <div role="radiogroup" aria-label="Rate your experience">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                aria-pressed={index === rating}
                aria-label={`${index} star${index > 1 ? "s" : ""}`}
                className={`${
                  index <= (hover || rating)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="4"
          aria-label="Feedback text area"
          aria-invalid={!reviewText.trim() ? "true" : "false"}
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
      </div>

      <button type="submit" className="btn mt-4" disabled={loading}>
        {loading ? <FadeLoader size={10} color="#ffffff" /> : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;

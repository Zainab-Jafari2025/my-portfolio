import { useState } from "react";

function FeedbackWall() {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Ali",
      rating: 5,
      comment: "Amazing portfolio!",
    },
    {
      id: 2,
      name: "Sara",
      rating: 4,
      comment: "Very clean design.",
    },
  ]);

  const [sortOrder, setSortOrder] = useState("high");

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !feedbackData.name.trim() ||
      !feedbackData.comment.trim()
    )
      return;

    const newFeedback = {
      id: Date.now(),
      name: feedbackData.name,
      rating: Number(feedbackData.rating),
      comment: feedbackData.comment,
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setFeedbackData({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  const sortedFeedbacks = [...feedbacks].sort((a, b) =>
    sortOrder === "high"
      ? b.rating - a.rating
      : a.rating - b.rating
  );

  return (
    <section className="px-20 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Visitor Feedback
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl flex flex-col gap-5 mb-10"
      >
        <input
          type="text"
          name="name"
          value={feedbackData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-3 rounded-lg"
        />

        <select
          name="rating"
          value={feedbackData.rating}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        >
          <option value="1">⭐ 1</option>
          <option value="2">⭐ 2</option>
          <option value="3">⭐ 3</option>
          <option value="4">⭐ 4</option>
          <option value="5">⭐ 5</option>
        </select>

        <textarea
          rows="4"
          name="comment"
          value={feedbackData.comment}
          onChange={handleChange}
          placeholder="Your Comment"
          className="border p-3 rounded-lg"
        />

        <button className="bg-violet-500 text-white p-3 rounded-lg hover:bg-violet-700 duration-300">
          Submit Feedback
        </button>
      </form>

      {/* Sort */}
      <div className="mb-8">
        <button
          onClick={() => setSortOrder("high")}
          className="bg-green-500 text-white px-4 py-2 rounded mr-3"
        >
          Highest Rating
        </button>

        <button
          onClick={() => setSortOrder("low")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Lowest Rating
        </button>
      </div>

      {/* Feedback List */}
      <div className="space-y-5">
        {sortedFeedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="p-6 border rounded-2xl shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">
                {feedback.name}
              </h3>

              {feedback.rating === 5 && (
                <span className="bg-yellow-200 px-3 py-1 rounded-full">
                  🌟 Featured
                </span>
              )}
            </div>

            <div className="text-yellow-500 mt-3 text-lg">
              {"⭐".repeat(feedback.rating)}
            </div>

            <p className="mt-4 text-gray-600">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackWall;
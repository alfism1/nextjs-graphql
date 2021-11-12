import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../services"

function CommentsForm({ slug }) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: "",
  });

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name:
        window.localStorage.getItem("name") != null
          ? window.localStorage.getItem("name")
          : "",
      email:
        window.localStorage.getItem("email") != null
          ? window.localStorage.getItem("email")
          : "",
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };

    setFormData(initialFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;

    if (target.type === "checkbox") {
      setFormData({
        ...formData,
        [target.name]: target.checked,
      });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleCommentSubmission = () => {
    const comment = commentEl.current.value;
    const name = nameEl.current.value;
    const email = emailEl.current.value;
    const storeData = storeDataEl.current.checked;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then(res => {console.log(res)})
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="text-xl font-semibold border-b pb-6 mb-6">
        Comments Form
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onInputChange}
        />
        <input
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onInputChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comments"
          name="comment"
          onChange={onInputChange}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mb-4">All fields are required.</p>
      )}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            onChange={onInputChange}
            checked={formData.storeData}
          />{" "}
          <label
            className="text-gray-500 ml-2 cursor-pointer"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>
      <button
        type="button"
        onClick={handleCommentSubmission}
        className="text-white text-sm py-3 px-6 rounded-full bg-blue-500 transition duration-500 ease-out hover:bg-indigo-800"
      >
        Post Comment
      </button>
      {showSuccessMessage && (
        <div className="text-sm font-semibold mt-3 text-green-500">
          Comment submited and waiting for being reviewed
        </div>
      )}
    </div>
  );
}

export default CommentsForm;

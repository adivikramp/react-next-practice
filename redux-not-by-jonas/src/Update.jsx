import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((index) => index.id == id);
  const { name, email } = existingUser[0];
  const [formData, setFormData] = useState({
    name: name,
    email: email,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: formData.name,
        email: formData.email,
      })
    );
    navigate("/");
  }

  return (
    <section className="w-full h-auto my-4 flex flex-col items-center">
      <h2 className="text-center text-6xl font-bold">New Entry</h2>
      <div className="w-4/5 my-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full border-2 border-solid border-black rounded-2xl"
        >
          <h1 className="text-center text-xl font-bold text-teal-800 my-8">
            Create new entry
          </h1>
          <div className="flex justify-center w-11/12 my-2">
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="w-full rounded-lg p-4 border-2 border-gray-400 rounded-xl"
              value={formData.name}
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center w-11/12 my-2">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="w-full rounded-lg p-4 border-2  border-gray-400 rounded-xl"
              value={formData.email}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="my-8 mb-12 px-16 py-2 bg-green-600 text-white text-lg rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default Update;

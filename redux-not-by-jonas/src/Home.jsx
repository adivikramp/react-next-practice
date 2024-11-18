import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteUser({ id: id }));
  }

  return (
    <section className="w-full h-auto my-4 flex flex-col items-center">
      <h2 className="text-center text-6xl font-bold">CRUD using RTK</h2>
      <div className="w-4/5 flex flex-col my-8">
        <Link
          to="/create"
          className="self-end px-8 py-2 bg-teal-500 rounded-lg text-lg text-white duration-500 hover:scale-110"
        >
          Create +
        </Link>
        <table className="w-full table-auto border-2 my-4">
          <thead>
            <tr>
              <th className="border-2 p-4">ID</th>
              <th className="border-2 p-4">Name</th>
              <th className="border-2 p-4">Email</th>
              <th className="border-2 p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-2 m-4">
                <td className="border-2 text-center m-4">{user.id}</td>
                <td className="border-2 text-center m-4">{user.name}</td>
                <td className="border-2 text-center m-4">{user.email}</td>
                <td className="flex w-full justify-evenly m-4">
                  <Link
                    to={`/update/${user.id}`}
                    className="px-4 py-2 bg-blue-500 rounded-lg text-md mx-4 text-white duration-500 hover:scale-110"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-500 rounded-lg text-md mx-4 text-white duration-500 hover:scale-110"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;

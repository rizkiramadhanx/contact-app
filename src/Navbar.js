import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-gray-200 flex h-14 justify-between items-center p-5">
      <div className="text-xl font-semibold">Phone Contact</div>
      <ul className="flex font-normal">
        <Link
          to="/"
          className="mr-3 py-1 px-2 rounded-md hover:bg-gray-400 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/create"
          className="mr-3 py-1 px-2 rounded-md hover:bg-gray-400 hover:text-white"
        >
          New Contact
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;

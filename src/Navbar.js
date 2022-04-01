import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-gray-200 flex h-14 justify-between items-center p-5">
      <div className="text-xl font-semibold">Phone Contact</div>
      <ul className="flex font-normal">
        <NavLink
          exact
          activeClassName="bg-gray-400"
          to="/"
          className="mr-3 py-1 px-2 rounded-sm"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="bg-gray-400"
          to="/create"
          className="mr-3 py-1 px-2 rounded-sm"
        >
          New Contact
        </NavLink>
      </ul>
    </div>
  );
};
export default Navbar;

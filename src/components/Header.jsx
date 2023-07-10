import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/results?search_query=${query}`);
    }
  };

  return (
    <header className="flex justify-between items-center p-2 sticky mt-4">
      <Link to={""}>
        <div className="flex items-center">
          <img
            className="w-[40px]"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
            alt="Youtube"
          />
          <h1 className="text-white text-2xl ml-2">Youtube</h1>
        </div>
      </Link>
      <form
        className="flex items-center bg-white rounded"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/results?search_query=${query}`);
        }}
      >
        <input
          type="text"
          className="px-4 py-1 rounded text-black outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" className="mr-2">
          <FiSearch className="text-black" />
        </button>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Search } from "lucide-react"; // nice search icon

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // You can trigger API calls, filtering, etc. here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-xs bg-gray-100 rounded-full px-4 py-2 shadow-sm"
    >
      <Search className="text-gray-500 w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="bg-transparent flex-1 outline-none px-2 text-gray-700"
      />
      <button
        type="submit"
        className="text-sm cursor-pointer px-3 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go
      </button>
    </form>
  );
};

export default SearchBar;
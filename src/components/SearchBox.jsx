const SearchBox = () => {
  return (
    <div className="flex items-center h-16 bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for colleges and courses"
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 1 1 17 9.5 7.5 7.5 0 0 1 9.5 17z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;

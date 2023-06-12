const Search = () => {
  return (
    <div>
      <label
        htmlFor="hs-trailing-button-add-on-with-icon-and-button"
        className="sr-only">
        Label
      </label>
      <div className="relative flex rounded-md">
        {/* Search Input */}
        <input
          type="text"
          id="hs-trailing-button-add-on-with-icon-and-button"
          name="hs-trailing-button-add-on-with-icon-and-button"
          className="py-3 px-4 pl-11 block w-full text-white bg-neutral-800 border-gray-200 outline-none rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        {/* Search Button */}
        <button
          type="button"
          className="py-3 px-4 bg-indigo-500 hover:bg-indigo-600 transition-all inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold text-white focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
          <svg
            className="h-4 w-4 "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;

const Filter = () => {
  return (
    <div className="flex">
      <input
        type="checkbox"
        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        id="hs-default-checkbox"
      />
      <label
        htmlFor="hs-default-checkbox"
        className="text-sm text-gray-500 ml-3 dark:text-gray-400">
        Default checkbox
      </label>
    </div>
  );
};

export default Filter;

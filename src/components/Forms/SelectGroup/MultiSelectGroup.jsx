import React, { useState, useEffect, useRef } from 'react';

const MultiSelectGroup = ({
  label = "Subject",
  options = [
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
    { value: 'Canada', label: 'Canada' },
  ],
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle selecting/deselecting options
  const toggleOption = (value) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-4.5" ref={dropdownRef}>
      <label className="mb-2.5 block text-black dark:text-white">
        {label}
      </label>
      <div
        className="relative z-20 bg-transparent dark:bg-form-input"
        onClick={() => setIsDropdownOpen((prev) => !prev)} // Toggle dropdown
      >
        {/* Display selected options */}
        <div
          className={`relative z-20 w-full flex items-center justify-between rounded border border-stroke bg-transparent py-3 px-5 ${
            isDropdownOpen
              ? "focus:border-primary"
              : "cursor-pointer"
          } dark:border-form-strokedark dark:bg-form-input`}
        >
          <span
            className={
              selectedOptions.length
                ? "text-black dark:text-white"
                : "text-body dark:text-bodydark"
            }
          >
            {selectedOptions.length
              ? `Selected: ${selectedOptions.join(", ")}`
              : "Select your subject"}
          </span>
          {/* Arrow Icon */}
          <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                  fill=""
                ></path>
              </g>
            </svg>
          </span>
        </div>

        {/* Dropdown options */}
        {isDropdownOpen && (
          <div
            className="absolute left-0 right-0 z-30 mt-1 max-h-40 overflow-y-auto rounded border border-stroke bg-white dark:border-form-strokedark dark:bg-form-input"
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedOptions.includes(option.value)
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent dropdown from closing
                  toggleOption(option.value);
                }}
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-4 h-4"
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                  />
                  <span className="text-black dark:text-white">
                    {option.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectGroup;

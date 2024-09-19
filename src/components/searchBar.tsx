import { useState, useEffect } from "react"

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps)  {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce search input by 300ms
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId)
  }, [searchTerm, onSearch]);

  return (
    <div className="flex justify-center mt-8">
      <input 
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 p-3 rounded-lg w-full max-w-md"/>
    </div>
  )

}
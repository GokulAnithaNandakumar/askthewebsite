"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue) {
      const cleanUrl = inputValue.replace(/(^\w+:|^)\/\//, '');
      router.push(`/https:/${cleanUrl}`);
    }
  };

  return (
    <>
    <head>
    <title>Ask Wiki</title>
    <link rel="icon" type="image/png" href="/icon.png" />
    </head>
    
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl rounded-lg"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Enter the Wikipedia Page URL
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="https://en.wikipedia.org/wiki/Example"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

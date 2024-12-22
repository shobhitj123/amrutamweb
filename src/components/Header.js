import React from "react";

function Header() {
  return (
    <header className="bg-green-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Amrutam</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/find-doctors" className="hover:text-gray-300">Find Doctors</a></li>
            <li><a href="/about-us" className="hover:text-gray-300">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

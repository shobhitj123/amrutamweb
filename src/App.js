import React from "react";
import Header from "./components/Header";
import DoctorCard from "./components/DoctorCard";

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />
      <DoctorCard />
    </div>
  );
}

export default App;

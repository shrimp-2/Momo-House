import React from "react";

function Terms() {
  return (
    <div className="px-5 md:px-20 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to Everest Momo! By accessing our website, you agree to comply with and be bound by the following terms and conditions...
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Usage of this website is subject to the laws of your jurisdiction.</li>
        <li>Unauthorized use of this website may give rise to a claim for damages.</li>
        <li>All content on this website is for general information and use only.</li>
      </ul>
    </div>
  );
}

export default Terms;

import React from "react";

function Privacy() {
  return (
    <div className="px-5 md:px-20 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Everest Momo, we are committed to protecting your privacy. This policy explains how we use and protect any information you provide.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>We collect your data to provide a better experience and service.</li>
        <li>We do not sell or share your personal information with third parties.</li>
        <li>You have full control over your personal data and how it's used.</li>
      </ul>
    </div>
  );
}

export default Privacy;

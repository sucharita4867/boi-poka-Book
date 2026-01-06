import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        About Boi Poka 📚
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Boi Poka</strong> is a modern and user-friendly book application
        created for book lovers who enjoy discovering, exploring, and organizing
        books in one place. This app makes it easy to browse books, view
        detailed information, and build a personal reading experience.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        The main goal of Boi Poka is to encourage reading habits and provide a
        simple digital platform where users can find their favorite books
        without hassle. Whether you are a student, a casual reader, or a
        passionate book enthusiast, Boi Poka is designed for everyone.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        🚀 Key Features
      </h2>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Browse and explore a collection of books</li>
        <li>View detailed book information</li>
        <li>Clean, simple, and responsive UI</li>
        <li>User-friendly design for all devices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        🛠 Technologies Used
      </h2>

      <p className="text-gray-700">
        React.js, JavaScript, HTML, CSS, and modern frontend tools were used to
        build this application.
      </p>

      <p className="text-center mt-10 text-gray-500">
        Made with ❤️ by a passionate web developer
      </p>
    </div>
  );
};

export default About;

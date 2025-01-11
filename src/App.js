function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="p-8 bg-white rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
          Hello, MernVerse Viewers!
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Build amazing projects with MERN Stack 🚀
        </p>
      </div>
    </div>
  );
}

export default App;

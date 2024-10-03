import { Globe, Apple, Facebook } from "lucide-react"; // Import available icons

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 mx-4 bg-black bg-opacity-50 backdrop-blur-md rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">Get Started</h2>
        <p className="text-white mb-6">
          Already have an Account? <a href="#" className="text-green-400 hover:underline">Log In</a>
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300"
          />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition duration-300">
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-white text-center">Or Sign Up with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Globe className="w-10 h-10 cursor-pointer text-white" /> {/* For Google */}
            <Apple className="w-10 h-10 cursor-pointer text-white" /> {/* For Apple */}
            <Facebook className="w-10 h-10 cursor-pointer text-white" /> {/* For Facebook */}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Eye, Facebook, Twitter, Github, Mail } from 'lucide-react'
import loginlogo from './images/loginlogo.png'

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row">
      <div className="flex-1 relative overflow-hidden p-8">
        <div className="relative z-10">
          <div className="absolute top-20 left-10 bg-white rounded-lg shadow p-4 w-48">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mr-2">
                <Mail size={16} />
              </div>
              <span className="text-sm font-semibold">Full Stack Project</span>
            </div>
            <div className="text-2xl font-bold">862</div>
            <div className="text-xs text-green-500">+18% optimized</div>
          </div>
          <div className="absolute bottom-40 left-80 bg-white rounded-lg shadow p-4 w-48">
            <div className="text-sm font-semibold mb-2">Total Profit</div>
            <div className="flex items-center">
              <div className="text-2xl font-bold mr-2">2,856</div>
              <span className="text-xs text-green-500">+18.2%</span>
            </div>
          </div>
        </div>
        <img src={`${loginlogo}?height=400&width=300`} alt="Person with laptop" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex-1 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Welcome to MentroPick! 👋🏻</h2>
          <p className="text-gray-600 mb-8">Please sign-in to your account and begin your progress</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="john@example.com" />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              <button type="button" className="absolute right-3 top-8 text-gray-400">
                <Eye size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember Me</label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">LOGIN</button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            New on our platform? <a href="#" className="text-purple-600 hover:underline">Create an account</a>
          </p>
          <div className="flex items-center justify-center mt-6">
            <span className="text-gray-500 text-sm">or</span>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-facebook"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-twitter"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-github"><Github size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-google"><Mail size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
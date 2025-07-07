import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import RhinoImg from '../assets/rhino.png';
import Logo from '../assets/iocl-logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };
  const handleMouseLeave = () => setRipple({ ...ripple, active: false });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-4 p-2 bg-[#002060] shadow">
        <Link to="/" className="flex items-center space-x-3 group">
          <img src={Logo} alt="IOCL Logo" className="w-16 h-16" />
          <div>
            <h1 className="text-xl font-extrabold tracking-wide drop-shadow-md text-orange-400">RhinoPulse</h1>
            <p className="text-xs font-semibold tracking-wide drop-shadow-md text-white transition group-hover:text-orange-400">Powered by Indian Oil Corporation Limited</p>
          </div>
        </Link>
      </header>

      {/* Mouse tracking */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div
          className="max-w-6xl w-full flex flex-col md:flex-row bg-[#002060] shadow-lg rounded-2xl overflow-hidden border border-orange-400 relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Blur effect */}
          {ripple.active && (
            <span
              className="pointer-events-none absolute z-0 bg-[#f97316]"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 120,
                height: 120,
                borderRadius: '50%',
                filter: 'blur(32px)',
                opacity: 0.40,
                transform: 'translate(-50%, -50%)',
                transition: 'left 0.08s, top 0.08s',
              }}
            />
          )}
          {/* Left: Rhino Ji */}
          <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-8 relative z-10">
            <img
              src={RhinoImg}
              alt="Indian Oil Rhino"
              className="w-72 h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl"
            />
          </div>

          {/* Right: Login Form */}
          <div className="md:w-1/2 p-10 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Welcome Back</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg bg-white text-[#002060]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
                  className="transition-all w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-lg bg-white text-[#002060]"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin} 
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-400 transition"
              >
                Log In
              </button>
            </form>
            <p className="mt-6 text-sm text-center text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 font-semibold cursor-pointer hover:text-orange-400 hover:underline">Register</Link>
            </p>
          </div>
        </div>
      </main>
      {/* <h1 className="text-xl mb-4">Login</h1> */}
      {/* <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 w-full mb-2" /> */}
      {/* <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" /> */}
      {/* <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mb-2">Login</button> */}
      {/* <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600">Register</Link></p> */}
    </div>
  );
}
export default Login;
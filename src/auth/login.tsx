import React, { useState } from "react";
import InputField from "../components/inputfield";
import vector from "../assets/Vector.png";
import circleway from "../assets/CircleWavyCheck.png";
import shiled from "../assets/ShieldCheckered.png";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation or submit logic here
    console.log("Login form submitted", formData);
  };

  return (
    <div className="flex min-h-screen w-full md:w-[90%]">
      {/* Left Column */}
      <div className="regbg hidden md:flex md:w-2/5 bg-black flex-col justify-end relative overflow-hidden">
        <div className="p-8 text-white relative z-10">
          <div className="w-10 h-10 mb-5 text-black bg-[#FFDE02] rounded-full flex items-center justify-center font-extrabold text-lg">
            B.
          </div>
          <h2 className="text-2xl font-semibold leading-snug mb-6 max-w-xs">
            Unlock High Returns with Collateralized Equity Asset
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <img src={vector} alt="Collateralized" className="w-4 h-4" />
              <span>Collateralized</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={shiled} alt="Secured" className="w-4 h-4" />
              <span>Secured</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={circleway} alt="Licensed" className="w-4 h-4" />
              <span>Licensed & regulated</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sign in to Beam.
            </h1>
            <p className="text-gray-500 text-sm">
              Please sign in with the your assigned login details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              error={errors.email}
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              error={errors.password}
            />

            <div className="flex justify-end items-center text-sm">
              <a href="#" className="text-gray-600 underline-none  ">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

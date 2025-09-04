import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("staff");
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Staff Login</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login as Staff
        </button>
      </div>
    </div>
  );
}

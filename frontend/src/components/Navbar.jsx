import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="font-bold text-lg hover:text-yellow-400">
          🍴 Restaurant Kiosk
        </Link>
        {user?.role === "staff" && (
          <>
            <Link to="/dashboard" className="hover:text-yellow-400">
              Dashboard
            </Link>
            <Link to="/kiosk" className="hover:text-yellow-400">
              Kiosk
            </Link>
          </>
        )}
      </div>

      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
              Role: {user.role}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

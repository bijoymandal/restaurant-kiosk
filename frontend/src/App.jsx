import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Kiosk from "./pages/Kiosk";
import Dashboard from "./pages/Dashboard";

function PrivateRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/kiosk" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute role="staff">
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

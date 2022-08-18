import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import JobDetailModal from "../components/JobDetailModal";
import { useAuth } from "../auth/AuthContext"
import PageNotFound from "../pages/PageNotFound";
import { Navigate } from "react-router-dom";

function Router() {
    let location = useLocation();
    let state = location.state;
    console.log(location)
    console.log(state)
    let auth = useAuth();
    function RequireAuth({ children }) {
      let auth = useAuth();
      console.log("user status:", auth.user);
      if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
      return children;
    }

return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />          
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/job/:id" element={
              <RequireAuth>
                <JobDetailModal />
              </RequireAuth>
            }
          />
          </Route>
         </Routes> 
         {state?.backgroundLocation && (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
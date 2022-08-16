import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

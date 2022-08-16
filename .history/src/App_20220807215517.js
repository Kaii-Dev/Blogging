import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import SignInPage from "pages/SignInPage";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<NotFoundPage></Not>}></Route>

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

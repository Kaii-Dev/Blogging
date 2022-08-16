import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignUpPage></SignUpPage>}></Route>

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          <Route path="/sign-up"></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

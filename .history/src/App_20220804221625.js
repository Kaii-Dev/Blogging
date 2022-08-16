import { Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth-context";
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

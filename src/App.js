import { useSelector } from "react-redux";
import StudentRoutes from "./features/routes/StudentRoutes";
import TutorRoutes from "./features/routes/TutorRoutes";
import AdminRoutes from './features/routes/AdminRoutes'
import { useEffect, useState } from "react";

function App() {
  const { role } = useSelector((state) => state.auth);
  const [rolee, setRolee] = useState(role)
  useEffect(() => {
    setRolee(role)
  }, [role])
  return (
    <div className="App">
      {
        rolee === 'Student' ? <StudentRoutes /> : <TutorRoutes />
      }
    </div>
  );
}

export default App;

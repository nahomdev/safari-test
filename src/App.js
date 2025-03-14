import { useRoutes} from 'react-router'
import allRoutes  from "./routes/routes";
import { useAuth } from "./context/authContext";
 
function App() {
  const { isAuthenticated } = useAuth();  

  const route = useRoutes(
    allRoutes(isAuthenticated ),
  )

  return route
}

export default App;

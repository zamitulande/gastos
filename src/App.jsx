import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [presupuesto, setPresupuesto]= useState(0)
  const [isValedPresupuesto, setIsValidPresupuesto] = useState (false)
  return (
    <div>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValedPresupuesto={isValedPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </div>
  );
}

export default App;

import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Header from "./Components/Header";
import { useState } from "react";

function App() {
 
    const [bankBalance, setBankBalance] = useState(0)
   

    
    function deposit() {
        setBankBalance(bankBalance + 10)
}
function withdraw() {
        setBankBalance(bankBalance -10)
}
const theme = bankBalance < 0 ? 'red' : "green"
  return (
    <div className="App">
      <Header balanceProp={bankBalance}/>
      <Main withdrawProp={withdraw} depositProp={deposit} balanceProp={bankBalance} themeProp={theme} />
      <Footer/>
      
    </div>
  );
}
  
export default App

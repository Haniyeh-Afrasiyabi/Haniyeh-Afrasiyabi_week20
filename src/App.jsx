import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./components/signUp";


function App() {
  return (
    <>
      <SignUp />
      <ToastContainer />
    </>
  );
}

export default App;

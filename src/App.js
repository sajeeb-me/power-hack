import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <section className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </section>
  );
}

export default App;

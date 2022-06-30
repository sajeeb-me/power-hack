import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <section className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </section>
  );
}

export default App;

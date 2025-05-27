import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
function App() {
  return (
    <div className="min-h-screen grid grid-cols-1">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

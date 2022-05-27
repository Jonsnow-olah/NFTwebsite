import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div className="min-h-screen">            {/*This is going to be a div with a specific width*/}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App

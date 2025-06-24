import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainTitle from './components/MainTitle/MainTitle';
import Detail from "./components/Detail/Detail.jsx";
import Take from "./components/Take/Take.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainTitle />
        <Detail />
        <Take />
      </main>
    </>
  );
};

export default App;

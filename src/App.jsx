import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainTitle from './components/MainTitle/MainTitle';
import Detail from './components/Detail/Detail.jsx';
import Take from './components/Take/Take.jsx';
import Bookyour from './components/Bookyour/Bookyour.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<MainTitle />
				<Detail />
				<Take />
				<Bookyour />
			</main>
			<Footer />
		</>
	);
};

export default App;

import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Modern from "./components/modern/Modern"
import Visit from "./components/visit/Visit"
import Footer from "./components/footer/Footer"
import "./index.css"


const App = () => {	
	return (	
		<>	
			<Header />
			<Hero />
			<About />
			<Header />
			<Hero />	
			<About />		
			<Menu />		
			<Modern/>	
			<Menu />
			<Modern/>
			<Visit/>
			<Footer/>
			<Footer/>
		</>
	);
};

export default App;

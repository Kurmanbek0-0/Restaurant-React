import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Modern from "./components/modern/Modern"
import Visit from "./components/visit/Visit"
import Footer from "./components/footer/Footer"


const App = () => {	
	return (	
		<>	
			<Header />	
			<Hero />	
			<About />		
			<Menu />
			<Modern/>	
			<Visit/>
			<Footer/>	
		</>
	);
};

export default App;

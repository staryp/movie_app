import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

const movies = [
	{
		title:"leon",
		poster:"http://t2.gstatic.com/images?q=tbn:ANd9GcR1Fe-6xzjUTk16N13kXRRP2hCYBj4h-sfwrzFOiRmHIm0iaR0i"
	},
	{
		title:"leon2",
		poster:"http://image.cine21.com/resize/IMGDB/poster/2003/0327/large/114738_leon2[X230,330].jpg"
	}
]
class App extends Component {

	render() {
		var a;
		a  = movies.map( function ( movie , idx){
			return <Movie title = {movie.title} poster = {movie.poster} key={idx}/>
		})
		return(
			<div className="App">
				{a}
			</div>
		);
		
		return;
	}
}

export default App;

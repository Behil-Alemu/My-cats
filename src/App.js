import './App.css';
import Nav from './Nav';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import nori from './cat-pic/nori.JPG';
import werro from './cat-pic/werro.JPG';
import nibbles from './cat-pic/nibbles.png';

function App(props) {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav cats={props.cats} />
				<Routes cats={[ ...props.cats ]} />
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	cats: [
		{
			name: 'Werro',
			age: 5,
			src: werro,
			facts: [
				'Werro loves asking for food and not really eating it.'
			]
		},
		{
			name: 'Nori',
			age: 2,
			src: nori,
			facts: [ 'Nori is very shy but demands attention from her favorite human' ]
		},
		{
			name: 'Nibbles',
			age: .25,
			src: nibbles,
			facts: [ 'Nibbles is chaotic and runs into furnitures' ]
		}
	]
};

export default App;

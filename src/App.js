import './App.css';
import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
import duke from './doc-pic/duke.jpg'
import whiskey from './doc-pic/whiskey.jpg'
import perry from './doc-pic/perry.jpg'
import tubby from './doc-pic/tubby.jpg'

function App(props) {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav dogs={props.dogs}/>
				<Routes   dogs={[...props.dogs]}/>
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: 'Whiskey',
			age: 5,
			src: whiskey,
			facts: [
				'Whiskey loves eating popcorn.',
				'Whiskey is a terrible guard dog.',
				'Whiskey wants to cuddle with you!'
			]
		},
		{
			name: 'Duke',
			age: 3,
			src: duke,
			facts: [ 'Duke believes that ball is life.', 'Duke likes snow.', 'Duke enjoys pawing other dogs.' ]
		},
		{
			name: 'Perry',
			age: 4,
			src: perry,
			facts: [ 'Perry loves all humans.', 'Perry demolishes all snacks.', 'Perry hates the rain.' ]
		},
		{
			name: 'Tubby',
			age: 4,
			src: tubby,
			facts: [
				'Tubby is really stupid.',
				'Tubby does not like walks.',
				'Angelina used to hate Tubby, but claims not to anymore.'
			]
		}
	]
};

export default App;

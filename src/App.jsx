
import { EnvironmentCanvas } from "./components/canvas/EnvironmentCanvas";
import { Header } from "./components/Header";
function App() {
	return (
		<div className="relative">
			<Header className='hide'/>
			<div className="fixed flex flex-col h-full w-full">
				<EnvironmentCanvas />
			</div>
		</div>
	);
}

export default App;

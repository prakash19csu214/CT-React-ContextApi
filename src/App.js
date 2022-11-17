import "./App.css"
import {BrowserRouter} from "react-router-dom"
import CrudUser from "./Layouts/Main" 

function App() {
	return (
		<BrowserRouter>
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
					<i class="fa fa-solid fa-bars"></i>
					<a href="/home" className="text-white mx-2"><strong>CRUD</strong></a>
						
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
		</BrowserRouter>
	)
}

export default App

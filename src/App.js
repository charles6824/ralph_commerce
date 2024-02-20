import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import PreLoader from "./components/Preloader";
import Home from "./pages/Home";
import Error from "./pages/Error";


const App = () => {
	
	return (
		<Router>
			<main className="main-section">
				<Suspense fallback={<PreLoader />}>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="*" element={<Error />} />

					</Routes>
				</Suspense>
			</main>
		</Router>
	);
};

export default App;
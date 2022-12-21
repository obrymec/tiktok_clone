// Dependencies.
import {render, screen} from "@testing-library/react";
import App from "./views/main/app.jsx";

// Runs test renderer.
test ("renders learn react link", () => {
	// Creates app renderer.
	render (<App/>);
	// Expects the target element.
	expect (screen.getByText (/learn react/i)).toBeInTheDocument ();
});

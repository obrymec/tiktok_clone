// Reports web vital method definition.
const reportWebVitals = onPerfEntry => {
	// Checks some constraints.
	if (onPerfEntry && onPerfEntry instanceof Function) {
		// Web vitals importation.
		import ("web-vitals").then (({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
			getCLS (onPerfEntry);
			getFID (onPerfEntry);
			getFCP (onPerfEntry);
			getLCP (onPerfEntry);
			getTTFB (onPerfEntry);
		});
	}
};

// Exports web vitals method.
export default reportWebVitals;

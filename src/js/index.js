/**
 * @typedef {Object} SocketConfig
 * @property {string} url - WebSocket server URL
 * @property {number} port - WebSocket server port
 */

/**
 * @typedef {Object} EnvironmentConfig
 * @property {boolean} testing - Toggle for test/live data mode
 */

/**
 * @typedef {Object.<string, Object.<string, string[]>> & { id: string }} CreditsResponse
 * Represents the full structured data response from the server.
 */

/**
 * Environment flags (e.g. testing mode)
 * @type {EnvironmentConfig}
 */

/**
 * Retrieve a value from an object, ignoring key casing.
 * @template T
 * @param {T} obj - The object to search
 * @param {string} key - The key to find (case-insensitive)
 * @returns {*} The value found or undefined
 */
function getParameterCaseInsensitive(obj, key) {
	return obj[Object.keys(obj).find(k => k.toLowerCase() === key.toLowerCase())];
}

/**
 * Custom React hook to handle WebSocket connection and generate credit entries
 * @returns {{ entries: JSX.Element[], containerRef: React.RefObject<HTMLDivElement> }}
 */
function useCreditsData() {
	const [entries, setEntries] = React.useState([]);
	const containerRef = React.useRef(null);

	React.useEffect(() => {
		const socket = new WebSocket(`${socketConfig.url}:${socketConfig.port}`);

		socket.onopen = () => {
			socket.send(JSON.stringify({
				id: 'credits',
				request: environmentConfig.testing ? 'TestCredits' : 'GetCredits'
			}));
		};

		/**
		 * @param {MessageEvent} event
		 */
		socket.onmessage = (event) => {
			/** @type {CreditsResponse} */
			const response = JSON.parse(event.data);
			if (response.id !== 'credits') return;

			socket.close();
			const seen = new Set();
			const credits = [];

			// Intro Section
			credits.push(
				<img key="introImg" className="introImg" src="https://res.cloudinary.com/studio42-web-development/image/upload/v1739058435/Gaming/kav9svkuerviqk7rmloi.png" />,
				<div key="introText" className="introText">Thanks for watching!</div>
			);

			// Dynamic Rendering
			Object.entries(response).forEach(([section, sectionData]) => {
				if (typeof sectionData !== 'object') return;

				Object.entries(sectionData).forEach(([key, values]) => {
					if (!Array.isArray(values) || values.length === 0) return;

					const titleKey = `${section}-${key}`;
					credits.push(<div className="job" key={titleKey}>{`${section} - ${key}`}</div>);

					values.forEach((entry) => {
						const uniqueKey = `${titleKey}-${entry}`;
						if (!seen.has(uniqueKey)) {
							credits.push(<div className="name" key={uniqueKey}>{entry}</div>);
							seen.add(uniqueKey);
						}
					});
				});
			});

			// Outro Section
			credits.push(
				<div key="outroText" className="outroText">So long, and thanks for all the fish!</div>,
				<img key="outroImg" className="outroImg" src="https://res.cloudinary.com/studio42-web-development/image/upload/v1671603099/Gaming/daer0mimlj7u0ep5ftoe.jpg" />
			);

			setEntries(credits);

			// Animate the scrolling container
			setTimeout(() => {
				const el = containerRef.current;
				if (!el) return;

				const heightPercent = Math.ceil((el.offsetHeight / window.innerHeight) * -100) - 10;
				const duration = ((el.offsetHeight / window.innerHeight) * 100 + 100) * 60;

				el.animate([
					{ top: '110%' },
					{ top: `${heightPercent}%` }
				], {
					duration,
					iterations: 2
				});
			}, 100);
		};
	}, []);

	return { entries, containerRef };
}

/**
 * Main component that displays the credits
 * @returns {JSX.Element}
 */
function CreditsDisplay() {
	const { entries, containerRef } = useCreditsData();

	return (
		<div id="credits" ref={containerRef} style={{ position: 'absolute' }}>
			{entries}
		</div>
	);
}

// Mount the component into the DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<CreditsDisplay />);

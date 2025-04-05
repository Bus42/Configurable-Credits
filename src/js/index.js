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

/**
 * Custom React hook to retrieve and animate credits data via a WebSocket.
 *
 * This hook establishes a WebSocket connection using external configuration values
 * to request credits data. Upon receiving the data, it processes the response to generate
 * an array of JSX elements representing different sections of the credits (intro, dynamic
 * sections, and outro). It then updates the component state with these entries and triggers
 * a scrolling animation on the credits container. If an end action is enabled via configuration,
 * an additional WebSocket message is sent after the animation completes.
 *
 * External dependencies:
 * - socketConfig: Object containing WebSocket URL, port, and optional endAction details.
 * - environmentConfig: Object with a boolean `testing` flag for selecting test or live data.
 * - imageConfig: Object containing image configurations for intro and outro images.
 * - textConfig: Object containing style and text configurations.
 * - headingsConfig: Object containing visibility and icon settings for each credits section.
 *
 * @returns {{ entries: JSX.Element[], containerRef: React.RefObject<HTMLDivElement> }}
 *   An object containing:
 *   - `entries`: An array of JSX elements representing the dynamically generated credit entries.
 *   - `containerRef`: A React ref object pointing to the container div used for animating the credits.
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
		socket.onmessage = (event) => {
			const response = JSON.parse(event.data);
			if (response.id !== 'credits') return;

			socket.close();
			const seen = new Set();
			const credits = [];

			// Intro Section
			credits.push(
				<img key="introImg" src={imageConfig.introImage.src} style={imageConfig.introImage.style} alt={imageConfig.introImage.alt} hidden={!imageConfig.introImage.show} />,
				<h1 key="introText" style={textConfig.titleStyle}>{textConfig.introText}</h1>
			);

			Object.entries(response).forEach(([section, sectionData]) => {
				if (typeof sectionData !== 'object') return;
				const headingKey = section;
				if (headingsConfig[section].show) {
					credits.push(<div style={{
						display: 'flex',
						flexDirection: 'row',
						wrap: 'no-wrap',
						justifyContent: 'center',
						alignItems: 'center'
					}} ><i className={headingsConfig[section].icon} style={textConfig.headingIconStyle} >{" "}</i>{" "}<h2 style={textConfig.headingStyle} key={headingKey} >{section}</h2></div>);

					Object.entries(sectionData).forEach(([key, values]) => {
						if (!Array.isArray(values) || values.length === 0) return;

						const titleKey = `${section}-${key}`;
						// TODO: Wrap the following in an if/else to check headingsConfig[section][key].show
						credits.push(<h3 style={textConfig.roleStyle} key={titleKey}>{key}</h3>);

						values.forEach((entry) => {
							const uniqueKey = `${titleKey}-${entry}`;
							if (!seen.has(uniqueKey)) {
								credits.push(<p style={textConfig.nameStyle} key={uniqueKey}>{entry}</p>);
								seen.add(uniqueKey);
							}
						});
					});
				}
			});

			// Outro Section
			credits.push(
				<h2 key="outroText" style={textConfig.endTitleStyle} >{textConfig.outroText}</h2>,
				<img key="outroImg" src={imageConfig.outroImage.src} style={imageConfig.outroImage.style} alt={imageConfig.outroImage.alt} hidden={!imageConfig.outroImage.show} />
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
					iterations: 1
				});

				if (socketConfig.endAction.enabled) {
					// Trigger end action after animation completes
					setTimeout(() => {
						console.log("%cAnimation complete", "color: green; font-size: 20px; font-weight: bold;");
						// TODO: Send message to Streamer.bot server to trigger the action configured in the config.js file
						const socket = new WebSocket(`${socketConfig.url}:${socketConfig.port}`);
						socket.addEventListener('open', () => {
							socket.send(JSON.stringify({
								request: "DoAction",
								action: {
									id: socketConfig.endAction.id,
									name: socketConfig.endAction.name,
								},
								args: {
									parameter1: socketConfig.endAction.data.parameter1,
									parameter2: socketConfig.endAction.data.parameter2,
								},
								id: "endAction"
							}));
						});
						socket.addEventListener("message", (event) => {
							console.table("Message from server: ", event.data);
						});
						socket.addEventListener("close", () => {
							console.log("Socket closed");
						});
						socket.addEventListener("error", (event) => {
							console.error("Socket error: ", event);
						});
					}, duration);
					socket.close();
				} else {
					// Log completion if no end action is configured.
					setTimeout(() => {
						console.log("%cAnimation complete", "color: green; font-size: 20px; font-weight: bold;");
					}, duration);
				}
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
		<div id="credits" style={textConfig.containerStyle} ref={containerRef}>
			{entries}
		</div>
	);
}

// Mount the component into the DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<CreditsDisplay />);

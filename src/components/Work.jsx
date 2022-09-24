import { useState, useEffect } from "react";

function Work() {
	const [Minutes, setMinutes] = useState(25);
	const [Seconds, setSeconds] = useState(0);
	const [message, setMessage] = useState(false);
	const [click, setClick] = useState(false);

	let minutes = Minutes < 10 ? `0${Minutes}` : Minutes;
	let seconds = Seconds < 10 ? `0${Seconds}` : Seconds;

	function handleClick() {
		setClick((click) => !click);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			clearInterval(interval);
			if (click) {
				if (Seconds === 0) {
					if (Minutes !== 0) {
						setSeconds(59);
						setMinutes((minutes) => minutes - 1);
					} else {
						let minutes = message ? 24 : 4;
						let seconds = 59;

						setMessage(!message);
						setSeconds(seconds);
						setMinutes(minutes);
					}
				} else {
					setSeconds((seconds) => seconds - 1);
				}
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [Minutes, Seconds, click, message]);

	function handleReset() {
		setMinutes(25);
		setSeconds(0);
	}

	return (
		<div className="md:py-10 py-5 sm:px-4 px-2 h-full max-w-xl mx-auto flex flex-col items-center justify-center w-full">
			<header className="md:text-6xl text-4xl text-center md:mt-10 font-black capitalize text-indigo-700 mb-10">
				{!message ? "Pomodro Timer" : "break time"}
			</header>
			{message && (
				<h1 className="md:text-5xl font-black text-gray-600 tracking-wider text-center mt-3">
					Break Time, take a short break and get back..
				</h1>
			)}

			<p className="flex md:flex-row flex-col gap-3  items-center text-gray-600 font-black">
				<span className="md:h-52 h-40 md:w-52 w-40 md:text-9xl text-4xl  rounded-xl bg-gray-900  drop-shadow-md p-4 inline-flex items-center justify-center">
					{minutes}
				</span>
				<span className="flex-none inline-flex text-6xl md:rotate-0 rotate-90">
					:
				</span>
				<span className="md:h-52 h-40 md:w-52 w-40 md:text-9xl text-4xl  rounded-xl bg-gray-900  drop-shadow-md p-4 inline-flex items-center justify-center">
					{seconds}
				</span>
			</p>

			{!message && (
				<div className="mt-10 flex items-center justify-center space-x-4">
					<button
						className="w-full drop-shadow bg-gray-900 hover:bg-indigo-900 rounded-md hover:text-indigo-400 transition-colors duration-200 ease-linear group py-2 px-4 font-medium text-indigo-600"
						onClick={handleClick}>
						{click ? "stop" : "start"}
					</button>
					<button
						className="w-full drop-shadow bg-gray-900 hover:bg-indigo-900 rounded-md hover:text-indigo-400 transition-colors duration-200 ease-linear group py-2 px-4 font-medium text-indigo-600"
						onClick={handleReset}>
						reset
					</button>
				</div>
			)}
		</div>
	);
}

export default Work;

/* eslint-disable react/prop-types */
function Button({ children, event }) {
	return (
		<button
			onClick={event}
			type="submit"
			className="w-full text-white bg-primaryForm-600 hover:bg-primaryForm-700 focus:ring-4 focus:outline-none focus:ring-primaryForm-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primaryForm-600 dark:hover:bg-primaryForm-700 dark:focus:ring-primaryForm-800 my-5"
		>
			{children}
		</button>
	);
}

export default Button;

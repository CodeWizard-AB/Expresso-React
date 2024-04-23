/* eslint-disable react/prop-types */
function Label({ children, id }) {
	return (
		<label
			htmlFor={id}
			className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		>
			{children}
		</label>
	);
}

export default Label;

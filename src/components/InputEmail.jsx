/* eslint-disable react/prop-types */
import { IoMailUnreadOutline } from "react-icons/io5";
import Label from "./InputLabel";

function InputEmail({ id, onChange }) {
	return (
		<div className="label-icon">
			<IoMailUnreadOutline />
			<Label id={id}> Your email </Label>
			<input
				autoComplete="on"
				type="email"
				name={id}
				id={id}
				className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-9"
				placeholder="name@company.com"
				required={true}
				onChange={onChange}
			/>
		</div>
	);
}

export default InputEmail;

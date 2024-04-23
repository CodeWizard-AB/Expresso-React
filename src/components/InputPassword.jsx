/* eslint-disable react/prop-types */
import { MdLockOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";

import Label from "./InputLabel";

function InputPassword({ id, label, onChange }) {
	const [show, setShow] = useState(false);
	return (
		<div className="label-icon last:*:absolute last:*:right-3 last:*:bottom-3">
			<MdLockOutline />
			<Label id={id}>{label}</Label>
			<input
				autoComplete="on"
				type={show ? "text" : "password"}
				name={id}
				id={id}
				placeholder="••••••••"
				className="pl-9 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required={true}
				onChange={onChange}
			/>
			<button onClick={setShow.bind(show, !show)}>
				{show ? <FaRegEye /> : <FaRegEyeSlash />}
			</button>
		</div>
	);
}

export default InputPassword;

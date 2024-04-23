/* eslint-disable react/prop-types */
import { MdErrorOutline } from "react-icons/md";

function ErrorMessage({ error }) {
	return (
		<div className="text-red-500 text-sm flex gap-1 items-center mt-2 mb-3">
			{error && (
				<>
					<MdErrorOutline />
					{error}
				</>
			)}
		</div>
	);
}

export default ErrorMessage;

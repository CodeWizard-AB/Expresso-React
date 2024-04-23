/* eslint-disable react/prop-types */
function Label({ context, value }) {
	return (
		<div
			className={`flex flex-col gap-4 ${
				context === "photo" && "md:col-span-2"
			}`}
		>
			<label htmlFor={context} className="text-xl font-semibold tracking-wide">
				{context[0].toUpperCase() + context.slice(1)}
			</label>
			<input
				type="text"
				name={context}
				id={context}
				placeholder={`Enter coffee ${context}`}
				className="py-3 px-4 outline-none rounded-md placeholder:tracking-wide"
				defaultValue={value}
				required
			/>
		</div>
	);
}

export default Label;

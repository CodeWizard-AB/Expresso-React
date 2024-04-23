/* eslint-disable react/prop-types */
function SectionTitle({ subTitle, mainTitle }) {
	return (
		<div className="flex flex-col items-center justify-center mt-28 mb-8">
			<p className="text-xl">{subTitle}</p>
			<p className="font-rancho text-5xl md:text-[55px]">{mainTitle}</p>
		</div>
	);
}

export default SectionTitle;

import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className="hero bg-[url(https://i.postimg.cc/xdbh7yGy/3.png)] banner-height">
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-rancho">
						Would you like a Cup of Delicious Coffee?
					</h1>
					<p className="mb-5">
						{`It's coffee time - Sip & Savor - Relaxation in every sip! Get the
						nostalgia back!! Your companion of every moment!!! Enjoy the
						beautiful moments and make them memorable.`}
					</p>
					<Link to="/add-coffee">
						<button className="bg-[#e3b577] font-rancho text-font1 px-6 py-3 text-2xl">
							Learn More
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Banner;

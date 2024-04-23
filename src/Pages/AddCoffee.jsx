import Label from "../components/Label";
import BackHome from "../components/BackHome";
import { coffee_details } from "../constant";
import Swal from "sweetalert2";

function AddCoffee() {
	const handleAddCoffee = function (e) {
		e.preventDefault();
		const newCoffee = {};
		[...e.target.children].slice(0, -1).forEach((item) => {
			newCoffee[item.lastChild.getAttribute("id")] = item.lastChild.value;
			item.lastChild.value = "";
		});
		fetch("http://localhost:5000/coffees", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(newCoffee),
		}).then(() => {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your work has been saved",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	return (
		<section className="bg-[url(images/more/11.png)] bg-center bg-cover px-4 md:px-16 lg:p-0">
			<div className="max-w-screen-xl mx-auto mb-28">
				<BackHome />
				<div className="bg-new py-16 md:px-16 lg:px-28 px-4 rounded-md">
					<div className="text-center max-w-screen-md mx-auto">
						<h2 className="font-rancho text-5xl text-font1">Add New Coffee</h2>
						<p className="text-lg my-8">
							Step into our virtual coffee laboratory, where you are invited to
							unleash your inner barista and concoct your own unique blends,
							roasts, and flavors, sharing your coffee artistry with a vibrant
							community of fellow enthusiasts.
						</p>
					</div>
					<form
						className="grid grid-cols-1 md:grid-cols-2 gap-6 md:last:*:col-span-2"
						onSubmit={handleAddCoffee}
					>
						{coffee_details.map((content, i) => (
							<Label context={content} key={i} />
						))}
						<button className=",md:col-span-2 font-rancho text-2xl text-font2 border-2 border-font2 py-3 bg-button rounded-lg">
							Add Coffee
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default AddCoffee;

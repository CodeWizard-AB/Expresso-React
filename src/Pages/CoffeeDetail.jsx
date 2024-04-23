import { useLoaderData } from "react-router-dom";
import Label from "../components/Label";
import { coffee_details } from "../constant";
import BackHome from "../components/BackHome";
import Swal from "sweetalert2";

function CoffeeDetail() {
	const coffee = useLoaderData();
	// const [coffee, setCoffe]
	const handleUpdateCoffee = function (id, e) {
		e.preventDefault();
		const updatedCoffee = {};
		[...e.target.children].slice(0, -1).forEach((item) => {
			updatedCoffee[item.lastChild.getAttribute("id")] = item.lastChild.value;
		});
		fetch(`http://localhost:5000/coffees/${id}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(updatedCoffee),
		}).then(() => {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your changes have been updated",
				showConfirmButton: false,
				timer: 1500,
			});
		});
	};

	return (
		<div className="max-w-screen-xl mx-auto mb-20 px-4 md:p-16 lg:p-0">
			<BackHome />
			<div className="'bg-new py-16 md:px-16 lg:px-28 bg-new rounded-md">
				<figure>
					<img src={coffee.photo} alt={coffee.name} className="mx-auto mb-4" />
				</figure>
				<form
					className="grid grid-cols-1 px-4 md:p-0 md:grid-cols-2 gap-6 md:last:*:col-span-2"
					onSubmit={handleUpdateCoffee.bind(null, coffee._id)}
				>
					{coffee_details.map((content, i) => (
						<Label context={content} key={i} value={coffee?.[content]} />
					))}
					<button className="md:col-span-2 font-rancho text-2xl text-font2 border-2 border-font2 py-3 bg-button rounded-lg">
						Update Coffee
					</button>
				</form>
			</div>
		</div>
	);
}

export default CoffeeDetail;

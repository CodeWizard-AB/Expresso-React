import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Home() {
	const [coffees, setCoffees] = useState(useLoaderData());
	const handleDelete = function (id) {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				// fetch(`http://localhost:5000/coffees/${id}`, {
				// 	method: "DELETE",
				// }).then(() => {
				// 	setCoffees(coffees.filter((coffee) => coffee._id !== id));
				// 	Swal.fire({
				// 		title: "Deleted!",
				// 		text: "Your coffee has been deleted.",
				// 		icon: "success",
				// 	});
				// });

				axios.delete(`http://localhost:5000/coffees/${id}`).then(() => {
					setCoffees(coffees.filter((coffee) => coffee._id !== id));
					Swal.fire({
						title: "Deleted!",
						text: "Your coffee has been deleted.",
						icon: "success",
					});
				});
			}
		});
	};
	return (
		<>
			<Banner />
			<main className="mb-28">
				<section className="bg-[url(https://i.postimg.cc/28XhvX88/1.png)] bg-cover lg:px-44 md:px-20 px-4 min-h-screen">
					<SectionTitle
						subTitle="--- Sip & Savor ---"
						mainTitle="Our Popular Products"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{coffees.map((coffee) => (
							<CoffeeCard
								key={coffee._id}
								coffee={coffee}
								handleDelete={handleDelete}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
}

export default Home;

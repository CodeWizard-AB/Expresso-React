/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CoffeeCard({ coffee, handleDelete }) {
	const navigate = useNavigate();

	return (
		<figure className="bg-new/70 p-8 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center rounded-lg justify-items-center">
			<img src={coffee.photo} alt={coffee.name} className="col-span-2 lg:col-span-1" />
			<figcaption className="text-xl space-y-2 ml-6 md:m-0">
				<p>
					<strong>Name:</strong> <span>{coffee.name}</span>
				</p>
				<p>
					<strong>Category:</strong> <span>{coffee.category}</span>
				</p>
				<p>
					<strong>Qunatity:</strong> <span>{coffee.quantity}</span>
				</p>
			</figcaption>
			<div className="flex flex-col text-xl *:rounded-md text-white *:p-3 gap-2 last:*:bg-red-500 even:*:bg-[#3c393b] first:*:bg-[#d2b48c]">
				<button>
					<FaEye />
				</button>

				<button onClick={() => navigate(`/coffee/${coffee._id}`)}>
					<MdEdit />
				</button>

				<button onClick={handleDelete.bind(null, coffee._id)}>
					<MdDelete />
				</button>
			</div>
		</figure>
	);
}

export default CoffeeCard;

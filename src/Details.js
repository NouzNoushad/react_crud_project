import { useParams, useNavigate, Link } from "react-router-dom";
import UseFetch from "./UseFetch";

const Details = () => {

	const navigate = useNavigate();
	const { id } = useParams();
	const { users:user, isLoading, error } = UseFetch('http://localhost:8000/data/' + id);

	const handleDelete = () => {
		fetch('http://localhost:8000/data/' + id, {
			method: 'DELETE',
		}).then(() => {
			console.log('User has been deleted from the list');
			navigate('/');
		})
	}

	const handleEdit = () => {
		navigate(`/edit/${id}`);
	}

	return ( 
		<div className="user-details">
			{isLoading && <p>Loading ...</p>}
			{error && <p>{ error }</p>}
			{user && (
				<div className="container">
					<div className="user-container">
						<h4>{user.name}</h4>
						<div className="sub-details">
							<div>
								<p>Profession: </p>
								<b>{user.profession}</b>
							</div>
							<div>
								<p>Email: </p>
								<b>{user.email}</b>
							</div>
							<div>
								<p>Phone: </p>
								<b>{user.phone}</b>
							</div>
							<div>
								<p>Address: </p>
								<b>{user.address}</b>
							</div>
						</div>
						<div className="details-button">
							<button className="delete" onClick={handleDelete}>Delete</button>
							<button className="edit" onClick={handleEdit}>Edit</button>
						</div>
						
						</div>
				</div>
				
			)}
		</div>
	 );
}
 
export default Details;
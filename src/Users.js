import { Link } from 'react-router-dom';

const Users = ({ users }) => {
	return ( 
		
			<div className="hero-container">
			{
				users.map((user) => (
					<Link to={"/details/" + user.id}>
					<div className="hero-users" key={user.id}>
						<h4>{user.name}</h4>
						<h5>{user.email}</h5>
						</div>
					</Link>
				))
				}
				</div>
	 );
}
 
export default Users;
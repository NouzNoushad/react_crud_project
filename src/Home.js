import UseFetch from "./UseFetch";
import Users from "./Users";

const Home = () => {

	const { users, isLoading, error } = UseFetch('http://localhost:8000/data');

	return ( 
		<div className="hero-home">
			<div className="container">
				<h2>Users List</h2>
				{
					error && <p>{error }</p>
				}
				{
					isLoading && <p>Loading ...</p>
				}
				
               {
					users && <Users users={users } />
				}
			</div>											
		</div>
	 );
}
 
export default Home;
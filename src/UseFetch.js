import { useEffect, useState } from "react";

const UseFetch = (url) => {

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => { 

		fetch(url)
			.then(res => {
				if (!res.ok) {
					setIsLoading(false);
					throw Error('could not fetch users data');
				}
				return res.json();
			})
			.then(data => {
				console.log(data);
				setUsers(data);
				setIsLoading(false);
				setError('');
			}).catch(err => {
				console.log(err.message);
				setError(err.message);
			})
	}, [url]);

	return {users, isLoading, error};
}
 
export default UseFetch;
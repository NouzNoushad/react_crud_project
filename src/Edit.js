import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";


const Edit = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { users: user, isLoading, error } = UseFetch('http://localhost:8000/data/' + id);

	
	var [name, setName] = useState('');
	var [profession, setProfession] = useState('');
	var [email, setEmail] = useState('');
	var [phone, setPhone] = useState('');
	var [address, setAddress] = useState('');

	useEffect(() => {
		setName(user.name);
		setProfession(user.profession);
		setEmail(user.email);
		setPhone(user.phone);
		setAddress(user.address);
	},[user]);

	const editUser = { name, profession, email, phone, address };

	const handleFormSubmission = (e) => {
		e.preventDefault();

		fetch('http://localhost:8000/data/' + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editUser),
		}).then(() => {
			console.log('User data has edited Successfully');
			setName('');
			setPhone('');
			setProfession('');
			setEmail('');
			setAddress('');

			navigate('/');
		})

	}
	
	return ( 
		<div className="hero-create">
			<div className="container">
				{
					
					user && <form onSubmit={handleFormSubmission}>
					<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } />
					<input type="text" placeholder="Profession" value={profession} onChange={ (e) => setProfession(e.target.value)} />
					<input type="text" placeholder="Phone" value={phone} onChange={ (e) => setPhone(e.target.value)}/>
					<input type="email" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
					<textarea name="" placeholder="Address" value={address}
					onChange={ (e) => setAddress(e.target.value)}></textarea>
					<button>Submit</button>
				</form>
				}
				
			</div>
		</div>
	 );
}
 
export default Edit;
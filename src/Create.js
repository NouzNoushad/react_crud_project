import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

	const [name, setName] = useState('');
	const [profession, setProfession] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const navigate = useNavigate();

	const userData = { name, profession, email, phone, address };

	const handleFormSubmission = (e) => {
		e.preventDefault();

		fetch('http://localhost:8000/data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData)
		}).then(() => {
			console.log('User data has saved Successfully');
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
				<form onSubmit={handleFormSubmission}>
					<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } />
					<input type="text" placeholder="Profession" value={profession} onChange={ (e) => setProfession(e.target.value)} />
					<input type="text" placeholder="Phone" value={phone} onChange={ (e) => setPhone(e.target.value)}/>
					<input type="email" placeholder="Email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
					<textarea name="" placeholder="Address" value={address}
					onChange={ (e) => setAddress(e.target.value)}></textarea>
					<button>Submit</button>
				</form>
			</div>
		</div>
	 );
}
 
export default Create;
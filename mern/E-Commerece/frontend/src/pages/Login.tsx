import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	const [gender, setGender] = useState<string>("");
	const [date, setDate] = useState<string>("");
	return (
		<div className="loginPage">
			<main>
				<h2 className="heading">Login</h2>
				<div>
					<label htmlFor="gender">Gender</label>
					<select
						required
						name="gender"
						id="gender"
						defaultValue={gender}
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="">Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div>
					<label htmlFor="date">Date of birth</label>
					<input
						id="date"
						name="date"
						type="date"
						value={date}
						onChange={(e) => {
							setDate(e.target.value);
							console.log(date);
						}}
					/>
				</div>
				<div>
					<p>Already Signed In Once</p>
					<button>
						<FcGoogle /> <span>Sign in with Google</span>
					</button>
				</div>
			</main>
		</div>
	);
};

export default Login;

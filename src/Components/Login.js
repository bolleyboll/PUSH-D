import React, { useState } from 'react'
import 'animate.css';
import axios from 'axios';
import base_url from '../api/bootapi';
import Alert from './Alert';
import PatientNavbar from './PatientNavbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default function Login() {
	const [loginData, setLoginData] = useState({});
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

	};

	const handleForm = (e) => {
		console.log(loginData);
		postDataToServer(loginData);
		e.preventDefault();
	}
	const [err, setErr] = useState("");
	const postDataToServer = (data) => {
		axios.post(`${base_url}/${data.role}/signin`, data).then(
			(response) => {
				console.log(response.data)
				console.log("success!")
				if (response.data === "Username or Password don't match!") {
					setErr("Invalid Id/Password");
					showAlert("Invalid Id/Password", "Success");
				} else if (data.role === "patient") {
					{ window.open("/patDash", "_self"); }
				} else if (data.role === "doctor") {
					{ window.open("/docDash", "_self"); }
				} else if (data.role === "spec") {
					{ window.open("/spDash", "_self"); }
				} else if (data.role === "admin") {
					{ window.open("/adminDash", "_self"); }
				}
			}, (error) => {
				console.log(error)
				console.log("error!")
			}
		);
	}
	return (
		<>
			<img className='rounded float-start' src="home_active_minds.png" style={{ width: '60%', height: '500px' }} />
			<form onSubmit={handleForm} className="rounded float-end my-4 mx-5 animate__animated animate__fadeInUp shadow p-3 mb-5 rounded" style={{ backgroundColor: '#89C7E7' }}>
				<div className="mx-5">
					<label htmlFor="exampleInputEmail1" className="form-label"></label>
					<input id="username" onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }} type="text" placeholder='Enter Username' className="form-control shadow rounded" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mx-5">
					<label htmlFor="exampleInputPassword1" className="form-label"></label>
					<input id="password" onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} type="password" className="form-control shadow rounded" placeholder='Enter Password' id="exampleInputPassword1" />
				</div>
				<div className="mx-5">
					<label htmlFor="exampleInputPassword1" className="form-label"></label>
					<select id="role" onChange={(e) => { setLoginData({ ...loginData, role: e.target.value }) }} className="form-control shadow rounded" aria-label="Default select example">
						<option defaultValue="Select role">Select role</option>
						<option value="patient">Patient</option>
						<option value="doctor">Doctor</option>
						<option value="spec">Specialist</option>
						<option value="admin">Admin</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary mx-5 my-3 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Submit</button>
				{/* <div style={{color:'red'}} className="text-center">{err}</div> */}
				<Alert alert={alert} />
			</form>
		</>
	)
}

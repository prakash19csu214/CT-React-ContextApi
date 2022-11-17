import React, { useContext, useState } from "react"
import { PutUser, PostUser } from "../../Layouts/Main";

const Form = ({userData={}}) => {

	// consuming context api's
	const postUser = useContext(PostUser);
	const updateUser = useContext(PutUser);



	const [user, setUser] = useState({
		avatar: userData.avatar ?? "",
		fname: userData.fname ?? "",
		lname: userData.lname ?? "",
		email: userData.email ?? "",
	})

	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const submitUser = e => {
		e.preventDefault()
		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}

	return (
		<form onSubmit={submitUser} className='row mx-5'>
			<input
				type='text'
				name='avatar'
				value={user.avatar}
				placeholder='Avatar'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='fname'
				value={user.fname}
				placeholder='First Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='lname'
				value={user.lname}
				placeholder='Last Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Create User" : "Update User"}`}
			/>
		</form>
	)
}

export default Form

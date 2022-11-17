import React, { useContext } from "react"
import Form from "../Form"
import { DeleteUser } from "../../Layouts/Main";

const Table = ({users}) => {

	// consuming context api's
	const deleteUser = useContext(DeleteUser);

	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ user }) => {
		const logo = user.avatar

		return (
			<>
				<div className='row container'>
					<div>{user.id}</div>
					<img src={logo} alt="image" className="avatar"></img>
					<div>{user.fname}</div>
					<div>{user.lname}</div>
					<div>{user.email}</div>
					<div className='buttons mx-2'>
						<button onClick={() => showUpdateUser(user.id)} className="btn bg-white border border-primary text-primary rdd-1">Edit</button>
						<button onClick={() => deleteUser(user.id)} className="btn bg-white border border-danger text-danger">Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user}/>
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles container'>
				<div>ID</div>
				<div>Avatar</div>
				<div>First Name</div>
				<div className="mx-5">Last Name</div>
				<div className="mx-3">Email</div>
				<div className="mx-5">Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	)
}

export default Table

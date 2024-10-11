import {useDispatch} from "react-redux"
import {logout} from '../redux/userSlice'
import toast from 'react-hot-toast'

export default function Logout({isModelOpen,setIsModelOpen}){
	const dispatch = useDispatch()

	const handleLogout = () =>{
		dispatch(logout())
		setIsModelOpen(false)
		toast.success("Logout Successful")
	}

	return(
		<div>
			<h2 className="text-2xl font-bold mb-4">Logout</h2>
			<div className="block text-gray-700 mb-4 ">Are you sure you want to Logout?</div>
				<div className="flex justify-around">
					<button className="w-1/3 border-2 rounded" onClick={()=>setIsModelOpen(false)}>No</button>
					<button className="w-1/3 bg-red-600 p-2 rounded" onClick={handleLogout}>Logout</button>
				</div>
		</div>
	)
}
import {useState} from 'react'

export default function ChangeAddress({setIsModelOpen, setAddress}){
	const [newAddress, setNewAddress] = useState("")	
	const handleChange = ()=>{
		setAddress(newAddress)
		setIsModelOpen(false)
	}	

	return (
		<div>
			<input type='text' placeholder="Enter new address" className="border p-2 w-full mb-4" onChange={(e)=>setNewAddress(e.target.value)}/>
			<div className="flex justify-end">
				<button onClick={()=>setIsModelOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">Cancel</button>
				<button onClick={()=>handleChange()} className="bg-blue-500 text-white py-2 px-4 rounded">Save Address</button>
			</div>
		</div>
	)
}
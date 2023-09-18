import React from 'react'

function User() {
	return (
		<div className="flex items-center ">
			<div>
				<img className="inline-block h-9 w-9 rounded-full" src="https://bazametrov.ru/uploads/new-agency/default_logo_user.jpg" alt="Senin Profil sekilin"
				/>
			</div>
			<div className="ml-3">
				<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">David Mammedov</p>
				<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Front End Telebe</p>
			</div>
		</div>
	)
}

export default User
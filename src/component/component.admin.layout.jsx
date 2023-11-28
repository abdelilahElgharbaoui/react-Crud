import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


export function AdminLayout(){

    return(
        <>
            <nav className="bg-light p-4">
  <div className="container mx-auto">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold">
        <NavLink to="/" className="text-gray-800">Home</NavLink>
      </div>
      <div className="flex space-x-4">
        <NavLink to="/products" className="text-gray-800">Produits</NavLink>
        <NavLink to="/profile" className="text-gray-800">Profile</NavLink>
        <NavLink to="/connexion" className="text-red-600 hover:text-red-900 ">      <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
</NavLink>
      </div>
    </div>
  </div>
</nav>

            <Outlet/>
        </>

    )
}
import {useState} from "react"
import {addProduct} from "../service/product.service";
import { useNavigate } from "react-router-dom";
export function ProductAddForm(){

    const [name,setName]=useState("");
    const [price,setPrice] = useState(0);
    const navigate = useNavigate();

    function handleForm(event){
    event.preventDefault();
    const p={"name":name,"price":price}
    addProduct(p);    
    navigate('/products');
    }
    return(
        <>
       <form className="mx-auto max-w-md" onSubmit={(e) => handleForm(e)}>
  <div className="mb-4">
    <label htmlFor="fname" className="block text-sm font-semibold text-gray-600">Nom:</label>
    <input
      type="text"
      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
      id="fname"
      name="fname"
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="prix" className="block text-sm font-semibold text-gray-600">Prix:</label>
    <input
      type="text"
      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
      id="prix"
      name="prix"
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <button
    type="submit"
    className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Enregistrer
  </button>
</form>


        </>
    )
}
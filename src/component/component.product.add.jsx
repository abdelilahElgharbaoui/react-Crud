import {useEffect, useState} from "react"
import {addProduct} from "../service/product.service";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../service/category.service";
export function ProductAddForm(){

    const [name,setName]=useState("");
    const [price,setPrice] = useState(0);
    const [selectedCat, setSelectedCat] = useState(0);
    const navigate = useNavigate();
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
      
        fetchCategories();
    },[]
    );

    async function fetchCategories(){
      const res = await getAllCategories();
      setCategories(res.data);
    }

    async function handleForm(event){
    event.preventDefault();
    console.log("hello:"+categories[selectedCat].name);
    const p={"name":name,"price":price,"category":categories[selectedCat]};
    console.log(p);
    await addProduct(p);    
    navigate('/products');
    }
    return (
      <>
        <form className="mx-auto max-w-md" onSubmit={(e) => handleForm(e)}>
          <div className="mb-4">
            <label
              htmlFor="fname"
              className="block text-sm font-semibold text-gray-600"
            >
              Nom:
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
              id="fname"
              name="fname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="prix"
              className="block text-sm font-semibold text-gray-600"
            >
              Prix:
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
              id="prix"
              name="prix"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Category"
              className="block text-sm font-semibold text-gray-600"
            >
              Categories:
            </label>
            <select
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
              id="Category"
              name="Category"
              onChange={(e)=> setSelectedCat(e.target.value)}
            >
              {categories.map((cat, index) => (
                <option key={index} value={index}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Enregistrer
          </button>
        </form>
      </>
    );
}
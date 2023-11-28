import {useEffect, useState} from "react";
import {addProduct, getProductByID, updateProduct} from "../service/product.service";
import {useNavigate, useParams} from "react-router-dom";
import { getAllCategories } from "../service/category.service";


export function ProductEdit() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [cat, setCategory] = useState("");
  const [selectedCat, setSelectedCat] = useState("");

  const navigate = useNavigate();

  const {id} = useParams();
  console.log(id);

  useEffect(
    ()=> {
    fetchProduct();

    },[])

       const [categories, setCategories] = useState([]);

       useEffect(() => {
         fetchCategories();
       }, []);

       async function fetchCategories() {
         const res = await getAllCategories();
         setCategories(res.data);
       }

   

async function fetchProduct(){
    const resp = await getProductByID(id);
    const p = resp.data;
    setName(p.name);
    setPrice(p.price);
}

async function handleForm(event) {
  try {
    event.preventDefault();
    const p = {
      "_id": id,
      "name": name,
      "price": price,
      "category": categories[1],
    };
    console.log(p);
    await updateProduct(p);
    console.log("updated....");
    navigate("/products");
  } catch (error) {
    console.error("Error updating product:", error);
    // Handle error display or logging here
  }
}
  return (
    <>
      <div className="text-center mt-7">
        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Modifier un produit
        </h2>
      </div>
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
            value={name}
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
            value={price}
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
            onChange={(e) => setSelectedCat(e.target.value)}
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

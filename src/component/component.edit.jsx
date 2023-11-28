import {useEffect, useState} from "react";
import {addProduct, getProductByID, updateProduct} from "../service/product.service";
import {useNavigate, useParams} from "react-router-dom";


export function ProductEdit() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const {id} = useParams();
  console.log(id);

  useEffect(
    ()=> {
    fetchProduct();

    },[])

async function fetchProduct(){
    const resp = await getProductByID(id);
    const p = resp.data;
    setName(p.name);
    setPrice(p.price);
}

  function handleForm(event) {
    event.preventDefault();
    const p = {_id:id,name: name, price: price};
    updateProduct(p);
    navigate("/products");
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

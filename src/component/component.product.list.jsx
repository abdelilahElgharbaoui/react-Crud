import { useEffect,useState } from "react";
import { getAllProduct,deleteProductByID } from "../service/product.service";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


export function ProductList(){

    const [products,setProducts] = useState([]);

     async function deleteProducts(id) {
       const res = await deleteProductByID(id);
       fetchProducts();
     }

     async function fetchProducts() {
       console.log("test");

       try {
         const res = await getAllProduct();
         console.log(res.data);
         setProducts(res.data);
       } catch (error) {
         console.log(error.message);
       }
     }

    useEffect(()=>{
          
            
        fetchProducts()
                

    },[])


    
    return (
      <>
        <div className="text-center">
          <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Liste des Produits
          </h2>
        </div>

        <Link to={"/products/new"}>
          <div className="ml-6">
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Nouveau Produit
            </a>
          </div>
        </Link>

        <div className="shadow-lg rounded-lg overflow-hidden mx-4 m-4 md:mx-10">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/4 py-4 px-6 text-gray-600 font-bold uppercase text-center">
                  ID
                </th>
                <th className="w-1/4 py-4 px-6 text-gray-600 font-bold uppercase text-center">
                  Produit
                </th>
                <th className="w-1/4 py-4 px-6 text-gray-600 font-bold uppercase text-center">
                  Prix
                </th>
                <th className="w-1/4 py-4 px-6 text-gray-600 font-bold uppercase text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((el, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : " bg-gray-100"}
                >
                  <td className="py-4 px-6 border-b border-gray-200 text-center">
                    {index}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 truncate text-center">
                    {el.name}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-center">
                    {el.price}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 ml-8">
                    <div className="grid grid-rows-1 grid-cols-2 gap-0 items-center justify-center">
                      <div className="col-span-1 flex items-center justify-center">
                        <button
                          id={el._id}
                          className="text-red-500 hover:text-red-700 flex items-center"
                          onClick={() => deleteProducts(el._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        </button>
                      </div>

                      <div className="col-span-1 flex items-center justify-center">
                        <Link to={`/product/edit/${el._id}`}>
                          <button
                            id={el._id}
                            className="text-green-500 hover:text-green-700 flex items-center"
                          >
                            <FontAwesomeIcon icon={faEdit} className="mr-1" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );

}
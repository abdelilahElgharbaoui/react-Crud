
import laptop from "../images/laptop.jpg"
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "../index.css";
import { useEffect,useState } from "react";
import { getAllProduct,deleteProductByID } from "../service/product.service";
import axios from "axios";
import { Link } from "react-router-dom";


export function Home(){

  const [products,setProducts] = useState([]);
  useEffect(()=>{
          
      
      async function deleteProducts(id){
          const res = await deleteProductByID(id);
          fetchProducts();
      }

      async function fetchProducts(){
          console.log("test");

          try {
              const res = await getAllProduct();
              console.log(res.data);
              setProducts(res.data);
          } catch (error) {
              console.log(error.message)
          }

      }
          
      fetchProducts()
              

  },[])
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

    return(
        <>
            <div className=" bg-[#f7f6f6] py-12 xl:px-28 px-4 ">
                <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
                <div className="md:w-1/2 mr-20">
                  <h1 className=" mb-4 text-3xl font-extrabold leading-none tracking-tight"> Gerer votre stock </h1>
                  <p className="text-x1 mb-7 w-[600px]"> Bienvenue dans notre application de gestion de stock d'ordinateurs, conçue pour simplifier et optimiser le suivi de vos ressources informatiques. </p>
                </div>
                <div className="md:w-1/2 ml-20">
                  <img width={700} height={500} src={laptop} alt="laptop image"  />
                </div>
              </div>
            </div>

     
           
      <div className="App">
        <Carousel breakPoints={breakPoints}>

        {products.map((el, index) => (

            <Item>
             <Link to={`/detail/${el._id}`}>
            <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <div>
            <img src="https://media.ldlc.com/r1600/ld/products/00/05/82/02/LD0005820208_1.jpg" alt="" />
            </div>
            <div class="py-4 px-4 bg-white">
              
            <h3 class="text-lg font-semibold text-gray-600">{el.name}&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)</h3>
            <p class="mt-4 text-lg font-bold text-gray-500">$ {el.price}</p>
            </div>
            </div>
            </Link>
            </Item>
           
        ))}
         

        
         
        </Carousel>
      </div>

        </>

    )
}
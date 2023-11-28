import http from "./http-common";

export async function getAllProduct(){

    try {
        const res= await http.get("/products");
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message)
    }

}

export async function getProductByID(productId) {
    try {
        const res = await http.get(`/products/${productId}`);
        console.log(res);
        return res; 
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
}

export async function deleteProductByID(id){
    console.log(id);
     
    return await http.delete(`/products/${id}`);

}

export async function addProduct(product){
     
    return await http.post("/products",product);

}

export async function updateProduct(product) {
    console.log("here"+product._id);
  return await http.patch(`/products/${product._id}`, product);
}
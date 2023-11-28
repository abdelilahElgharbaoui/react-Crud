import http from "./http-common";

export async function getAllCategories(){

    try {
        const res= await http.get("/categories");
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message)
    }

}

export async function getCategoryByID(productId) {
    try {
        const res = await http.get(`/categories/${productId}`);
        console.log(res);
        return res; 
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
}

export async function deleteCategoryByID(id){
    console.log(id);
     
    return await http.delete(`/categories/${id}`);

}

export async function addCategory(product){
     
    return await http.post("/categories",product);

}

export async function updateCategory(product) {
  return await http.patch(`/categories/${product._id}`, product);
}
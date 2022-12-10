import apiCall from "./api";


export const getBrands = (category,page) => {
return apiCall(`/brands/?category=${category}&limit=10&page=${page}`).then((response) => response.data);
}

export const getTags =  () => {
return apiCall(`/tags/`).then((response) =>response.data);
}
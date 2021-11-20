import axios from "axios"

const BASE_URL="https://api.freerealapi.com/blogs" 

const getBlog = async()=>{
const response = await axios.get(BASE_URL)
 return response.data
}

export {getBlog}
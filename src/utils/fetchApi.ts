import axios from 'axios'

export const baseUrl = 'http://localhost:8000/api'

export const fetchApi = async (url:string) => {
	const {data} = await axios.get((url),{

	})
}


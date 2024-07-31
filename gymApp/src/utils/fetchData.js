export const exerciseOptions = {
	method: 'GET',
	// path: '/status',
	headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY
	}
};

export const fetchData= (url,options)=>{
return fetch(url,options).
then(resp => {
    if (!resp.ok) {
        throw new Error(`Network response was not ok: ${resp.statusText}`);
    }
    return resp.json(); 
}).
catch(error => console.log('error happening whilst fetching data from ', url, ':', error))

}
// export const exerciseOptions = {
// 	method: 'GET',
// 	// path: '/status',
// 	headers: {
//         'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
// 		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY
// 	}
// };
// export const exerciseOptions = {
// 	method: 'GET',
// 	hostname: 'exercisedb.p.rapidapi.com',
// 	port: null,
// 	path: '/status',
// 	headers: {
// 		'x-rapidapi-key': 'da1cbfd370mshb124ecd85e16eeap19011ejsn5e190d20f400',
// 		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
// 	}
// };
export const exerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	hostname: 'youtube-search-and-download.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
}

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
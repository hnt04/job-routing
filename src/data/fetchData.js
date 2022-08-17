const fetchData = {}

fetchData.getJobs= async (page) => {
  const url = `http://localhost:5000/jobs?_page=${page}&_limit=8`
  try {
    const res = await fetch(url);
    const totalJob = 40;
    const pagesTotal = Math.ceil(totalJob/8);
    console.log("pagesTotal",pagesTotal)
    console.log("totalJob",totalJob);
    const data = await res.json();
    console.log("data",data)
    return {
      jobs : data,
      pagesTotal}
} catch(error) {
  console.log("error",error)
}
}

fetchData.getSingleJob= async (id) => {
  const urlJob = `http://localhost:5000/jobs/${id}`
  try {
    const res = await fetch(urlJob);
    const dataJob = await res.json();
    console.log("dataJob",dataJob)
    return {
      singleJob : dataJob
    }
  } catch (error) {
    console.log("error",error)
  }
}

export default fetchData;
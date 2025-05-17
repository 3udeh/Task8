
const getdata= async()=> {

try{

    const {data} = await axios.get(`https://dummyjson.com/products`);
     const product = data.products;
    const result= product.map( (ele)=>{
        return`
        <div class="product">

           <h2>${ele.title}</h2>  
           <img src= '${ele.thumbnail} '/> 
        </div> 
        
        `


    }).join('');
    document.querySelector(".products").innerHTML=result;



}
catch(error){

Swal.fire({
  title: "API call fails.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
});

}

}
getdata();
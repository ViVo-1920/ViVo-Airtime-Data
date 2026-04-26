async function byAirtime(){
  let phone= document.getElementById("phone").value;
  let network= document.getElementById("network").value;
  let amount= document.getElementById("amount").value;
  let status= document.getElementById("status").value;
  status.innerText="processing...";

try{
  let res= await fetch ("http://localHOST:3000/by",{
    method: "Post",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringfy({
    phone,
    network,
    amount
    })
  });

  let data= await res.json();

  status.innerText= data.message;

}catch (err){
 status.innerText="Error occurred!";
 }
}

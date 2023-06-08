const ImageConverterBase64=function(file){

  return new Promise(function(resolve,reject){
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload=function(){
      resolve(fileReader.result);
    }

    fileReader.onerror=function(error){
      reject(error);
    }

  })

}


const ImageConverter=async function(event){
  const file=event.target.files[0];
  const base64=await ImageConverterBase64(file);

  $("#productImageFile").val(base64);
}



$("#productImage").change(function(e){
  ImageConverter(e);
})







var cart=[];
cart=JSON.parse(localStorage.cart);
cartAmount=Number(localStorage.cartAmount);

function myFunction(itemId,itemPrice){

  cart.push(itemId);
  cartAmount+=itemPrice;
  localStorage.setItem("cart",JSON.stringify(cart));
  localStorage.setItem("cartAmount",JSON.stringify(cartAmount));

}

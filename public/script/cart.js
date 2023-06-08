$(document).ready(function(){

  var cartList=JSON.parse(localStorage.cart);
  var cartListLength=cartList.length;
  var itemsLength=$(".cart-product-box").length;


  for(var i=0;i<itemsLength;i++){

      for(var p=0;p<cartListLength;p++){

          if($(".cart-iteam-id")[i].value==cartList[p]){

               $("#cart-product-box"+i).removeClass("hide");
           };

      };

  };

});


//Remove from Cart Start--------------

function removeFromCart(itemId,itemPrice){
  var removeArray=[];
  removeArray=JSON.parse(localStorage.cart);

  var index=removeArray.indexOf(itemId);
  removeArray.splice(index,1);
  localStorage.cart=JSON.stringify(removeArray);

  var newItemPrice=Number(localStorage.cartAmount);
  newItemPrice-=Number(itemPrice);

  localStorage.setItem('cartAmount',String(newItemPrice));

  location.reload();
}


$('#cartTotalAmount').text("Your Total Amount is : " + localStorage.cartAmount);

//Remove from Cart End--------------

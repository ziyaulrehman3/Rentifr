
//AdToCard Start-----------

var cart=[];

   function addToCart(itemId,itemPrice){

       if(String(localStorage.getItem('cart'))=='null'){
           var array=["a"];
          localStorage.setItem('cart',JSON.stringify(array));
       }


    cart=JSON.parse(localStorage.cart);
    var flag=0;


    for(var i=0;i<cart.length;i++){

       if(cart[i]==itemId){
         flag++;
       }
    }


    if(String(localStorage.getItem('cartAmount'))=='null'){
      localStorage.setItem('cartAmount','0');
    }

    var cartAmount;

    if(localStorage.cartAmount=='null' || localStorage.cartAmount=='NaN'){
      cartAmount=0;
    }else{
      cartAmount=Number(localStorage.getItem('cartAmount'));
    }

    if(flag==0){
      cart.push(itemId);
      cartAmount+=Number(itemPrice);
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    localStorage.setItem('cartAmount',JSON.stringify(cartAmount));

}

//AdTo Card End----------



//Iteams Menu Filter Start----------
var items=$(".items-menu-product-box");
var itemsLength=items.length;
var cat_text;

for(var i=0;i<itemsLength;i++){

    var side1cat=$(".iteams-menu-category")[i].value;
    var side2cat=localStorage.category;

    var side1city=$(".iteams-menu-city")[i].value;
    var side2city=localStorage.city;


    if(side2cat=='na'){

       if(side1city!=side2city){
          $("#items-menu-product-box"+i).addClass("hide");
        }

        cat_text="All Category Items";

     }else{

        if(side1cat!=side2cat){
          $("#items-menu-product-box"+i).addClass("hide");
         }

        if(side1city!=side2city){
           $("#items-menu-product-box"+i).addClass("hide");
         }

         cat_text=side2cat + ' Category Items';

     }

}

$("#items-menu-first-heading").text(cat_text);


//Iteams Menu Filter End----------

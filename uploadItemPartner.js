
exports.data=function(data){

  set={
    userid:data.mobileno,
    name:data.productName,
    discription:data.productDiscription,
    color:data.productColor,
    category:data.productCategory,
    price:data.productPrice,
    city:data.productCity,
    address:data.productAddress,
    imgfile:data.productImageFile
  }

return set;

}

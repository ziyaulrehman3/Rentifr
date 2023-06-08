
exports.finddata=function(foundData,matchMobileno){
  var foundDataObjs1=[];

  for(var i=0;i<foundData.length;i++){

     if(foundData[i].userid==matchMobileno){
       foundDataObjs1.push(foundData[i]);
     }

  }

  return foundDataObjs1;

}




exports.finddata2=function(foundData){
  var foundDataObjs2=[];

  for(var i=0;i<foundData.length;i++){

       foundDataObjs2.push(foundData[i]);

  }

  return foundDataObjs2;

}

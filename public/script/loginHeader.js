//Side Bar Start

$("#profiledetails-view-button").click(function(){
  $("#profiledetails-button-submit").click();
})



$("#upload-page-button").click(function(){
  $("#uploadPage-button-submit").click();
})


$("#renting-iteam-page-button").click(function(){
  $("#rentingIteamPage-button-submit").click();
})


//Side Bar End


$("#header-btn-3-icon").click(function(){
  $("#loginCart-button-submit").click();
})


$("#renting-iteam-page-button").click(function(){
  $("#rentingIteamPage-button-submit").click();
})


$("#renting-iteam-page-button").click(function(){
  localStorage.category='na';
  $("#rentingIteamPage-button-submit").click();
})









            $('#header-btn-2').keydown(function(e){

              if(e.which==13){
                localStorage.category=$('#header-btn-2').val();
                $("#rentingIteamPage-button-submit").click();
                // window.location.href="/loginIteamsMenu";
              }
            })

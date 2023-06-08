var cityVal;
            function city(){
              cityVal=$("#header-btn-1").find(":selected").val();
              localStorage.city=cityVal;
            }
$("#cityVal").text(localStorage.city);
$("#cityVal").val(cityVal);










            $('#header-btn-2').keydown(function(e){

              if(e.which==13){
                localStorage.category=$('#header-btn-2').val();
                window.location.href="/iteamsMenu";
              }
            })

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path=require('path');

require('dotenv').config();
const mongo=require('./mongoPartner.js');
const uploadItem=require('./uploadItemPartner.js');
const findData=require('./findDataPartner.js');


const app=express();


app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));



//MongoDB Start
mongoose.connect(process.env.mongoosePath,{useNewUrlParser:true});
const Users=mongoose.model("users",mongo.usercreate);
const Product=mongoose.model("products",mongo.productadd);
//MongoDB End



//------------Get Requests Start------------


app.get('/',function(req,res){

    Product.find().then(function(foundData){

       res.render("index/index",({iteamsObj:findData.finddata2(foundData)}));
    });
});


app.get('/cart',function(req,res){

      Product.find().then(function(foundData){

         res.render('index/cart',({iteamsObj:findData.finddata2(foundData)}));
    })
});


app.get('/paymentPage',function(req,res){
  res.render('index/paymentPage');
});


app.get('/paymentConfirm',function(req,res){
  res.render('index/paymentConfirm');
});


app.get('/iteamsMenu',function(req,res){

  Product.find().then(function(foundData){

    res.render('index/iteamsMenu',({iteamsObj:findData.finddata2(foundData)}));
  });

});


app.get('/aboutus',function(req,res){
  res.render("footerfiles/aboutus");
});


app.get('/contact',function(req,res){
  res.render("footerfiles/contact");
});


app.get('/ourTeam',function(req,res){
  res.render("footerfiles/ourTeam");
});


app.get('/rentierTermsConditions',function(req,res){
  res.render("footerfiles/rentierTermsConditions");
});


app.get('/renterTermsConditions',function(req,res){
  res.render("footerfiles/renterTermsConditions");
});


app.get('/privacyPolicies',function(req,res){
  res.render("footerfiles/privacyPolicies");
});


app.get('/login',function(req,res){
  res.render("loginSignup/loginPage");
});


app.get('/signup',function(req,res){
  res.render("loginSignup/signupPage");
});


app.get('/logout',function(req,res){
  res.render('loginSignup/logout');
});


//------------Get Requests End------------



//------------Post Requests Start------------


app.post("/signup",function(req,res){

  var matchNo=req.body.accountMobileno;
  const data=req.body;

    const newUser=new Users({
       name:data.accountName,
       mobileno:data.accountMobileno,
       email:data.accountEmail,
       passward:data.accountPassward
    });

    newUser.save();

    Users.find().then(function(foundData){

        var userFlag=0;

        for(var j=0;j<foundData.length;j++){

             if(foundData[j].mobileno==matchNo){
                 userFlag++;
             };
        };

         console.log("User Account Created Success!");
         res.render('loginSignup/signupSuccess');

    });

});


app.post('/login',function(req,res){

   const loginmobileno=req.body.mobileno;
   var userData;

   Users.find().then(function(foundData){
          userData=foundData;
          for(var i=0;i<foundData.length;i++){

                 if(foundData[i].mobileno==loginmobileno){

                      Product.find().then(function(foundData2){

                            res.render('loginProfile/profile',({accountName:foundData[i].name,
                              accountMobileno:foundData[i].mobileno,
                              accountEmail:foundData[i].email,iteamsObj:findData.finddata2(foundData2),
                            }));

                       });
                   break;
                   };

             };
     });
});


app.post('/profileDetailsButton',function(req,res){

  const data=req.body;

  const para={accountName:data.name,
        accountMobileno:data.mobileno,
        accountEmail:data.email};

  res.render('loginProfile/profileDetailsPage',(para));
});


app.post('/uploadPage',function(req,res){

  const data=req.body;

  const para={accountName:data.name,
        accountMobileno:data.mobileno,
        accountEmail:data.email};

  res.render('loginProfile/uploadPage',(para));
});



app.post('/rentingIteamPageButton',function(req,res){

  Product.find().then(function(foundData){

    const para={accountName:req.body.name,
         accountMobileno:req.body.mobileno,
         accountEmail:req.body.email,
         iteamsObj:findData.finddata2(foundData)}

    res.render("loginProfile/rentingIteamPage",(para));

  });
});




app.post("/ListingIteams",function(req,res){

  const para={accountName:req.body.name,
       accountMobileno:req.body.mobileno,
       accountEmail:req.body.email};

  res.render("loginProfile/uploadIteamPage",(para));
});


app.post("/viewListedIteams",function(req,res){

  const data=req.body;

  Product.find().then(function(foundData){

    const para={accountName:data.name,
        accountMobileno:data.mobileno,
        accountEmail:data.email,
        iteamsObj:findData.finddata(foundData,req.body.mobileno)};

    res.render("loginProfile/uploadedIteamPage",(para));

  });

});


app.post('/uploadIteamPage',function(req,res){

  const data=req.body;

  const newProduct=new Product(uploadItem.data(data));
  newProduct.save();


  Product.find().then(function(foundData){

      const para={accountName:data.name,
          accountMobileno:data.mobileno,
          accountEmail:data.email,
          iteamsObj:findData.finddata(foundData,req.body.mobileno)};

    res.render("loginProfile/uploadedIteamPage",(para));

  });


});


app.post("/paymentPage",function(req,res){
  const data=req.body;

  res.render('index/paymentConfirm');
});



app.post('/loginCart',function(req,res){

  const data=req.body;

      Product.find().then(function(foundData){

        const para={accountName:data.name,
              accountMobileno:data.mobileno,
              accountEmail:data.email,
              iteamsObj:findData.finddata2(foundData)};

         res.render('loginProfile/loginCart',(para));
    })
});


app.post('/loginPaymentPage',function(req,res){

  const data=req.body;


  const para={accountName:data.name,
        accountMobileno:data.mobileno,
        accountEmail:data.email};


  res.render('loginProfile/loginPaymentPage',(para));

});

app.post('/loginPaymentConfirm',function(req,res){

  const data=req.body;

        const para={accountName:data.name,
              accountMobileno:data.mobileno,
              accountEmail:data.email};


        res.render('loginProfile/loginPaymentConfirm',(para));


});


//------------Post Requests End------------


app.listen(process.env.PORT||3000,function(){
  console.log("Server is Running...");
});

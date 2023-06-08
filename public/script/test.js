const convertBase64 = (file) => {


    return new Promise((resolve, reject) => {
    
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };


        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};



const uploadImg= async function(event){
  const file=event.target.files[0];
  const base64code= await convertBase64(file);
  console.log(base64code);
}


document.getElementById("heading-id").addEventListener("change", (e) => {
    uploadImg(e);
});

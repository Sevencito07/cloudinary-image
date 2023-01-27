
const newFile = document.getElementById('new-file')
const newImg= document.getElementById('new-img')
const imagebar= document.getElementById('img-bar')

const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dulqpyq3y/image/upload'
const CLOUDINARY_UPLOAD_PRESET = 'uxydkhri';


newFile.addEventListener('change', async(e)=>{
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

   const res= await axios.post(
    CLOUDINARY_URL,
    formData,
    {
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress (e) {
            let progress = Math.round((e.loaded * 100.0) / e.total);
            console.log(progress);
            imagebar.setAttribute('value', progress);
        }
    })
    console.log(res)
    newImg.src = res.data.secure_url
})


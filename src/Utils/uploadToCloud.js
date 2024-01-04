export const uploadToCloudinary= async(pics)=>{
    if(pics){
        const data= new FormData();
        data.append("file",pics)
        data.append("upload_preset","twitter");
        data.append("cloud_name","dvcbcb4oa")

        const res = await fetch("https://api.cloudinary.com/v1_1/dvcbcb4oa/image/upload", {
        method:"post",
        body:data,})
        const fileData = await res.json();
        if (fileData && fileData.url) {
            return fileData.url.toString();
        } else {
            console.log("Error: file data")
            return null;
        }
    }
    else console.log("error from upload function")
}
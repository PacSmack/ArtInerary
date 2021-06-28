// async function uploadhandler() {
const uploadInput = document.getElementById("upload-input");
const uploadBtn = document.getElementById("upload-btn");
const span = document.getElementById("file-status");
const submitBtn = document.getElementById('submit-btn');

uploadBtn.addEventListener('click', () => {
    uploadInput.click()
})

uploadInput.addEventListener("change", function () {
    if (uploadInput.value) {
        uploadBtn.innerHTML = "CHOOSE ANOTHER FILE"
        submitBtn.style.display = 'initial'
        span.innerHTML = uploadInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        span.innerHTML = "No file chosen, so far."
    }
})
/*
const uploadImage  = async (event) => {   
    console.log(event)
    event.preventDefault()
    console.log(uploadInput.files)
    const tokens = window.location.pathname.split("/")
    const id = parseInt(tokens[tokens.length - 1])

    let data = new FormData()
    data.append('file', uploadInput.files[0])
    data.append('refid', id)
    try {        
        let a = await fetch('/api/images/upload', {
            method: 'POST',
            body: new URLSearchParams([...data.entries()]),
            headers: {'Content-Type': 'multipart/form-data'},
        })
        console.log(a)
    } catch(error) {
        console.error(error)
    }
}
*/

//submitBtn.addEventListener('click', uploadImage)























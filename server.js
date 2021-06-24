//https://dev.to/musebe/get-on-board-with-the-media-express-5h1k

const express = require("express");
const app = express();
const upload = require("./handlers/multer");
const cloudinary = require("cloudinary");
const moment = require("moment");
require("dotenv").config();
require("./handlers/cloudinary");

const exphbs = require('express-handlebars');
<<<<<<< HEAD
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get("/", (req, res) => res.render("index"));
=======
const routes = require('./controllers');
const sequelize = require('./config/connection');
const cloudinary = require('cloudinary').v2;
>>>>>>> 481413228616292cb18c0dc47de3c768e6366ef4

// app.post("/uploads", upload.single("image"), (req, res) => {
//     res.send(req.file);
//     console.log(res);
// });

// app.post("/uploads", (req, res) => {
//     cloudinary.v2.uploader.upload(req.file.path,
//         function (err, result) {
//         console.log(result)
//     })
// });
//*******************look at upload widget options --- tell it what path to go to with the response  */

app.get("/api/files", async (req, res) => {
    const images = await cloudinary.v2.api.resources({
        type: "upload"
    });
    return res.json(images)
});

//------------------------This returns all the images' object info in the back-end console.

cloudinary.v2.api.resources(
    function (error, result) {
        console.log(result, error);
    });

    //----------------------This returns object with all stored data to convert to front end format


app.get("/files", async (req, res) => {
    const images = await cloudinary.v2.api.resources({
        type: "upload",
    });
    // Check if files
    if (!images || images.length === 0) {
        return res.status(404).json({
            err: "No files exist"
        });
    }
    // Files exist
    res.render("files", {
        images: images
    });
});
//-----------------------Delete Route 
app.delete("/files", (req, res) => {
    let id = req.body.id;
    cloudinary.v2.api.delete_resources([id], function (error, result) { console.log(result); });
});

<<<<<<< HEAD

=======
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 481413228616292cb18c0dc47de3c768e6366ef4


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})


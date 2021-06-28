const { Image } = require('../models');

const imagedata = [
    {
        title: 'Punisher City',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570678/USER%20IMAGES/2F_uzhamb.png',
        user_id: 1,
        reference_id: 11
    },
    {
        title: 'Punisher Red',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570677/USER%20IMAGES/2E_dm1moc.jpg',
        user_id: 1,
        reference_id: 11
    },
    {
        title: 'Punisher Sky',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570676/USER%20IMAGES/2A_yhplmv.jpg',
        user_id: 2,
        reference_id: 11
    },
    {
        title: 'Punisher Green Oil',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570674/USER%20IMAGES/2C_ha4yzk.jpg',
        user_id: 3,
        reference_id: 11
    },
    {
        title: 'Punisher  Pink Duo',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570674/USER%20IMAGES/2D_uicgpw.jpg',
        user_id: 4,
        reference_id: 11
    },
    {
        title: 'Punisher Swirl',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570674/USER%20IMAGES/2B_fyuojr.jpg',
        user_id: 5,
        reference_id: 11
    },
    {
        title: 'Ellie Oil',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570658/USER%20IMAGES/1B_qnjdes.jpg',
        user_id: 1,
        reference_id: 7
    },
    {
        title: 'Elle Patterned',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570659/USER%20IMAGES/1D_fuvspa.png',
        user_id: 2,
        reference_id: 7
    },
    {
        title: 'Elle Pink',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570657/USER%20IMAGES/1C_drzdqa.jpg',
        user_id: 3,
        reference_id: 7
    },
    {
        title: 'Elle Print',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570654/USER%20IMAGES/1A_kybmtn.jpg',
        user_id: 4,
        reference_id: 7
    },
    {
        title: 'Pink Hummy',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570650/USER%20IMAGES/5D_briklc.png',
        user_id: 1,
        reference_id: 10
    },
    {
        title: 'Patterned  Hummy',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570643/USER%20IMAGES/5C_lh7qx9.png',
        user_id: 2,
        reference_id: 10
    },
    {
        title: 'Hummy Print',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570641/USER%20IMAGES/5A_ylqs8b.jpg',
        user_id: 3,
        reference_id: 10
    },
    {
        title: 'Bright Hummingbird',
        image_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624570638/USER%20IMAGES/5B_oolswa.jpg',
        user_id: 4,
        reference_id: 10
    }
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;

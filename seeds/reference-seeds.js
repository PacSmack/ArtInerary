const { Reference } = require('../models');

const referencedata = [
    {
        title: 'Picasso Ref  ',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624567231/REFERENCES/Screen_Shot_2021-06-24_at_1.40.21_PM_dbhdbe.png'
    },
    {
        title: 'The Scream',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624567116/REFERENCES/Screen_Shot_2021-06-24_at_1.35.42_PM_bmhm3x.png'
    },
    {
        title: 'The Wavve',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624567108/REFERENCES/Screen_Shot_2021-06-24_at_1.36.49_PM_xee939.png'
    },
    {
        title: 'Van Gogh Portrait',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624567102/REFERENCES/Screen_Shot_2021-06-24_at_1.37.18_PM_l7mtoo.png'
    },
    {
        title: 'Monet',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/v1624567105/REFERENCES/Screen_Shot_2021-06-24_at_1.36.55_PM_p8sdu3.png'
    },
    {
        title: 'Frida ',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624567100/REFERENCES/Screen_Shot_2021-06-24_at_1.38.09_PM_iic0ml.png'
    },
    {
        title: 'Elle',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566305/REFERENCES/Reference_1_mh0v81.jpg'
    },
    {
        title: 'Magharrite',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566581/REFERENCES/Screen_Shot_2021-06-24_at_1.29.30_PM_yyms2q.png'
    },
    {
        title: 'Starriest Night',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566518/REFERENCES/Screen_Shot_2021-06-24_at_1.27.35_PM_d3nt3r.png'
    },
    {
        title: 'Hummingbird',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566360/REFERENCES/Reference_5_jl6qxk.jpg'
    },
    {
        title: 'Punisher',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566356/REFERENCES/Reference_2_ctvdcv.jpg'
    },
    {
        title: 'The Kiss',
        reference_url: 'https://res.cloudinary.com/scarrlettearianne/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624566514/REFERENCES/Screen_Shot_2021-06-24_at_1.27.52_PM_z2bscr.png'
    }
];

const seedReferences = () => Reference.bulkCreate(referencedata);

module.exports = seedReferences;

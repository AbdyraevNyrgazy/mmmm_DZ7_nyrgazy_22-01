import Slider from './Slider';
import images_1 from "./images/Desert_Electric.jpg"
import images_2 from "./images/priroda.jpg"
import images_3 from "./images/nature-3082832_960_720.jpg"
const images = [
    { src: 'images_1', alt: 'Фото 1', caption: 'Подпись к фото 1' },
    { src: 'images_2', alt: 'Фото 2', caption: 'Подпись к фото 2' },
    { src: 'images_3', alt: 'Фото 3', caption: 'Подпись к фото 3' }
];

function Slider() {
    return <Slider images={images} />;
}

export  default Slider
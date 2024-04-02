import eueela from '../images/euela2.jpeg'
import eueela2 from '../images/euela3.jpeg'
import eueela3 from '../images/euela4.jpeg'
import eueela4 from '../images/euela5.jpeg'
import eueela5 from '../images/euela6.jpeg'
import eueela6 from '../images/euela7.jpeg'
import eueela7 from '../images/euela8.jpeg'
import eueela8 from '../images/euela9.jpeg'
import eueela9 from '../images/euela.jpeg'



export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: eueela,
            },
            {
                itemImageSrc: eueela2,
            },
            {
                itemImageSrc: eueela3,
            },
            {
                itemImageSrc: eueela4,
            },
            {
                itemImageSrc: eueela5,
            },
            {
                itemImageSrc: eueela6,
            },
            {
                itemImageSrc: eueela7,
            },
            {
                itemImageSrc: eueela8,
            },
            {
                itemImageSrc: eueela9,
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};


// Images
import car from "../assets/images/xc90.avif";
import car2 from "../assets/images/xc90-2.avif";
import car3 from "../assets/images/xc90-3.avif";
import car4 from "../assets/images/xc90-4.avif";
import car5 from "../assets/images/xc90-5.avif";
import car6 from "../assets/images/xc90-6.avif";


export const VehiclesMockData = [
    {
        id: 1,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car, car2, car3, car4, car5, car6],
        isAvailable: true,
    },
    {
        id: 2,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car2, car, car3, car4, car5, car6],
        isAvailable: false,
    },
    {
        id: 3,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car3, car2, car,],
        isAvailable: true,
    },
    {
        id: 4,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car4, car2, car3, car],
        isAvailable: false,
    },
    {
        id: 5,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car5, car2, car3, car4, car],
        isAvailable: false,
    },
    {
        id: 6,
        title: "Volvo XC90",
        description: "bu araba şöyle mükemmel böyle mükemmel",
        price: 1000,
        images: [car6, car2, car3, car4, car],
        isAvailable: true,
    },
]
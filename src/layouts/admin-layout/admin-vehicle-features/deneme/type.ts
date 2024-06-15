import {GenericDataItem} from "../../../../hooks/Generic";

export default interface DenemeType extends GenericDataItem {
    id: string;
    modelName: string;
    brandName: string;
    fuelName: string;
    transmissionName: string;
    colorName: string;
    dailyPrice: string;
    plate: string;
    imagesRoot: string[];
    minFIndexScore: number,
    carState: number,
}

// interface ImageRoot {
//     id: string,
//     carId: string,
//     root: string
// }
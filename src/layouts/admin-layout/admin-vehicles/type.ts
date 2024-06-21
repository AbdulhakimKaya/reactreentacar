import {GenericDataItem} from "../../../hooks/Generic";

export default interface Vehicle extends GenericDataItem {
    id: string;
    modelName: string;
    brandName: string;
    fuelName: string;
    transmissionName: string;
    colorName: string;
    dailyPrice: number;
    modelYear: number;
    plate: string;
    imagesRoot: string[];
    minFIndexScore: number,
    carState: number,
}
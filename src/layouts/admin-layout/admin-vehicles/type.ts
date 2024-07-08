import {GenericDataItem} from "../../../hooks/Generic";

export default interface VehicleType extends GenericDataItem {
    id: string;
    modelId: string;
    modelName: string;
    brandName: string;
    fuelName: string;
    transmissionName: string;
    colorId: string;
    colorName: string;
    kilometer: number;
    dailyPrice: number;
    modelYear: number;
    plate: string;
    imagesRoot: string[];
    minFIndexScore: number,
    carState: number,
}
import {GenericDataItem} from "../../../../hooks/Generic";

export default interface Model extends GenericDataItem {
    id: string;
    name: string;
    brandName: string;
    fuelName: string;
    transmissionName: string;
}
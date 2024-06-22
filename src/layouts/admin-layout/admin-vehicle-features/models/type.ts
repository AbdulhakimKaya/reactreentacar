import {GenericDataItem} from "../../../../hooks/Generic";

export default interface Model extends GenericDataItem {
    id: string;
    name: string;
    brandId: string;
    fuelId: string;
    transmissionId: string;
}
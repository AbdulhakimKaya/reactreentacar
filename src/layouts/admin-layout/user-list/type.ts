import {GenericDataItem} from "../../../hooks/Generic";

export default interface UserType extends GenericDataItem {
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
}
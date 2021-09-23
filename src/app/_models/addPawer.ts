import { AddAddress } from "./addAddress";

export interface AddPawner {
    firstName:string;
    lastName:string;
    contactNumber:string;
    addresses:AddAddress[];
}
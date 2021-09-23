import { AddAddress } from "./addAddress";

export interface Pawner {
    panwerId:number;
    firstName:string;
    lastName:string;
    constactNumber:string;
    addresses:AddAddress[];
}
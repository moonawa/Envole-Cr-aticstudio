import { User } from "../user/user";

export interface Colaborateur {
    id: number;
    adresse_colaborateur: string;
    description_colaborateur: string;
    user: User;
}
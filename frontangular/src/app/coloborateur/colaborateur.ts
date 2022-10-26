import { User } from "../user/user";

export interface Colaborateur {
    id: number;
    adresse: string;
    description: string;
    user: User;
}
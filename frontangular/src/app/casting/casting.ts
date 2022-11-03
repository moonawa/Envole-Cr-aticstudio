import { Colaborateur } from "../coloborateur/colaborateur";

export interface Casting {
    id: number;
    datecasting: Date;
    namecasting: string;
    descriptioncasting: string;
    colaborateur: Colaborateur;
    statuscasting: string;
}


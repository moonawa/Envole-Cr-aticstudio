import { Candidat } from "../candidat/candidat.model";
import { Colaborateur } from "../coloborateur/colaborateur.model";
import { Pivot } from "../pivot/pivot.model";

export class Casting {
    id?: any;
    datecasting?: Date;
    namecasting?: string;
    descriptioncasting?: string;
    colaborateur?: Colaborateur ;
    statuscasting?: string;
    candidats?: Candidat[];
    pivot?: Pivot[];
}

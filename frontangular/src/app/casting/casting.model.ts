import { Candidat } from "../candidat/candidat.model";
import { Coloborateur } from "../coloborateur/coloborateur.model";
export class Casting {
    id?: any;
    datecasting?: Date;
    namecasting?: string;
    descriptioncasting?: string;
    colaborateur?: Coloborateur ;
    statuscasting?: string;
    candidats?: Candidat[];
}

import { Candidat } from "../candidat/candidat";
import { Colaborateur } from "../coloborateur/colaborateur";

export interface Casting {
    id: number;
    datecasting: Date;
    namecasting: string;
    descriptioncasting: string;
    //colaborateur_id: number ;
    colaborateur: Colaborateur ;
    statuscasting: string;
    candidats: Candidat;

    // colaborateur: {
    //     id: number;
    // adresse_colaborateur: string;
    // description_colaborateur: string;
    
    //     user?: {
    //         id: number;
    // name: string;
    // email: string;
    // telephone: string;
    // password: string;
    // //role: number;
    // avatar: string;
    // status: string;
    //     }
    //  };
}


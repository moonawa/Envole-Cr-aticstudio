import { Candidat } from "../candidat/candidat";
import { Casting } from "../casting/casting";

export interface Selection {
    id: number;
    note: string;
    //status: string;
    nameselection: string;
    candidat: Candidat;
    casting: Casting;
    

   
}
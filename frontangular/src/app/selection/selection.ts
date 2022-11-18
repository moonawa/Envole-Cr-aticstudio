import { Candidat } from "../candidat/candidat";
import { Casting } from "../casting/casting";
import { Deserializable } from "../deserializable";

export interface Selection {
    id: number;
    note: string;
    //status: string;
    nameselection: string;
    candidat: Candidat;
    casting: Casting;
    

   
}
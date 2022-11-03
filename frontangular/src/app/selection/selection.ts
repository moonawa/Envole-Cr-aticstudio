import { Candidat } from "../candidat/candidat";
import { Casting } from "../casting/casting";

export interface Selection {
    id: number;
    note: string;
    status: string;

    candidat: Candidat;
    casting: Casting;
    
}
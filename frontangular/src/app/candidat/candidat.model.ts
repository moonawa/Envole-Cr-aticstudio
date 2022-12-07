import { Casting } from "../casting/casting.model";
import { Image } from "../image/image.model";
import { Pivot } from "../pivot/pivot.model";

export class Candidat {
    id?: any;
    prenom?: string;
    nom?: string;
    telephone_candidat?: string;
    email_candidat?: string;
    taille?: string;
    poids?: string;

    teint?: string;
    sexe?: string;
    campagne_publicitaire?: string;
    nom_campagne_publicitaire?: string;
    age?: number;
    adresse_candidat?: string;
    profession?: string;
    birthday?: Date

    langues_parlees?: string;
    signe_particulier?: string;
    
    barbu?: string;

    couleur_cheveux?: string;
    longueur_cheveux?: string;
    texture_cheveux?: string;
    teinture_cheveux?: string;
    couleur_yeux?: string;
    lentille_yeux?: string;
    forme_visage?: string;
    percing?: string;
    cicatrice?: string;
    tatouage?: string;
    tache_naissance?: string;

    photo1?: string;
    photo2?: string;
    photo3?: string;
    photo4?: string;
    photo5?: string;
    video1?: string;
    video2?: string;
    myFiles?: string;
        
    situation_matrimoniale?: string;
    enfant?: number;

    selection_envole?: string;
    quel_cinema?: string;
    experience_cinema?: string;
    combien_de_film?: number;
    les_films?: string;
    experience_theatre?: string;
    combien_annee_theatre?: number;
    les_theatres?: string;
    
    role_interdit?: string;
    lequel_role_interdit?: string;
    role_souhaite?: string;
    lequel_role_souhaite?: string;
    nudite?: string;
    figurant?: string;
    baiser?: string;
    pourquoi_cinema?: string;
    
    appreciation?: string;

    created_at?: string;
    updated_at?: string;
    pvot?: string;

    images?: Image[];
    pivot?: Pivot;

    castings?: Casting[];

}

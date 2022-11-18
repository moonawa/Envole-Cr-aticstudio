<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidat extends Model
{
    use HasFactory;
    protected $fillable = [
        'prenom',
        'nom',
        'email_candidat',
        'telephone_candidat',
        'adresse_candidat',
        'signe_particulier',
        'taille',
        'profession',
        'poids',
        'teint',
        'sexe',
        'barbu',
        'age',
        'birthday',
        'appreciation',
        'campagne_publicitaire',
        'nom_campagne_publicitaire',
        'situation_matrimoniale',
        'enfant',
        'langues_parlees',
        'role_interdit',
        'role_souhaite',
        'nudite',
        'figurant',
        'baiser',
        'pourquoi_cinema',

        'couleur_cheveux',
        'longueur_cheveux',
        'texture_cheveux',
        'teinture_cheveux',
        'couleur_yeux',
        'lentille_yeux',
        'forme_visage',
        'percing',
        'cicatrice',
        'tatouage',
        'tache_naissance',


         'photo1',
        // 'photo2',
        // 'photo3',
        // 'photo4',
        // 'photo5',
        // 'video1',
        // 'video2',

        'experience_cinema',
        'combien_de_film',
        'experience_theatre',
        'combien_annee_theatre',
        'quel_cinema',
        'selection_envole',


    ];
    /**
     * The castings that belong to the candidat.
     */
    public function castings()
    {
        return $this->belongsToMany(Casting::class)->withPivot('note');
    }

    /**
     * Get the selections for the blog candidat.
     */
    public function selections()
    {
    	return $this->hasMany(Selection::class);
    }
    /**
     * Get the images for the blog candidat.
     */
    public function images()
    {
    	return $this->hasMany(Image::class);
    }
    /**
     * Get the files for the blog candidat.
     */
    public function files()
    {
    	return $this->hasMany(File::class);
    }
}

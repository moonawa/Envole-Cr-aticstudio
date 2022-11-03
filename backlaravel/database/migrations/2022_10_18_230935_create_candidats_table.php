<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidats', function (Blueprint $table) {
            $table->increments('id');
            $table->string('prenom')->nullable();
            $table->string('nom')->nullable();
            $table->string('email_candidat')->unique()->nullable();
            $table->string('telephone_candidat')->unique()->nullable();
            $table->string('selection_envole')->nullable();//Oui ou Non -----si le candidat a une fois travaillé avec envol ------
            $table->string('quel_cinema')->nullable(); //le film ou il a participé a envol
            $table->string('campagne_publicitaire')->nullable();//Oui ou Non -----si le candidat a une fois participé à un pub------
            $table->string('nom_campagne_publicitaire')->nullable(); 
            $table->string('experience_cinema')->nullable();
            $table->integer('combien_de_film')->nullable(); 
            $table->integer('les_films')->nullable(); 
            $table->string('experience_theatre')->nullable();
            $table->integer('combien_annee_theatre')->nullable(); 
            $table->integer('les_theatres')->nullable(); 

            $table->string('adresse_candidat')->nullable();
            $table->string('appreciation')->nullable(); //debutant, pas d'expérience, expérimenté
            $table->string('taille')->nullable();
            $table->string('profession')->nullable();
            $table->string('poids')->nullable();
            $table->string('teint')->nullable();
            $table->string('sexe')->nullable(); //0= femme, 1= homme
            $table->date('birthday')->nullable();
            $table->string('age')->nullable();
            $table->string('signe_particulier')->nullable(); //gros ventre
            $table->string('barbu')->nullable();
            $table->string('situation_matrimoniale')->nullable(); //marié(e)? : oui ou non 
            $table->integer('enfant')->nullable(); //nombre d'enfants
            $table->string('langues_parlees')->nullable(); 
            $table->string('role_interdit')->nullable(); //oui ou non 
            $table->string('lequel_role_interdit')->nullable(); 
            $table->string('role_souhaite')->nullable(); //oui ou non 
            $table->string('lequel_role_souhaite')->nullable(); 

            $table->string('nudite')->nullable();//non, oui, s'il peut jouer une scene de nudité
            $table->string('figurant')->nullable(); //non, oui, s'il peut accepter d'etre figurant
            $table->string('baiser')->nullable();//non, oui, s'il va accepter d'etre embrasser
            $table->string('pourquoi_cinema')->nullable(); //passion, argent, célébrité

            $table->string('couleur_cheveux')->nullable(); 
            $table->string('longueur_cheveux')->nullable(); //long, court, ou directement la taille, chauve, rasé
            $table->string('texture_cheveux')->nullable(); //frisé, lisse, crépu
            $table->string('teinture_cheveux')->nullable(); //oui ou non et quelle couleur
            $table->string('couleur_yeux')->nullable(); 
            $table->string('lentille_yeux')->nullable();; //oui ou non quelle couleur
            $table->string('forme_visage')->nullable(); //arrondi, plate...
            $table->string('percing')->nullable(); //oui ou non a quel endroit
            $table->string('cicatrice')->nullable(); //oui ou non a quel endroit
            $table->string('tatouage')->nullable(); //oui ou non a quel endroit
            $table->string('tache_naissance')->nullable(); //oui ou non a quel endroit
            $table->string('photo1')->default("degault.png")->nullable();
            $table->string('photo2')->nullable();
            $table->string('photo3')->nullable();
            $table->string('photo4')->nullable();
            $table->string('photo5')->nullable();
            $table->string('video1')->nullable();
            $table->string('video2')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candidats');
    }
};

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
            $table->string('email')->unique()->nullable();
            $table->string('telephone')->unique()->nullable();
            $table->string('selection_envole')->default(0); //si le candidat a une fois travaillé avec envol ------
            $table->string('quel_cinema')->nullable(); //le film ou il a participé a envol
            $table->string('experience_cinema')->default(0); 
            $table->integer('combien_de_film')->nullable(); 
            $table->string('experience_theatre')->default(0); 
            $table->integer('combien_annee_theatre')->nullable(); 
            $table->string('adresse')->nullable();
            $table->string('appreciation')->nullable(); //debutant, pas d'expérience, expérimenté
            $table->string('taille')->nullable();
            $table->string('profession')->nullable();
            $table->string('poids')->nullable();
            $table->string('teint')->nullable();
            $table->string('sexe')->default(0); //0= femme, 1= homme
            $table->date('birthday')->nullable();
            $table->string('age')->nullable();
            $table->string('signe_particulier')->nullable(); //gros ventre
            $table->string('barbu')->nullable();
            $table->string('situation_matrimoniale')->default(0); //0=célibataire , 1 = marié(e)//si la personne est marié(e)
            $table->integer('enfant')->nullable(); //nombre d'enfants
            $table->string('langues_parlees')->nullable(); 
            $table->string('role_interdit')->nullable(); //oui ou non et lequel
            $table->string('role_souhaite')->nullable(); //oui ou non lequel
            $table->string('nudite')->default(0); //0=non, 1=oui, s'il peut jouer une scene de nudité
            $table->string('figurant')->default(0); //0=non, 1=oui, s'il peut accepter d'etre figurant
            $table->string('baiser')->default(0); //0=non, 1=oui, s'il va accepter d'etre embrasser
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
            $table->string('photo1')->nullable();
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

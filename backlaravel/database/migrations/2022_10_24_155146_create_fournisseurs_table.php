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
        Schema::create('fournisseurs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable();
            $table->string('telephone')->unique();
            $table->string('pays')->nullable();
            $table->string('region')->nullable();
            $table->string('ville')->nullable();
            $table->string('prestation')->nullable(); //son, lumiere, maison, appartement, chaise, 
            $table->string('autre')->nullable();
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
        Schema::dropIfExists('fournisseurs');
    }
};

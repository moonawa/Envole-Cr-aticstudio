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
        Schema::create('castings', function (Blueprint $table) {
            $table->increments('id');
            $table->date('datecasting')->nullable();
            $table->string('namecasting')->unique()->nullable();
            $table->text('descriptioncasting')->nullable();
            $table->integer('colaborateur_id')->unsigned()->nullable();
            $table->foreign('colaborateur_id')->references('id')->on('colaborateurs')->onCascade('delete');
            $table->boolean('statuscasting')->default(0); //0 = encours ; 1= terminé
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
        Schema::dropIfExists('castings');
    }
};

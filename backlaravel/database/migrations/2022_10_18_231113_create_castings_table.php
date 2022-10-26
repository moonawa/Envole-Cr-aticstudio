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
            $table->date('date')->nullable();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->integer('colaborateur_id')->unsigned()->nullable();
            $table->foreign('colaborateur_id')->references('id')->on('colaborateurs')->onCascade('delete');
            $table->string('status')->default(1); //1=encours, 0 terminé
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

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
        Schema::create('candidat_casting', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('candidat_id')->unsigned();
            $table->foreign('candidat_id')->references('id')->on('candidats')->onCascade('delete');
            $table->integer('casting_id')->unsigned();
            $table->foreign('casting_id')->references('id')->on('castings')->onCascade('delete');
            $table->string('note')->nullable();
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
        Schema::dropIfExists('candidat_casting');
    }
};

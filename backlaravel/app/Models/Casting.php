<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Casting extends Model
{
    use HasFactory;
    protected $fillable = [
        'datecasting',
        'colaborateur_id',
        'namecasting',
        'descriptioncasting',
        'statuscasting'
    ];
    //protected $with = ['colaborateur'];

    /**
     * The candidats that belong to the casting.
     */
    public function candidats()
    {
        return $this->belongsToMany(Candidat::class,
         'candidat_casting')->withPivot('note')->withTimestamps();

    }

    /**
     * Get the colaborateur that owns the casting.
     */
    public function colaborateur()
    {
    	return $this->belongsTo(Colaborateur::class);
    }
    
   

   
}

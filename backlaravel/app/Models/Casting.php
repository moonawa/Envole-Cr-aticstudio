<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Casting extends Model
{
    use HasFactory;
    protected $fillable = [
        'date',
        'colaborateur_id',
        //'personel_id',
        'description'
    ];
    /**
     * Get the colaborateur that owns the casting.
     */
    public function colaborateur()
    {
    	return $this->belongsTo(Colaborateur::class);
    }
    
    /**
     * The candidats that belong to the casting.
     */
    public function candidats()
    {
        return $this->belongsToMany(Candidat::class)->withPivot('note'); 
    }
}

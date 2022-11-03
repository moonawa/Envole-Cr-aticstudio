<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colaborateur extends Model
{
    use HasFactory;
    protected $fillable = [
        'adresse_colaborateur',
        'description_colaborateur',
        'user_id'
    ];
    protected $with = ['user'];

    /**
     * Get the user that owns the phone.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    /**
     * Get the castings for the blog colaborateur.
     */
    public function castings()
    {
    	return $this->hasMany(Casting::class);
    }
}

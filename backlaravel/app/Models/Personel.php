<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personel extends Model
{
    use HasFactory;
    protected $fillable = [
        'metier',
        //'user_id'
    ];
    protected $with = ['user'];
    /**
     * Get the user that owns the personel.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    /**
     * Get the castings for the blog personel.
     */
    public function castings()
    {
    	return $this->hasMany(Casting::class);
    }
}

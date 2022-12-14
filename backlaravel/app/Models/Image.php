<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;protected $fillable = [
        'filename',
        'candidat_id'
    ];
    protected $with = ['candidat'];
    /**
     * Get the candidat that owns the image.
    */
    public function candidat()
    {
    	return $this->belongsTo(Candidat::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Selection extends Model
{
    use HasFactory;
    protected $fillable = [
        'candidat_id',
        'casting_id',
       'note'
    ];
    
    protected $with = ['candidat', 'casting'];

    /**
     * Get the candidat that owns the selection.
     */
    public function candidat()
    {
    	return $this->belongsTo(Candidat::class);
    }
    /**
     * Get the casting that owns the selection.
     */
    public function casting()
    {
    	return $this->belongsTo(Casting::class);
    }
}

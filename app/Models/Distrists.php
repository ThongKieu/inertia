<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distrists extends Model
{
    use HasFactory;
    protected $fillable =['dis_name','dis_sort_name'];
}

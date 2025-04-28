<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $fillable = [
        'code', 'discount_amount', 'discount_percentage', 'expiration_date', 'usage_limit', 'used_times'
    ];
}

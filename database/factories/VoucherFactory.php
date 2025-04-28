<?php

namespace Database\Factories;

use App\Models\Voucher;
use Illuminate\Database\Eloquent\Factories\Factory;

class VoucherFactory extends Factory
{
    protected $model = Voucher::class;

    public function definition()
    {
        return [
            'code' => $this->faker->unique()->word,
            'discount_amount' => $this->faker->randomFloat(2, 1, 100),
            'discount_percentage' => $this->faker->numberBetween(5, 50),
            'expiration_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'usage_limit' => $this->faker->numberBetween(1, 100),
            'used_times' => $this->faker->numberBetween(0, 50),
        ];
    }
}

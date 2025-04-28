<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class OrderFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()?->id ?? User::factory(),
            'total_price' => $this->faker->randomFloat(2, 100, 5000),
            'status' => $this->faker->randomElement(['pending', 'processing', 'completed']),
            'payment_status' => $this->faker->randomElement(['paid', 'unpaid']),
            'payment_method' => $this->faker->randomElement(['credit_card', 'paypal', 'cash']),
        ];
    }
}

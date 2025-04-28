<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // or Hash::make('password')
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'role' => $this->faker->randomElement(['customer', 'admin']),
            'remember_token' => Str::random(10),
        ];
    }
}

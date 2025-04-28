<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Cart;
use App\Models\Product;

class CartItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'cart_id' => Cart::inRandomOrder()->first()?->id ?? Cart::factory(),
            'product_id' => Product::inRandomOrder()->first()?->id ?? Product::factory(),
            'quantity' => $this->faker->numberBetween(1, 3),
        ];
    }
}

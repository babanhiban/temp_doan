<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class EcomerceSeeder extends Seeder
{
    public function run()
    {
        // User Seeder
        \App\Models\User::factory(50)->create();

        // Product Seeder
        \App\Models\Product::factory(100)->create();

        // Voucher Seeder (using factory)
        \App\Models\Voucher::factory(10)->create();

        // Order Seeder
        \App\Models\Order::factory(200)->create()->each(function ($order) {
            \App\Models\OrderItem::factory(rand(1, 5))->create([
                'order_id' => $order->id,
                'product_id' => \App\Models\Product::inRandomOrder()->first()->id,
            ]);
        });

        // Payment Seeder (using factory)
        \App\Models\Payment::factory(200)->create();

        // Cart Seeder
        \App\Models\Cart::factory(80)->create()->each(function ($cart) {
            \App\Models\CartItem::factory(rand(1, 3))->create([
                'cart_id' => $cart->id,
                'product_id' => \App\Models\Product::inRandomOrder()->first()->id,
            ]);
        });
    }
}

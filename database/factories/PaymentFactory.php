<?php

namespace Database\Factories;

use App\Models\Payment;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    protected $model = Payment::class;

    public function definition()
    {
        return [
            'order_id' => Order::factory(),
            'payment_method' => $this->faker->randomElement(['Credit Card', 'PayPal', 'Bank Transfer']),
            'amount' => $this->faker->randomFloat(2, 10, 500),
            'payment_status' => $this->faker->randomElement(['Pending', 'Completed', 'Failed']),
            'payment_date' => $this->faker->dateTimeThisYear(),
        ];
    }
}

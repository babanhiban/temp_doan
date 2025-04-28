<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'overviewStats' => [
                [
                    'label' => 'Tổng Đơn Hàng',
                    'value' => Order::count(),
                ],
                [
                    'label' => 'Tổng Doanh Thu',
                    'value' => number_format(Order::where('status', 'completed')->sum('total_price')) . '₫',
                ],
                [
                    'label' => 'Tổng Khách Hàng',
                    'value' => User::where('role', 'customer')->count(),
                ],
                [
                    'label' => 'Tổng Sản Phẩm',
                    'value' => Product::count(),
                ],
            ]
        ]);
    }
}

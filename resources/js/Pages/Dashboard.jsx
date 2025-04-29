import { Inertia } from '@inertiajs/inertia'; // Thêm dòng này
import { usePage } from '@inertiajs/react';
import Sidebar from '../Components/Sidebar';
import OverviewCard from '../Components/OverviewCard';

export default function Dashboard() {
  const { overviewStats } = usePage().props;

  const logout = () => {
    Inertia.post(route('logout')); // Gửi yêu cầu POST đến route logout mà không reload trang
};

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* Logout Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Đăng Xuất
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">Tổng Quan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {overviewStats.map((stat, index) => (
            <OverviewCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </main>
    </div>
  );
}

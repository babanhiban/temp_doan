import { usePage } from '@inertiajs/react';
import Sidebar from '../Components/Sidebar';
import OverviewCard from '../Components/OverviewCard';

export default function Dashboard() {
  const { overviewStats } = usePage().props;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
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
    
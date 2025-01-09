import { getChartsDataAction, getStatsAction } from '@/utils/actions';

async function StatsPage() {
  const result = await getStatsAction();
  console.log(result);

  const chartData = await getChartsDataAction();
  console.log(chartData);

  return <h1 className="text-4xl">Stats Page</h1>;
}

export default StatsPage;

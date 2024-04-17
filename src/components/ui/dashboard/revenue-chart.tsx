import { fetchRevenue } from "@/lib/data";
import { Revenue } from "@/lib/definitions";
import { generateYAxis } from "@/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default async function RevenueChart() {

  const chartHeight = 350;
  const revenue = await fetchRevenue();


  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="md:col-span-4 h-full flex flex-col justify-between">

      <h1 className="mb-4 text-gray-200 font-caveat font-semibold text-3xl">Recent Revenue</h1>

      {/* chart container */}
      <div className=" bg-zinc-800/60 p-2 rounded-lg flex flex-col grow justify-between">

        <div className='sm:grid-cols-13 grid grid-cols-12 items-end h-full mt-0 gap-2 rounded-md bg-zinc-900 p-2 md:gap-3'>

          <div className={` mb-6 hidden sm:flex flex-col justify-between text-gray-400 text-xs font-semibold font-comfortaa`}
            style={{ height: `${chartHeight}px` }}>
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {
            revenue.map((month) => (
              <div key={month.month} className="flex flex-col items-center gap-2">

                <div className={` w-full rounded-md bg-blue-600`}
                  style={{ height: `${(chartHeight / topLabel) * month.revenue}px` }}
                ></div>

                <p className=" h-6 -rotate-90 sm:rotate-0 text-xs text-gray-400">{month.month}</p>

              </div>
            ))
          }

        </div>

      </div>

      <div className="flex items-center h-10 font-medium">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
      </div>

    </div>
  );
}


{/* NOTE: comment in this code when you get to this point in the course */ }

{/* <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div> */}
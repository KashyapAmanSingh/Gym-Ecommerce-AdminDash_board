"use client"
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const fetchData = async () => {
//     try {
//                  const res = await fetch("/api/products", {
//                    cache: "no-store",
//                  });

//                  if (!res.ok) {
//                    throw new Error("Failed to fetch Product");
//                  }

//                          return res.json();
//                } catch (error) {
//                  console.error("Error loading Products", error);
//                  return { products: [] }; // Return an empty array in case of an error
//                }



//    };
const ChartBar = () => {

    const dailyRevenueArray = JSON.parse(sessionStorage.getItem('dailyRevenueArray'))
    const lastFiveTransactions = JSON.parse(sessionStorage.getItem('lastFiveTransactions'))

    console.log(dailyRevenueArray, "✨ ✨ ✨   ===============✨lastFiveTransactions✨=======>>>>>>>>>✨l ✨>>>>✨   lastFiveTransactions✨", lastFiveTransactions)


    const arr3 = [
        { date: "2023-10-18", revenue: 31882, count: 8 },
        { date: "2023-10-19", revenue: 41882, count: 8 },
        { date: "2023-10-20", revenue: 21885, count: 14 },
        { date: "2023-10-21", revenue: 61582, count: 12 },
        { date: "2023-10-22", revenue: 91846, count: 10 },
        { date: "2023-10-23", revenue: 11892, count: 6 },
        { date: "2023-10-24", revenue: 26548, count: 9 },
        { date: "2023-10-25", revenue: 37963, count: 15 },
        { date: "2023-10-26", revenue: 49271, count: 12 },
        { date: "2023-10-27", revenue: 56437, count: 14 },
        { date: "2023-10-28", revenue: 67829, count: 13 },
        { date: "2023-10-29", revenue: 71258, count: 11 },
        { date: "2023-10-30", revenue: 85426, count: 9 },
        { date: "2023-10-31", revenue: 92641, count: 8 },
        { date: "2023-11-01", revenue: 103582, count: 6 },
    ];

    const arr4 = [
        { month: "January", revenue: 5000, count: 300 },
        { month: "February", revenue: 60000, count: 220 },
        { month: "March", revenue: 7500, count: 150 },
        { month: "April", revenue: 90000, count: 210 },
        { month: "May", revenue: 10500, count: 121 },
        { month: "June", revenue: 120000, count: 240 },
        { month: "July", revenue: 13500, count: 170 },
        { month: "August", revenue: 150000, count: 430 },
        { month: "September", revenue: 165000, count: 330 },
        { month: "October", revenue: 18000, count: 360 },
        { month: "November", revenue: 195000, count: 390 },
        { month: "December", revenue: 21000, count: 420 }
    ]


    // useEffect(() => {
    //     const fetchDataAndLog = async () => {
    //       try {
    //         const data = await fetchData();
    //         console.log("Fetched products: 👉 👉 👉 👉    ===============👉 =======>>>>>>>>>👉 👉 >>>>👉   FETCHED ONE  ✨ ", data.products.slice(-5).reverse());
    //       } catch (error) {
    //         console.error("Error in fetchDataAndLog:", error);
    //       }
    //     };

    //     fetchDataAndLog();
    //   }, []);



    const categoryData = [
        {
            category: "Supplement",
            revenue: 5000,
            count: 1000,
            maxRange: 9999
        },
        {
            category: "Nutrient",
            revenue: 3500,
            count: 750,
            maxRange: 9999
        },
        {
            category: "Footwear",
            revenue: 6000,
            count: 1200,
            maxRange: 9999
        },
        {
            category: "Equipment",
            revenue: 7000,
            count: 800,
            maxRange: 9999
        },
        {
            category: "Other",
            revenue: 5000,
            count: 500,
            maxRange: 9999
        },
    ];

    return (
        <div>
            <h1>Chart UI</h1>

            <div className='container-fluid'>
                <div className='row my-3'>
                    <div className='col-sm-6'>
                        <ResponsiveContainer width="100%" height={400}>

                            <AreaChart width={1250} height={470} data={arr4}    //arr 2 is also okay but data object of only 3 day so to show we use this
                                margin={{ top: 10, right: -5, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" />
                                <YAxis
                                    yAxisId="revenue"
                                    domain={[0, 200000]}  // Set the domain to 2 lakhs
                                    ticks={[0, 40000, 80000, 120000, 160000, 200000]}  // Define custom ticks up to 2 lakhs
                                    tickFormatter={(value) => `₹${value}`} // Format as currency
                                />

                                <YAxis

                                    yAxisId="count"
                                    orientation="right"
                                    domain={[0, 20]}  // Adjust the domain based on your data
                                    ticks={[0, 5, 10, 15, 20]}
                                />
                                <CartesianGrid strokeDasharray="10 10" stroke="red" />
                                <Tooltip />
                                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" yAxisId="revenue" />
                                <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" yAxisId="count" />
                                <Legend />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>
                    <div className='col-sm-6'>

                        <ResponsiveContainer width="100%" height={400}>

                            <ComposedChart width={1250} height={400} data={arr4}
                                margin={{ top: 10, right: 15, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="0 1" />
                                <XAxis dataKey="month" />
                                <YAxis
                                    yAxisId="revenue"
                                    domain={[0, 200000]}  // Set the domain to 2 lakhs
                                    ticks={[0, 40000, 80000, 120000, 160000, 200000]}  // Define custom ticks up to 2 lakhs
                                    tickFormatter={(value) => `₹${value}`} // Format as currency
                                />

                                <YAxis

                                    yAxisId="count"
                                    orientation="right"
                                    domain={[0, 1000]}  // Adjust the domain based on your data
                                    ticks={[0, 200, 400, 600, 800, 1000]}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#8884d8" yAxisId="revenue" />
                                <Bar dataKey="count" fill="#82ca9d" yAxisId="count" />
                                <Line type="monotone" dataKey="count" stroke="#ff7300" yAxisId="count" />

                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                {/* <div className='col-sm-12'>
                    <ResponsiveContainer width="100%" height={400}>

                        <ComposedChart width={1250} height={400} data={arr4}
                            margin={{ top: 10, right: 15, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="0 1" />
                            <XAxis dataKey="month" />
                            <YAxis
                                yAxisId="revenue"
                                domain={[0, 200000]}  // Set the domain to 2 lakhs
                                ticks={[0, 40000, 80000, 120000, 160000, 200000]}  // Define custom ticks up to 2 lakhs
                                tickFormatter={(value) => `₹${value}`} // Format as currency
                            />

                            <YAxis

                                yAxisId="count"
                                orientation="right"
                                domain={[0, 1000]}  // Adjust the domain based on your data
                                ticks={[0, 200, 400, 600, 800, 1000]}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#8884d8" yAxisId="revenue" />
                            <Bar dataKey="count" fill="#82ca9d" yAxisId="count" />
                            <Line type="monotone" dataKey="count" stroke="#ff7300" yAxisId="count" />

                        </ComposedChart>
                    </ResponsiveContainer>
                </div> */}


                <div className='row my-3'>

                    <div className='col-sm-6   '>
                        <h4 className='fw-bold text-center text-info my-3'> Category Status</h4>
                        <ResponsiveContainer width="100%" height={410}>
                            <RadarChart
                                cx={290}
                                cy={210}
                                outerRadius={190}
                                innerRadius={10}
                                width={590}
                                height={410}
                                data={categoryData}
                            >
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis />
                                {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}

                                <Radar
                                    name="Revenue"
                                    dataKey="revenue"
                                    stroke="white"
                                    fill="red" fillOpacity={0.7} />
                                <Radar name="Count"
                                    dataKey="count"
                                    stroke="white" fill="coral" fillOpacity={0.8} />
                                <Legend />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>


                    <div className='col-sm-6    '>
                        <h4 className='fw-bold my-3 text-center text-info'> Recent Transaction</h4>
                        <table className='table table-borderless table-dark'>
                            <thead className='border-bottom  border-secondary text-center m-0 p-0'>
                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Customer Name</th>
                                    <th className='text-end'>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lastFiveTransactions.map((dataKey, i) => (
                                    <tr key={i} className='small text-center m-0 p-0'>
                                        <td>{dataKey.id}</td>
                                        <td>{dataKey.CustomerName}</td>
                                        <td className='text-center fw-bold text-bg-warning'>₹{dataKey.paidAmount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ChartBar;


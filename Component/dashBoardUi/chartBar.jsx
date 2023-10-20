"use client"
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';


const ChartBar = () => {
    const [data, setData] = useState([]);
    const [rating, setRating] = useState([]);
    const arr = sessionStorage.getItem('dayRevenueArray')
    const arr2 = JSON.parse(arr)
    console.log("_________________________ __________________~ arr json parsed ", arr2);
    // const dayRevenueArray = Object.entries(arr2).map(([date, revenue]) => ({
    //     date,
    //     revenue
    //   }));


    //   console.log(mergedData, "----------------------------------------------------------", flattenedData);
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





    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setData(res.data);

                const { rating } = res.data[0];
                setRating(rating);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const mergedData = data.map(item => ({
        title: item.title,
        price: item.price,
        rating: {
            rate: item.rating.rate + Math.floor(Math.random() * (300 - 10 + 1) + 10),
            count: item.rating.count,
        },
    }));
    // const ratings = [];
    const flattenedData = mergedData.map(item => ({
        title: item.title,
        price: item.price,
        ratingRate: item.rating.rate,
        ratingCount: item.rating.count,
    }));
    // for (const [key,] of Object.entries(mergedData)) {
    //     ratings.push({ key: key,: });
    // }


    // Accessing the properties of the first item in mergedData
    const flattenedDataa = [
        { title: 'Category A', mikeRatingCount: 50, lilyRatingCount: 75 },
        { title: 'Category B', mikeRatingCount: 30, lilyRatingCount: 40 },

    ];

    // const data1 = [
    //     { subject: "S1", A: 35 },
    //     { subject: "S2", A: 90 },
    //     { subject: "S3", A: 50 },
    //     { subject: "S4", A: 94 },
    //     { subject: "S5", A: 93 }
    //   ];

    return (
        <div>
            <h1>Chart UI</h1>

            {/* { date: "2023-11-01", revenue: 31882 } */}
            <AreaChart width={1400} height={600} data={arr3}    //arr 2 is also okay but data object of only 3 day so to show we use this
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
                <XAxis dataKey="date" />
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
                <CartesianGrid strokeDasharray="3 3" stroke="red" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" yAxisId="revenue" />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" yAxisId="count" />
            </AreaChart>


            <ComposedChart width={1400} height={600} data={flattenedData}>
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="ratingRate" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="ratingCount" stroke="#ff7300" />
            </ComposedChart>











            {/* <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      innerRadius={ 50}
      width={500}
      height={500}
      data={data1}
    >
      <PolarGrid gridType="circle" />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="yellow"
        fillOpacity={0.6}
      />
    </RadarChart> */}




            {/* 
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="ratingCount" nameKey="ratingRate" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={flattenedData} dataKey="ratingCount" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart> */}


            {/* <RadarChart outerRadius={190} width={730} height={550} data={flattenedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="title" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <CartesianGrid stroke="#f5f5f5" />
                <Radar name="Mike" dataKey="ratingRate" stroke="green"
                    fill="red" fillOpacity={0.5} />
                <Radar name="Lily" dataKey="ratingCount" stroke="yellow" fill="blue" fillOpacity={0.6} />
                <Legend />
            </RadarChart> */}














            {/* <RadialBarChart
                width={1230}
                height={650}
                innerRadius="10%"
                outerRadius="80%"
                data={flattenedData}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar minAngle={415} label={{ fill: 'red', position: 'insideStart' }} background clockWise={true} dataKey='ratingCount' />
                <Legend iconSize={10} width={120} height={540} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
            </RadialBarChart>   */}

        </div>
    );
};

export default ChartBar;











// {data.map((product) => (
//     <li key={product.id}>{product.title}</li>
// ))}


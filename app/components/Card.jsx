"use client"
import React from 'react'
import { useState, useEffect } from 'react';

const Card = ({ title, description, img, category, mon, token, time, medium, venue, isPaid }) => {
    // const datemodify = date.split('T')[0].split('-')[2];
    // const [sdate, setsdate] = useState("");
    // const [Smonth, setSmonth] = useState("");

    // useEffect(() => {
    //     let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    //     setsdate(() => {
    //         try {
    //             let mod = date.split('T')[0].split('-')[2];

    //             return mod;
    //         }
    //         catch {
    //             return date;
    //         }
    //     })
    //     setSmonth(() => {
    //         try {
    //             let mod = date.split('T')[0].split('-')[1];
    //             //  console.log("Hello");
    //             console.log(title)
    //             console.log(months[mod - 1]);
    //             return months[mod - 1];
    //         }
    //         catch {
    //             console.log(title);
    //             console.log("Error pe error ho raha !!!!!")
    //             return mon;
    //         }

    //     })

    // }, [])


    return (

        <div className="
        shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-72 h-64">
            <img src="./hammer.jpg" alt="Event" className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {/* <p className="text-gray-600 text-sm">{description}</p> */}
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="text-blue-600 font-medium">{category}</span>
                <span className="text-gray-600 text-sm">Tokens: {token}</span>
            </div>
        </div>

    )
}

export default Card

import { useEffect, useState } from "react";
import axios from "axios";


export default function List({ covids }) {

    return (
        <>
            <h1>Vietnam's Covid-19 infomation</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>States</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th>Death</th>
                    </tr>
                </thead>
                <tbody>
                    {covids.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.date}</td>
                                <td>{value.states}</td>
                                <td>{value.positive}</td>
                                <td>{value.negative}</td>
                                <td>{value.death}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export async function getStaticProps() {
    const result = await axios.get(`https://api.covidtracking.com/v1/us/daily.json`);
    const covids = result.data;
    return {
        props: {
            covids
        }
    }
}


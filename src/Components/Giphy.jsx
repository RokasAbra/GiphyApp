import axios from "axios";
import React, { useEffect, useState} from "react";

const Giphy = () => {

    const[data, setData] = useState([]);
    useEffect(() => {
        const fetchData= async () => {
           const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "nLAwTq1WjbSJH9C9lAps3XE0vMJclLJB"
                }
            });
            console.log(results);
            setData(results.data.data)
        }
        fetchData()
    }, []);

    return <div>Giphy</div>
}

export default Giphy;
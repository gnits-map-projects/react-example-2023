import React, {useEffect, useState} from "react";
import axios from "axios";

function DogsList () {
    const [dogData, setDogsData] = useState([])

    useEffect(() => {
        function fetchData () {
            axios.get("https://api.thedogapi.com/v1/breeds/search?name=dog")
            // .then(({ data }) => {
            //     console.log(data, 'data')
            // })
            // .catch((error) => console.log(error));
            // }
        }
        fetchData();
    }, []);

    return (
        <div>Dogs list</div>
    )
}

export default DogsList;

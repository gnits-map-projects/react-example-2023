import React, {useEffect, useState, useContext} from "react";
import axios from "axios";

function DogsList () {
    const [dogsData, setDogsData] = useState([])

    useEffect(() => {
        function fetchData () {
            axios.get("https://api.thedogapi.com/v1/breeds/search?name=dog")
                .then(({ data }) => {
                    setDogsData(data);
                })
                .catch((error) => console.log(error));
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>Dogs list</div>
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Life Span</th>
                <th>Breed Group</th>
                <th></th>
                <th></th>
              </tr>
              {dogsData.map(({id, name, life_span, breed_group}) => 
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{life_span}</td>
                  <td>{breed_group}</td>
                  <td><button>Update</button></td>
                  <td><button>Delete</button></td>
                </tr>
              )}
            </table>
        </div>

    )
}

export default DogsList;

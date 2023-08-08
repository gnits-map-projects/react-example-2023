import React, {useEffect, useState} from "react";
import AuthenticationPage from "./AuthenticationPage"; 

function Posts() {
    const [posts, setPosts] = useState([]);
    const [showPage, setPage] = useState('list');
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        // Getting all records
        function fetchData () {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => setPosts(json));
        }
        fetchData();
    }, []);
    console.log(posts)

    const handleDelete = async (id) => {
        // Deleting record
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          }).then(() => alert(`Record ${id} is deleted`))
    }

    const handleUpdate = async ({id, userId, title, body}) => {
        // Updating record
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title: "Title changed",
                body,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = async () => {
        // Creates record
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: inputs.title,
                body: inputs.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => alert('Post created'));
    }

    return (
        <AuthenticationPage>
        <div>
            <button onClick={() => setPage('form')}>Show Create Form</button>
            <button onClick={() => setPage('list')}>Show Post list</button>
            {showPage === 'list' &&
                <div>
                    <div>Posts</div>
                    <table>
                    <tr>
                        <th>ID</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {posts.map(({id, userId, title, body}) => 
                        <tr>
                        <td>{id}</td>
                        <td>{userId}</td>
                        <td>{title}</td>
                        <td>{body}</td>
                        <td><button onClick={() => handleUpdate({id, userId, title, body})}>Update</button></td>
                        <td><button onClick={() => handleDelete(id)}>Delete</button></td>
                        </tr>
                    )}
                    </table>
                </div>
            }
            {showPage === 'form' &&
              <form onSubmit={handleSubmit}>
                <br /><br />
                <label>Post Title:
                <input
                    type="text" 
                    name="title" 
                    value={inputs.title || ""} 
                    onChange={handleChange}
                />
                </label><br />
                <label>Post Body:
                    <input 
                    type="text" 
                    name="body" 
                    value={inputs.body || ""} 
                    onChange={handleChange}
                    />
                    </label><br /><br />
                    <input type="submit" />
                </form>
            }
        </div>
       </AuthenticationPage>
    )
}

export default Posts;

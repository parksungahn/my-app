import useFetch from "./useFetch";


const baseURL = "https://jsonplaceholder.typicode.com";
const New_useFetch = () => {
    const { data: userData} = useFetch(baseURL, 'users');
    const { data: postData} = useFetch(baseURL, 'posts');

    return(
        <div>
            <h1>useFetch</h1>
            {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
            {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
        </div>
    );
};

export default New_useFetch;

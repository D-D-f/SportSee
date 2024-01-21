import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const UseCallApi = (user: string, path?: string) => {
    const apiUrl = path ? `http://localhost:3000/user/${user}/${path}` : `http://localhost:3000/user/${user}`;

    const { data, error, isLoading } = useSWR(
        apiUrl,
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return [data]
}

export default UseCallApi;
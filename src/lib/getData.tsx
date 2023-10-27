export async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

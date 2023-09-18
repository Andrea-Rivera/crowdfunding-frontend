async function postProject() {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token =window.localStorage.getItem("token")
    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
            "Content-Type": "application/json",
            "Authentication":`Token ${token}`
        },
        body: JSON.stringify({
            title: '',
            description: '',
            goal: 0,
            image:'',
            is_open:false,
            date_created:'',
            owner: ''

        }),
    });
    console.log(response)

    if (!response.ok) {
        const fallbackError = `Error trying to create the project`;
    
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postProject;
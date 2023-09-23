async function deleteProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}`;
    const token =window.localStorage.getItem("token")
    const response = await fetch(url, {
        method: "DELETE", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Token ${token}`
        },
        body: JSON.stringify(projectData),
    });
    console.log(response)

    if (!response.ok) {
        const fallbackError = `Error trying to edit the project`;
    
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();

}

export default deleteProject;
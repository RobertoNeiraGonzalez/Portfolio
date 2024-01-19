import api from "./config"

const getAllProjects = async () => {
  try {
    const { data } = await api.get("/project", {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllProjects
}
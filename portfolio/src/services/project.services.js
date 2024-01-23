import api from "./config"

const getAllProjects = async () => {
  try {
    const { data } = await api.get("/project")
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllProjects
}
import api from "./config"

const getAllbackground = async () => {
  try {
    const { data } = await api.get("/background")
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllbackground
}
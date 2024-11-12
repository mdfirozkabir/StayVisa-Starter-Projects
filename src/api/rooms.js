import axiosSecure from "."

//fetch all rooms from DB
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data
}

//fetch all rooms for Host
export const getHostRooms = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data
}

//fetch Single room from DB
export const getRoom = async id => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data
}

//Save a Room in database
export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post(`/rooms`, roomData)
    return data
}

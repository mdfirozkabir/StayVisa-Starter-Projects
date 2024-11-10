import axiosSecure from "."

//fetch all rooms from DB
export const getAllRooms = async () => {
    const {data} = await axiosSecure('/rooms')
    return data
}

//fetch Single room from DB
export const getRoom = async id => {
    const {data} = await axiosSecure(`/room/${id}`)
    return data
}
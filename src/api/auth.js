import axiosSecure from "."

//saveUser data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: "guest",
        status: "verified",
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}

//Get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email)
    return data
}

//Clear token from browser
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data
}

//Get user role from server
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role
}
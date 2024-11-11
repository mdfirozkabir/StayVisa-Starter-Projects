import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";


const AddRoom = () => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const location = form.location.value
        const category = form.category.value
        const title = form.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = form.price.value
        const guest = form.total_guest.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const bedrooms = form.bedrooms.value
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }
        const image_url = await imageUpload(image)
        const roomData = {
            location,
            category,
            title,
            from,
            to,
            price,
            guest,
            bathrooms,
            description,
            bedrooms,
            image: image_url?.data?.display_url,
            host,
        }
        console.table(roomData)
    }

    // Handle date change from react-date-range calender
    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    // Handle image button change
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet>
                <title> Add Room | Dashboard</title>
            </Helmet>

            {/* from */}
            <AddRoomForm
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
            />
        </div>
    );
};

export default AddRoom;
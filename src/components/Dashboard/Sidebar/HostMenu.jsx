import { MdHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";


const HostMenu = () => {
    return (
        <>
            {/* Add Room */}
            <MenuItem
                icon={MdHomeWork}
                label='Add Room'
                address='add-room'
            />
            <MenuItem
                icon={BsFillHouseAddFill}
                label='My Listings'
                address='my-listings'
            />
        </>
    );
};

export default HostMenu;
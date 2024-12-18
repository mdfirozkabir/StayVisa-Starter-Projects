/* eslint-disable react/prop-types */

import Calender from "./Calender";
import Button from "../Button/Button";
import { formatDistance, parseISO } from "date-fns"
import { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";


const RoomReservation = ({ room }) => {
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const toDate = parseISO(room.to);
    const fromDate = parseISO(room.from);
    const price = room.price
    let totalPrice
    if (isNaN(toDate) || isNaN(fromDate)) { }
    else {
        const totalDays = parseInt(formatDistance(toDate, fromDate).split(' ')[0])
        totalPrice = totalDays * price

    }

    const [value, setValue] = useState({
        startDate: room?.from ? new Date(room.from) : new Date(),
        endDate: room?.to ? new Date(room.to) : new Date(),
        key: 'selection'
    });


    const [bookingInfo, setBookingInfo] = useState({
        guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
        },
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to: value.endDate,
        from: value.startDate,
        title: room?.title,
        roomId: room._id,
        image: room?.image,
    })

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}</div>
                <div className="font-light text-neutral-600"> night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender value={value} />
            </div>
            <hr />
            <div className="p-4">
                <Button onClick={() => setIsOpen(true)} label={'Reserve'} />
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div className="">Total</div>
                <div className="">$ {totalPrice}</div>
            </div>
            <BookingModal
                closeModal={closeModal}
                isOpen={isOpen}
                bookingInfo={bookingInfo}
            />
        </div>
    );
};

export default RoomReservation;
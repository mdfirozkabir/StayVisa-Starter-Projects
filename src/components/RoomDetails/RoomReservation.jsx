/* eslint-disable react/prop-types */


import Calender from "./Calender";
import Button from "../Button/Button";
import { formatDistance, parseISO } from "date-fns"
// 

const RoomReservation = ({ room }) => {

    const toDate = parseISO(room.to);
    const fromDate = parseISO(room.from);
    const price = room.price
    let totalPrice
    if (isNaN(toDate) || isNaN(fromDate)) { }
    else {
        const totalDays = parseInt(formatDistance(toDate, fromDate).split(' ')[0])
        totalPrice = totalDays * price

    }
    // video player here if needed 23:35 minutes
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}</div>
                <div className="font-light text-neutral-600"> night</div>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender />
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'} />
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div className="">Total</div>
                <div className="">$ {totalPrice}</div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default RoomReservation;
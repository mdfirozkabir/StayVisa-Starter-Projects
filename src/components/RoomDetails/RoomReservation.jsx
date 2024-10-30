/* eslint-disable react/prop-types */

import Calender from "./Calender";
import Button from "../Button/Button";
// import { formatDistance } from "date-fns";

const RoomReservation = ({ room }) => {
    
    const toDate = room.to
    const fromDate = room.from
    console.log(toDate);
    console.log(fromDate);
    // const parseDate = parseInt(toDate, 'yyyy-MM-dd', new Date());
    // console.log(parseDate);
    // const totalDays = formatDistance(new Date('fromDate'), new Date('toDate'));
    // console.log(totalDays);

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
                <div className="">$ {room?.price}</div>

            </div>
            <div>
            </div>
        </div>
    );
};

export default RoomReservation;
/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const Calender = ({ value }) => {
    return (
        <DateRange
            rangeColors={['#F43F5E']}
            // ranges={[value]}
            direction='vertical'
            showDateDisplay={false}
        />
    )
}

export default Calender
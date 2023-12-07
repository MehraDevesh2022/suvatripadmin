import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Contactform from './Contact/Contactform'
import Basic from './BasicDetails/Basic'
import Picture from './Photos/Picture'
import Facility from './Facility/Facility'
import Rate from './RatePlan/Rate'
import Hotel from './HotelRules/Hotel'
import Payment from './paymentPolicy/Payment'
import Park from './Parking/Park'
import Transportation from './Transpoartion/Transport'
import Document from './Document/Doc'
import RoomSetUp from './RoomSet-up/RoomSetUp'




function NestedRoutes() {
    console.log("its rendered")
    return (

        <Routes>
            <Route path='/' element={<Contactform />} />
            <Route path='basic' element={< Basic />} />
            <Route path='basic/photos' element={< Picture />} />
            <Route path='basic/photos/facility' element={< Facility />} />
            <Route path='basic/photos/facility/room-setup' element={< RoomSetUp />} />
            <Route path='basic/photos/facility/rate' element={< Rate />} />
            <Route path='basic/photos/facility/rate/hotel-rules' element={< Hotel />} />
            <Route path='basic/photos/facility/rate/hotel-rules/paymnet' element={< Payment />} />
            <Route path='basic/photos/facility/rate/hotel-rules/paymnet/park' element={< Park />} />
            <Route path='basic/photos/facility/rate/hotel-rules/paymnet/park/transportation' element={< Transportation />} />
            <Route path='basic/photos/facility/rate/hotel-rules/paymnet/park/transportation/document' element={< Document />} />



        </Routes>

    )
}

export default NestedRoutes

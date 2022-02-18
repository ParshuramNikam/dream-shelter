import React from "react"
import OneNotication from "../components/OneNotication"

const NoticationPage = () => {
    return (
        <section className="max-w-xl mx-auto p-3 my-3 bg-white border rounded border-gray-200 shadow-md">
            <h1 className="pb-3 font-semibold text-lg">Notifications</h1>
            <OneNotication/>
            <OneNotication/>
            <OneNotication/>
            <OneNotication/>
            <OneNotication/>
            <OneNotication/> 
            <OneNotication/>
        </section>
    )
}

export default NoticationPage

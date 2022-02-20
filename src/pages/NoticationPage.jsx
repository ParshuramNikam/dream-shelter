import { BellIcon } from "@heroicons/react/outline"
import { useState } from "react"
import OneNotication from "../components/OneNotication"
import { notifications } from "../dummy-data/data"

const NoticationPage = () => {

    const [userNotifications] = useState(notifications);

    return (
        <section className="max-w-4xl mx-auto p-1 my-2">
            <h1 className="pb-3 mx-3 font-semibold text-lg">
                Notifications
                <BellIcon className="ml-1 h-7 w-7 fill-gray-300 stroke-current inline-block relative bottom-0.5" />
            </h1>
            {
                userNotifications.map(notification =>
                    <OneNotication
                        key={notification.id} id={notification.id} img={notification.img}
                        timestamp={notification.timestamp} title={notification.title} desc={notification.desc}
                        read={notification.read}
                    />
                )
            }
        </section>
    )
}

export default NoticationPage

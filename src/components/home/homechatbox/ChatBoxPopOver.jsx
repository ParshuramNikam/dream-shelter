import React from 'react'
import { Popover } from "@headlessui/react";

export const ChatBoxPopOver = () => {
  return (
    <Popover.Panel className="absolute z-10 w-full h-96 bg-white h-full border-2 border-red-600">
    <div className="grid grid-cols-2">
      <a href="/analytics">Analytics</a>
      <a href="/engagement">Engagement</a>
      <a href="/security">Security</a>
      <a href="/integrations">Integrations</a>
    </div>

    <img src="/solutions.jpg" alt="" />
  </Popover.Panel>
  )
}

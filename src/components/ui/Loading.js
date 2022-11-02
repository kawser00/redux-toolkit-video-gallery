import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="col-span-12 flex justify-center min-h-screen mt-52">
      <HashLoader
        color="#e06ef3"
        size={80}
      />
    </div>
  )
}

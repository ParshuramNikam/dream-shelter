import { useState } from 'react'

const UploadImage = ({banner, setBanner}) => {

    return (
        <div className="flex my-2">
            <div className="mb-3 max-w-xs">
                <label htmlFor="formFile" className="form-label inline-block mb-1 font-semibold">Uplaod Banner Image for blog :</label>
                <input className="form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file" id="formFile" accept='image/*' onChange={(e) =>  setBanner(e.target.files[0]) }
                />
            </div>
        </div>
    )
}

export default UploadImage
import React from 'react'

function LinkSocial({ link }) {
    return (
        <section className='bg-[#1D546C] font-semibold w-full mt-4 py-2 rounded-2xl cursor-pointer hover:bg-sky-500 hover:text-black transition duration-300'>
            <div>{link}</div>
        </section>
    )
}

export default LinkSocial
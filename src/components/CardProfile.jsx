import LinkSocial from './LinkSocial'

function CardProfile({ nama, address, skill }) {
    return (
        <>
            <section className="bg-[#1A3D64] rounded-2xl p-8 text-[#f4f4f4] flex flex-col justify-center items-center">
                <img className='rounded-full' src="https://dummyimage.com/250x250/000/fff" alt="Pic Profile" />
                <h1 className="font-bold text-3xl mt-2">{nama}</h1>
                <h2 className="font-semibold text-2xl text-yellow-300">{address}</h2>
                <p className="mt-6">{skill}</p>
                <LinkSocial link="Github" />
                <LinkSocial link="LinkedIn" />
                <LinkSocial link="Instagram" />
            </section>
        </>
    );
}

export default CardProfile;

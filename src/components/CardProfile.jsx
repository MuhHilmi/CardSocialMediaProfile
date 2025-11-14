import LinkSocial from './LinkSocial'

function CardProfile({ nama, address, skill }) {
    return (
        <>
            <section className="bg-[#1f1f1f] rounded-2xl p-8 text-[#f4f4f4] flex flex-col justify-center items-center">
                <img className='rounded-full' src="/src/img/avatar-jessica.jpeg" alt="Pic Profile" />
                <h1 className="font-bold text-3xl mt-2">{nama}</h1>
                <h2 className="font-semibold text-2xl text-[#79941e]">{address}</h2>
                <p className="mt-6">{skill}</p>
                <LinkSocial link="Github" />
                <LinkSocial link="Frontend Mentor" />
                <LinkSocial link="LinkedId" />
                <LinkSocial link="Twitter" />
                <LinkSocial link="Instagram" />
            </section>
        </>
    );
}

export default CardProfile;

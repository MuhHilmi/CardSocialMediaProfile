import CardProfile from "./components/CardProfile"

function SocialProfile() {
  return (
    <div className="bg-[#141414] flex flex-col text-center justify-center items-center p-3 min-w-full min-h-screen border">
      <CardProfile nama="Jessica Randall" address="London, United Kingdom" skill='"Front-end developer and avid reader."' />
    </div>
  )
}

export default SocialProfile

function Profile({image, name}) {
  return (
    <>
      <section className="flex flex-col items-center py-16">
        <img
          src={image}
          alt={name}
          className=" w-64
      h-64
      rounded-full
      object-cover
      border-2
      border-violet-500
      shadow-xl"
        />
        <h2 className="text-4xl font-bold mt-8 text-white">Frontend Developer</h2>
        <p className="mt-4 text-white">I love building modern web applications</p>
      </section>
    </>
  );
}
export default Profile;

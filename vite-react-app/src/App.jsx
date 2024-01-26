import Chai from "./Chai";
function App() {
  return (
    <>
    <Chai />
    <p>This is Fragment Para</p>
    </>
  )
}

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

  function Gallery() {
  return (
    <section style={{background:'black',display:"flex",alignItems:"center",justifyContent:"center",height:"300px"}}>
<h1 style={{ color: 'white',fontSize:"30px",marginRight:"45px" }}>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Avatar />
    </section>
  );
}


export { App, Gallery, Profile };


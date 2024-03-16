import React from "react";

function Card({ gitHubInfo }) {
  return (
    <div className="container">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-3 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                gitHubInfo.location
              )}&output=embed`}
              style={{ filter: "grayscale(0) contrast(1.2) opacity(100%)" }}
            ></iframe>

            <div className="bg-gray-900 relative flex flex-wrap py-6 w-full  rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-blue-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">{gitHubInfo.location}</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-blue-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  {gitHubInfo.email ? gitHubInfo.email : "example@gmail.com"}
                </a>
                <h2 className="title-font font-semibold text-blue-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>

          <div className="w-80 border rounded-lg flex justify-center items-center flex-col">
            <img
              src={`${gitHubInfo.avatar_url}`}
              className="w-60 rounded-full"
              alt="..."
            />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                {gitHubInfo.name}
              </h5>
              <p>{gitHubInfo.bio}</p>
              <p>
                Followers: {gitHubInfo.followers} Following:{" "}
                {gitHubInfo.following}
              </p>

              <a
                href={`https://twitter.com/${gitHubInfo.twitter_username}`}
                target="_blank"
                className="bg-green-500 hover:bg-green-400 text-white px-2 py-2 mx-1 inline-block mt-4 rounded"
              >
                Visit Twitter
              </a>
              <a
                href={`${gitHubInfo.html_url}`}
                target="_blank"
                className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;

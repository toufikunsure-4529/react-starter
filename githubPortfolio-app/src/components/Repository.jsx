import React from "react";

function Repository({ gitRepoInfo }) {
  // Ensure gitRepoInfo is an array before mapping over it
  if (!Array.isArray(gitRepoInfo)) {
    // Return some fallback UI or error message if gitRepoInfo is not an array
    return <div>Error: gitRepoInfo is not an array</div>;
  }

  return (
    <>
      <section className="relative overflow-hidden py-10  ">
        <div className="relative mx-auto max-w-7xl px-4 ">
          <div className="mx-auto mb-20 max-w-2xl text-center lg:max-w-5xl ">
            <h3 className="mb-8 text-sm font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl ">
              GitHub Repositories
            </h3>
          </div>

          <div className="mx-auto max-w-8xl  ">
            <div className="flex flex-wrap items-center justify-center mb-3 gap-2  ">
              {gitRepoInfo.map((repo) => (
                <div className=" w-full lg:-mt-0 lg:w-1/4  " key={repo.id}>
                  <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16 ">
                    <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 mb-2 "></div>

                    <span className="flex items-end text-white pt-10 mt-2">
                      <span className="text-xl font-extrabold leading-none text-center">
                        {repo.name.toUpperCase()}
                      </span>
                    </span>

                    <div className="mt-7 border-t border-orange-500 pt-5">
                      <ul className="mb-10">
                        <li className="mb-6 flex items-center">
                          <span className="ml-2 text-sm text-white">
                            Visibility: {repo.visibility}
                          </span>
                        </li>
                        <li className="mb-6 flex items-center">
                          <span className="ml-2 text-sm text-white">
                            Update at: {repo.updated_at}
                          </span>
                        </li>
                      </ul>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Visit Reprositores
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Repository;

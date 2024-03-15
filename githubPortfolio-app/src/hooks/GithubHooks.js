import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function GithubHooks(userName) {
  const [data, setData] = useState({})

  useEffect(() => {
    if (userName) {

      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch User data');
          }
          return response.json()
        }).then((userData) => {
          setData(userData)
          toast.success("Data Fetched Successfully")
        }).catch((error) => {
          toast.error(error.message);
        });
    }
  }, [userName])
  return data
}

export default GithubHooks
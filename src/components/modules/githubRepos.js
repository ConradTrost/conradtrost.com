import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';

// Import Components
import Navbar from '../Navbar';
import Footer from '../Footer';

const GithubRepos =() => {
    const [repos, setRepos] = useState();
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/retro1967/repos')
        .then(x => x.json())
        .then(x => setRepos(x))
    }, [])

    useEffect(() => {
        fetch('https://api.github.com/users/retro1967')
        .then(y => y.json())
        .then(y => setUser(y))
    }, [])

    return (
        <div className="bg-primary">
            <Helmet>
                <title>GitHub Repos</title>
            </Helmet>

            <Navbar />

            {user  ? (
                <div className="w-full mb-20">
                    <img src={user.avatar_url} className="m-auto w-2/12 rounded-full" />
                    <div className="m-auto text-center text-primary-text">
                        <h1>{user.name}</h1>
                        <h3>{user.bio}</h3>
                        <h4>{user.location}</h4>
                        <h4><a href={user.html_url} target="_blank" rel="nofollower noreferrer" className="underline">Github Link</a></h4>
                    </div>
                </div>
            ) : ''}


            {(!repos === []) ? 
                <div>
                    <h1 className="text-center text-primary-text">List of Repos:</h1>
                    <div className="grid grid-cols-4 gap-4 p-4 text-primary-text">
                        {console.log(repos)}
                        {repos.map((repo) => (
                            <a href={repo.html_url} className="button m-4 rounded flex p-4 bg-black">
                                <div className="block w-full">
                                <p className="text-2xl underline text-center text-primary">{repo.name}</p>
                                {repo.description ? (
                                    <p className="text-l text-center text-primary">{repo.description}</p>
                                ) : ''}
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            : (
            <div className="text-center">
                <p className="m-auto my-4">Sorry, I must have exceeded my requests in production.</p>
                <p><a href="/" className="m-auto my-4 text-blue-700">Click Here to Go Home</a></p>
            </div>
            )}

            <Footer />
        </div>
    )
}

export default GithubRepos;
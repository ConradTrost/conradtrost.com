import React from 'react';
import { Router as BrowserRouter } from '@reach/router';

import GithubRepos from '../components/modules/githubRepos';

const Router = () => {

    return(
        <BrowserRouter>
            <GithubRepos path="/app/github" />
        </BrowserRouter>
    )
}

export default Router;
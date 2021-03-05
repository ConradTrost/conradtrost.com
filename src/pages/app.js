import React from 'react';
import { Router as BrowserRouter } from '@reach/router';

import GithubRepos from '../components/modules/githubRepos';
import Inquiries from './inquiry';

const Router = () => {

    return(
        <BrowserRouter>
            <GithubRepos path="/app/github" />
            <Inquiries path="/inquiries" />
        </BrowserRouter>
    )
}

export default Router;
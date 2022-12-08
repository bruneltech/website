# Techsoc Website

The (WIP) website for the society.
Gatsby.js is used for the frontend and Wordpress is used for the backend.

How future committees approach deployment of this website and other society-affiliated ones is up to them. Be warned, dedicated infra isn't cheap but we're
getting away with putting society stuff on a ~~$20~~ $24 DigitalOcean instance (4GB RAM / 2 Cores). 

Shared hosting providers are typically much less than this however you will be sacrificing some control, flexibility (and likely performance) over a VPS solution. I haven't used a shared hosting provider in years however, so i'm not sure what the situation is like with react-based sites and them.

## Setting up for Development
1. Clone the repository, and install all packages with ``npm i``

2. Open `gatsby-config.js` and confirm that the `siteUrl` under `siteMetadata` points to ``https://bruneltech.net``, and that `url` under options in `gatsby-source-wordpress` points to ``https://wp.bruneltech.net/graphql``. If you're using this repository as a template for your own wordpress headless instance, you'll need to change these URLs to your own.

3. Run ``npm run develop`` in your terminal and wait for it to output ``Waiting for wordpress changes..``. You are now able to make changes to the WP backend or your frontend and have it update in real time (this will not be the case in production).

### Running Tests
There are currently no unit tests for this repository.


## Deployment
**IMPORTANT:** Make sure your server has a swapfile if you aren't sure if it has enough resources to do a full build without. Our 5GB swapfile hasn't cuased us any issues when doing a full clean build.

> TODO: deal with this later

## Configuring the rebuild webhook
As Gatsby is primarily SSR driven, the website needs to be "rebuilt" when something changes (like a new post for example). While you could fire up a terminal and run ``npm gatsby build`` every time you made a change but this would be incredibly annoying very quickly. The hook takes away this pain and does it for you whenever a change is made. (Takes about 1-2 minutes)

### Setting up the hooks
> TODO: Write stuff about setting up the hooks (once it's done, will probably be rolled into extensions plugin)

## Configuring the rebuild webhook
As Gatsby is primarily SSG (Static Site Generation) driven, the website needs to be "rebuilt" when something changes (like a new post for example). While you could fire up a terminal and run ``npm gatsby build`` every time you made a change but this would be incredibly annoying very quickly. The hook takes away this pain and does it for you whenever a change is made. (Takes about 1-2 minutes)

### Setting up the hooks
> TODO: Write stuff about setting up the hooks (once it's done, will probably be rolled into extensions plugin)

### Generating and adding the tokens
> TODO: Write stuff about tokens.

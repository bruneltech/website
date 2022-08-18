# Techsoc Website

The (WIP) website for the society.
Gatsby.js is used for the frontend and Wordpress is used for the backend.

How future committees approach deployment of this website and other society-affiliated ones is up to them. Be warned, dedicated infra isn't cheap but we're
getting away with putting society stuff on a ~~$20~~ $24 DigitalOcean instance (4GB RAM / 2 Cores). 

Shared hosting providers are typically much less than this however you will be sacrificing some control, flexibility (and likely performance) over a VPS solution. I haven't used a shared hosting provider in years however, so i'm not sure what the situation is like with react-based sites and them.


## Deployment
> TODO: deal with this later

## Typesense Deployment
> TODO: Deal with this later


## Configuring the rebuild webhook
As Gatsby is primarily SSG (Static Site Generation) driven, the website needs to be "rebuilt" when something changes (like a new post for example). While you could fire up a terminal and run ``npm gatsby build`` every time you made a change but this would be incredibly annoying very quickly. The hook takes away this pain and does it for you whenever a change is made. (Takes about 1-2 minutes)

### Setting up the hooks
> TODO: Write stuff about setting up the hooks (once it's done, will probably be rolled into extensions plugin)

### Generating and adding the tokens
> TODO: Write stuff about tokens.

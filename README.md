# HackBrunel Website

The website for the HackBrunel event, hosted every year.
Gatsby.js is used for the frontend and Wordpress is used for the backend.

If you've already set up the main `bruneltech.net` website which uses the same technology, you shouldn't have much trouble here.

This is also the first website to be migrated to servers specifically for techsoc (instead of cramming as much as possible onto my own personal project infra). 

How future committees approach deployment of this website and other society-affiliated ones is up to them. Be warned, dedicated infra isn't cheap but we're
getting away with putting society stuff on a $20 DigitalOcean instance (4GB RAM / 2 Cores). 

Shared hosting providers are typically much less than this however you will be sacrificing some control, flexibility (and likely performance) over a VPS solution. I haven't used a shared hosting provider in years however, so i'm not sure what the situation is like with react-based sites and them.


## Deployment

HackBrunel **must** be a seperate installation of wordpress. This can either be on the same server or if you want to a different server entirely. Please make sure though, if you are using the same server that ``bruneltech.net`` is on, that you change the wordpress prefix on setup to prevent conflicts with the main website. (If you're using docker containers for wordpress this shouldn't be *that* much of an issue)

The WordPress backend is quite easy to install, and can be done in about 5 minutes.
The Gatsby frontend is tested and deployed through the buddy.works CI/CD service. 

> TODO: Add documentation on how to deploy when project is semi-production ready

## Wordpress Setup

The frontend **will not work** without these plugins. Please make sure they are installed:
- [WPGraphQL](https://github.com/wp-graphql/wp-graphql)
- [WPGatsby](https://wordpress.org/plugins/wp-gatsby/)
- [HackBrunel-Extensions](https://github.com/bruneltech/hackbrunel-ext) (This plugin is used to power certain things on this website and display board website)

Gatsby is a static content generator, meaning the site is "rebuilt" on every new change (such as additional pages, posts, etc). If you don't value your time, you can fire up a terminal to manually rebuild and serve the frontend after making changes. 

[Stuff here about configuring the build webhooks]

## gatsby-config.js
If for whatever reason the name of the event, the domain, or both changes, you'll need to edit some URLs in the config file to ensure things keep resolving properly with the backend. 

They should be pretty obvious, named: `siteUrl`, `url`, and `wordpressUrl`

## Menu Layout

To keep the menu working, add a menu on the TwentyTwenty theme named "nav" and edit accordingly (currently does not support nested links on menus). **The Menu ID that's in the graphQL query in ``src > Components > menu.js`` will need changing.**

### Getting the new Menu ID and changing it in source.
You'll need to run a development copy of the website on your PC (``npm run develop``), visit [the GraphQL IDE](http://localhost:8000/___graphql), and run:
``wpMenu {
    id
  }``

to get the menu ID to paste in the file.

> TODO: Create small custom "theme" on wordpress end + plugin to make process a little easier, and to allow for custom query stuff :>

## Google Analytics Plugin

If you choose to continue using Google Analytics, you'll need to change the tracking ID to your own in gatsby-config.js (under ``gatsby-plugin-google-analytics``). If you no longer want to use Google Analytics, just remove the tracking ID there. Shouldn't cause any issues.



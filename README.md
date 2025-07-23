# Red Hat on GitHub

We’ve put together a comprehensive list of the projects hosted on GitHub in which Red Hat employees are actively involved. Given the large scope of our open source work, we recognize that we might have missed some projects or gotten a listing wrong. As time passes, more projects with which Red Hat employees collaborate will need to be added to the list. These circumstances, and others we can’t currently foresee, may mean you’ll want to make changes to this list. So, how do you do that?

## Adding a project

To add or modify projects to the list on [https://redhatofficial.github.io](https://redhatofficial.github.io), either submit a pull request or create an issue in the [repo](https://github.com/RedHatOfficial/RedHatOfficial.github.io). Upon review, the site maintainers will merge the PR or change the content as requested. No direct merges will be accepted.

All projects are stored in the `/data` directory in the `projects.json` file within the dev branch of this repo. Try to add your project alphabetically (just to make the file easier to search) and create a new object in the JSON that has:

```js
{
  "projectName": "Foo Project",
  "projectDescription": "Lorem ipsum.",
  "projectRepository": "https://github.com/foo",
  "projectWebsite": "http://foo.github.io",
  "category": "Development",
  "twitterHandle": "",
  "twitterURL": "",
  "lowercaseName": "foo project"
}
```

Be sure to include at _least_ the `projectName`, `projectRepository`, and `category`.

Current categories include:

- Development
- Documentation
- Middleware
- Operations
- Organizations
- Platform
- Storage

### Criteria for adding projects to the page

At this time, only projects that Red Hat employees are required to work on as part of their job will be listed. This includes projects Red Hat stewards as well as projects in which Red Hat is just one contributor among others. For now, don't list sub-projects if at all possible. Eventually we will get to that, but for now, top-level projects only, please.

Please don't add projects for which you volunteer. There are so many amazing projects that Red Hatters work on as enthusiasts, ourselves included, but too many to recognize here.

These criteria may be subject to change as the page evolves.

### Criteria for featured projects

Any project can appear in the Featured Projects section. To do so, the project must have a logo, as well as a straightforward and brief web description. Please submit your request as an ISSUE for this repo. No PRs, please, as updating the cards at this point in time involves changing multiple files.

### What about projects not on GitHub?

This list is just for Red Hat contributions to projects hosted on GitHub. See https://community.redhat.com/software/ for a more comprehensive listing of Red Hat's contributions to free and open source projects, regardless of where they are hosted.

### Hosting projects on /RedHatOfficial

Open an issue in _this_ repo, and the owners of the RedHatOfficial organization will get in touch with you.

## Changing the Featured list

To modify the featured projects, submit a pull request modifying the `/data/featured.json` file within the `dev` branch. You need to replace one of the featured projects rather than adding to the file.

In addition, you need to replace the logo in the `static/img` directory. The naming convention is important; you must name the image file as `logo-<logo>.png`, with `logo` here referencing the value in the `featured.json` file entry. So, for example, given the following entry:

```json
{
  "name": "CentOS Project",
  "logo": "centos",
  "github": "https://github.com/CentOS",
  "twitter": "https://twitter.com/CentOSProject",
  "website": "https://www.centos.org/",
  "description": "A solid, predictable base to build upon, with extensive resources to build, test, release, and maintain code."
}
```
The image would be `logo-centos.png`.

Upon review, the site maintainers will merge the PR or change the content as requested. No direct merges will be accepted.

## Contributing to the build

### Quick start

```
git clone https://github.com/RedHatOfficial/RedHatOfficial.github.io.git
cd RedHatOfficial.github.io
```

### Building and running locally

To build and run this project in your local dev environment, first install [Zola](https://www.getzola.org/documentation/getting-started/installation/). Then, run

```bash
cd site
zola serve
```

Go to the URL for the webserver (likely `localhost:1111`) to explore the site.

## Built with

This project is build and run using [Zola](https://www.getzola.org/), a Rust-based static site generator.

Under the hood, Zola uses [Tera](https://keats.github.io/tera/) for templating.

## Licensing

- [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) for the displayed page and primary license for this repository
- [MIT](https://opensource.org/licenses/MIT) for the small bits of Javascript within the HTML files
- [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) for the HTML and CSS

Red Hat trademarks are not subject to the above license grants.

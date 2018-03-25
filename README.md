# Red Hat on GitHub

We’ve put together a comprehensive list of the projects hosted on GitHub in which Red Hat employees are actively involved. Given the large scope of our open source work, we recognize that we might have missed some projects or gotten a listing wrong. As time passes, more projects with which Red Hat employees collaborate will need to be added to the list. These circumstances, and others we can’t currently foresee, may mean you’ll want to make changes to this list. So, how do you do that?

## Adding a project

To add or modify projects to the list on [https://redhatofficial.github.io](https://redhatofficial.github.io), either submit a pull request or create an issue in the [repo](https://github.com/RedHatOfficial/RedHatOfficial.github.io). Upon review, the site maintainers will merge the PR or change the content as requested. No direct merges will be accepted.

All projects are stored in the `/app/data` directory in the `projects.json` file within the dev branch of this repo.  Try to add your project alphabetically (just to make the file easier to search) and create a new object in the JSON that has:

```js
{
  "projectName": "Foo Project",
  "projectDescription": "Lorem ipsum.",
  "projectRepository": "https://github.com/foo",
  "projectWebsite": "http://foo.github.io",
  "category": "Development"
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

At this time, only projects that Red Hat employees are required to work on as part of their job will be listed. This includes projects Red Hat stewards as well as projects in which Red Hat is just one contributor among others. There are so many amazing projects that Red Hatters work on as enthusiasts, too many to recognize in one place. This criteria may be subject to change as the page evolves.

### What about projects not on GitHub?

This list is just for Red Hat contributions to projects hosted on GitHub.  See https://community.redhat.com/software/ for more comprehensive listing of Red Hat's contributions to free and open source projects, regardless of where they are hosted.

## Built with

This site was created using [Angular](https://angularjs.org/), [webpack](https://webpack.js.org/), [NPM](https://www.npmjs.com/), [Babel](https://babeljs.io/), and [Sass](https://sass-lang.com/).

## Licensing

* [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) for the displayed page and primary license for this repository
* [MIT](https://opensource.org/licenses/MIT) for the JavaScript
* [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) for the HTML and CSS

Red Hat trademarks are not subject to the above license grants.

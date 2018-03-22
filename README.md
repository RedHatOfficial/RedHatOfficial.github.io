
# Red Hat on GitHub

We’ve put together a comprehensive list of the projects in which Red Hat employees are actively involved. Given the large scope of our open source work, we recognize that we might have missed some projects or gotten a listing wrong. As time passes, more projects will need to be added to the list. These circumstances, and others we can’t currently foresee, may mean you’ll want to make changes to this list. So, how do you do that?

## Built with

This site was created using [Angular](https://angularjs.org/), [webpack](https://webpack.js.org/), [NPM](https://www.npmjs.com/), [Babel](https://babeljs.io/), and [Sass](https://sass-lang.com/).

## Adding a project

We have worked to put together a comprehensive list of all projects in which Red Hat employees are actively involved. But we also recognize that, given the large scope of our open source work, we may have missed some projects, or gotten some listing wrong. Plus, as time goes by, more Red Hat projects will need to be added to this list.

To add or modify projects to the list on [https://redhatofficial.github.io](https://redhatofficial.github.io), either submit a pull request or create an issue in the [repo](https://github.com/RedHatOfficial/RedHatOfficial.github.io). Upon review, the site maintainers will merge the PR or change the content as requested. No direct merges will be accepted.

All projects are stored in the `/app/data` directory in the `projects.json` file.  Try to add your project alphabetically (just to make the file easier to search) and create a new object in the JSON that has:

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

At this time, only projects that Red Hat employees are required to work on as part of their job will be listed. There are so many amazing projects that Red Hatters work on as enthusiasts, too many to recognize in one place. This criteria may be subject to change as the page evolves.

## Updating the copy

If yo

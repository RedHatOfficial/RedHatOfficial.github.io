# Claude Code Guidelines for RedHatOfficial.github.io

This file helps Claude understand the specific conventions, architecture, and standards for the Red Hat Official GitHub Project Page.

---

## Project Overview

**RedHatOfficial.github.io** is the official Red Hat project page that showcases Red Hat's involvement in open source projects hosted on GitHub. It's a static site built with Zola that lists projects where Red Hat employees actively contribute.

**Live Site**: https://redhatofficial.github.io

**Tech Stack**:
- **Static Site Generator**: Zola (Rust-based)
- **Templating**: Tera
- **Design System**: Red Hat Design System
- **Languages**: HTML (93.3%), CSS (5.2%), JavaScript (1.5%)

---

## Architecture & Structure

### Directory Organization

```
/
├── .github/              # GitHub Actions workflows
├── content/             # Markdown content files
├── data/                # JSON data files
│   ├── projects.json    # All projects list
│   └── featured.json    # Featured projects
├── static/              # Static assets
│   ├── css/            # Stylesheets
│   ├── img/            # Images and logos
│   └── js/             # JavaScript files
├── templates/           # Tera templates
├── config.toml         # Production config
├── config.dev.toml     # Development config
└── README.md           # Project documentation
```

### Key Files

1. **`data/projects.json`**: Contains all Red Hat projects
   - Project entries must be alphabetically ordered
   - Required fields: `projectName`, `projectRepository`, `category`
   - Optional fields: `projectDescription`, `projectWebsite`, `twitterHandle`, `twitterURL`, `lowercaseName`

2. **`data/featured.json`**: Featured projects shown on homepage
   - Requires project logo in `static/img/` as `logo-<name>.png`
   - Limited to a specific number of featured projects

3. **`config.toml`**: Production configuration
   - Sets CDN to redhatstatic.com
   - **IMPORTANT**: Any changes must be duplicated in `config.dev.toml`

4. **`config.dev.toml`**: Development configuration
   - Sets CDN to jsDelivr
   - Used for local development

---

## Contributing Guidelines

### Branch Workflow

- **Main Branch**: `dev` (default branch for PRs)
- **Production Branch**: Deployed from main/dev
- **Feature Branches**: `feature/<description>` or `add-<project-name>`

### Pull Request Requirements

1. **No direct merges** - All changes must go through PRs
2. **Target**: PRs should target the `dev` branch
3. **Review**: Site maintainers review all PRs before merging
4. **Testing**: Test locally using Zola before submitting

### Project Addition Criteria

**Eligible Projects**:
- ✅ Projects Red Hat employees work on as part of their job
- ✅ Projects Red Hat stewards
- ✅ Projects where Red Hat is a contributor among others
- ✅ Top-level projects only (no sub-projects)

**Ineligible Projects**:
- ❌ Volunteer projects (even if Red Hat employees contribute)
- ❌ Sub-projects (list parent project instead)
- ❌ Projects not hosted on GitHub

**Featured Project Criteria**:
- Must have a logo
- Must have a brief, straightforward description
- Submit as ISSUE (not PR)

---

## Code Style & Standards

### JSON Data Format

#### Adding a Project to `projects.json`

```json
{
  "projectName": "Foo Project",
  "projectDescription": "Lorem ipsum dolor sit amet.",
  "projectRepository": "https://github.com/foo/foo-project",
  "projectWebsite": "http://foo.github.io",
  "category": "Development",
  "twitterHandle": "@fooproject",
  "twitterURL": "https://twitter.com/fooproject",
  "lowercaseName": "foo project"
}
```

**Required Fields**:
- `projectName` - Full project name
- `projectRepository` - GitHub repository URL
- `category` - One of the valid categories

**Optional Fields**:
- `projectDescription` - Brief description
- `projectWebsite` - Project homepage
- `twitterHandle` - Twitter handle with @
- `twitterURL` - Full Twitter URL
- `lowercaseName` - Lowercase name for search/sorting

**Valid Categories**:
- Development
- Documentation
- Middleware
- Operations
- Organizations
- Platform
- Storage

#### Alphabetical Ordering

Projects in `projects.json` must be ordered alphabetically by `projectName` to make the file easier to search and maintain.

```json
// ✅ Good: Alphabetically ordered
[
  {"projectName": "Ansible", ...},
  {"projectName": "CentOS", ...},
  {"projectName": "Fedora", ...}
]

// ❌ Bad: Random order
[
  {"projectName": "Fedora", ...},
  {"projectName": "Ansible", ...},
  {"projectName": "CentOS", ...}
]
```

### Featured Projects Format

```json
{
  "name": "CentOS Project",
  "logo": "centos",
  "github": "https://github.com/CentOS",
  "twitter": "https://twitter.com/CentOSProject",
  "website": "https://www.centos.org/",
  "description": "A solid, predictable base to build upon."
}
```

**Logo Requirements**:
- File location: `static/img/logo-<logo>.png`
- Naming: `logo` field value determines filename
- Example: `"logo": "centos"` → `logo-centos.png`

### HTML/Template Standards

- Use Tera templating syntax
- Follow Red Hat Design System guidelines
- Maintain semantic HTML structure
- Keep accessibility in mind (ARIA labels, alt text, etc.)

### CSS Standards

- Follow existing naming conventions
- Use Red Hat Design System classes where possible
- Lint with `.scss-lint.yml` configuration
- Keep stylesheets modular and organized

### JavaScript Standards

- Minimal JavaScript usage (only 1.5% of codebase)
- Keep scripts small and focused
- Ensure accessibility is maintained
- Avoid heavy frameworks (static site)

---

## Development Workflow

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/RedHatOfficial/RedHatOfficial.github.io.git
cd RedHatOfficial.github.io

# Install Zola
# See: https://www.getzola.org/documentation/getting-started/installation/

# Run development server
zola --config config.dev.toml serve

# Access site at localhost:1111
```

### Configuration Synchronization

**CRITICAL**: Changes to `config.toml` must be duplicated in `config.dev.toml` and vice versa.

```toml
# config.toml (Production)
base_url = "https://redhatofficial.github.io"
# CDN points to redhatstatic.com

# config.dev.toml (Development)  
base_url = "http://localhost:1111"
# CDN points to jsDelivr
```

### Testing Changes

Before submitting a PR:
1. Build locally: `zola --config config.dev.toml serve`
2. Verify changes render correctly
3. Check all links work
4. Validate JSON syntax
5. Ensure alphabetical ordering
6. Test responsive design

---

## Common Tasks

### Adding a New Project

1. **Edit `data/projects.json`**:
   ```bash
   # Open the file
   vim data/projects.json
   
   # Add new project in alphabetical order
   # Ensure all required fields are present
   ```

2. **Validate JSON**:
   ```bash
   # Check JSON syntax
   python -m json.tool data/projects.json > /dev/null
   ```

3. **Test locally**:
   ```bash
   zola --config config.dev.toml serve
   ```

4. **Submit PR**:
   ```bash
   git checkout -b add-awesome-project
   git add data/projects.json
   git commit -m "Add Awesome Project to project list"
   git push -u origin add-awesome-project
   # Create PR targeting 'dev' branch
   ```

### Updating Featured Projects

1. **Create issue first** - Don't submit PR directly
2. **Prepare logo**: 
   - PNG format
   - Name: `logo-<identifier>.png`
   - Place in `static/img/`
3. **Update `data/featured.json`**:
   - Replace existing featured project
   - Don't add to the list
4. **Wait for maintainer review**

### Modifying Templates

1. Edit files in `/templates`
2. Use Tera syntax: `{% ... %}`, `{{ ... }}`
3. Test thoroughly in local environment
4. Ensure changes work with existing data
5. Maintain Red Hat Design System consistency

---

## Code Review Focus Areas

When Claude reviews PRs, pay special attention to:

### 1. JSON Validation
- ✅ Valid JSON syntax
- ✅ All required fields present
- ✅ Correct data types
- ✅ Proper URL formatting
- ✅ Alphabetical ordering in `projects.json`

### 2. Project Eligibility
- ✅ Project meets inclusion criteria
- ✅ Red Hat employees work on it as part of their job
- ✅ Top-level project (not sub-project)
- ✅ Hosted on GitHub

### 3. Category Validation
- ✅ Category is one of the approved values
- ✅ Category is appropriate for the project

### 4. Featured Project Requirements
- ✅ Logo file exists in `static/img/`
- ✅ Logo filename matches `featured.json` entry
- ✅ Description is brief and clear
- ✅ Only replacing existing featured project

### 5. Configuration Sync
- ✅ Changes in `config.toml` are in `config.dev.toml`
- ✅ Changes in `config.dev.toml` are in `config.toml`

### 6. Template Changes
- ✅ Valid Tera syntax
- ✅ Maintains existing functionality
- ✅ Accessibility considerations
- ✅ Red Hat Design System compliance

### 7. Documentation
- ✅ README updates if needed
- ✅ CONTRIBUTING.md reflects changes
- ✅ Comments in code are helpful

---

## Security & Licensing

### Licensing

This project uses multiple licenses:
- **CC BY-SA 4.0**: For displayed pages (primary license)
- **MIT**: For JavaScript code
- **CC0**: For HTML and CSS

**Important**: Red Hat trademarks are NOT subject to these licenses.

### Security Considerations

- All project links should use HTTPS
- Validate URLs before adding to JSON
- Don't include personal information
- Follow Red Hat security policies
- Report vulnerabilities through proper channels

---

## Common Patterns & Anti-Patterns

### ✅ Good Patterns

```json
// Proper project entry
{
  "projectName": "Ansible",
  "projectDescription": "Ansible is a radically simple IT automation platform.",
  "projectRepository": "https://github.com/ansible/ansible",
  "projectWebsite": "https://www.ansible.com",
  "category": "Development",
  "twitterHandle": "@ansible",
  "twitterURL": "https://twitter.com/ansible",
  "lowercaseName": "ansible"
}
```

### ❌ Anti-Patterns

```json
// Missing required fields
{
  "projectName": "Foo Project"
  // Missing projectRepository and category!
}

// Invalid category
{
  "projectName": "Bar Project",
  "projectRepository": "https://github.com/bar/bar",
  "category": "Cool Stuff"  // Not a valid category!
}

// Not alphabetically ordered
// Should be between Ansible and CentOS, not at the end
```

---

## Error Messages & Troubleshooting

### Common Build Errors

**"Failed to parse JSON"**
- Check for trailing commas
- Validate JSON syntax
- Ensure proper quotation marks

**"Template not found"**
- Verify template path
- Check Tera syntax
- Ensure file exists in `/templates`

**"Config error"**
- Check `config.toml` and `config.dev.toml` are in sync
- Validate TOML syntax
- Ensure required fields are present

### Local Development Issues

**Zola not found**
```bash
# Install Zola
# macOS
brew install zola

# Linux (check Zola docs for your distro)
wget https://github.com/getzola/zola/releases/download/v0.XX.X/zola-vX.XX.X-x86_64-unknown-linux-gnu.tar.gz

# Windows
choco install zola
```

**Port already in use**
```bash
# Use different port
zola --config config.dev.toml serve --port 1112
```

---

## Resources & Links

### Official Documentation
- [Zola Documentation](https://www.getzola.org/documentation/)
- [Tera Template Documentation](https://keats.github.io/tera/)
- [Red Hat Design System](https://ux.redhat.com/)

### Related Red Hat Resources
- [Community Projects](https://community.redhat.com/software/)
- [Red Hat Open Source](https://www.redhat.com/en/open-source)
- [Red Hat GitHub](https://github.com/RedHatOfficial)

### Repository Links
- [Issues](https://github.com/RedHatOfficial/RedHatOfficial.github.io/issues)
- [Pull Requests](https://github.com/RedHatOfficial/RedHatOfficial.github.io/pulls)
- [Contributing Guide](https://github.com/RedHatOfficial/RedHatOfficial.github.io/blob/dev/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/RedHatOfficial/RedHatOfficial.github.io/blob/dev/CODE_OF_CONDUCT.md)

---

## Notes for Claude Code

When reviewing code or implementing features for this project:

1. **Verify Project Eligibility** - Ensure projects meet the strict criteria for inclusion
2. **Maintain Alphabetical Order** - Critical for `projects.json` readability
3. **Check JSON Validity** - Use a JSON validator before committing
4. **Test Locally** - Always run Zola locally before submitting PRs
5. **Sync Configs** - Never forget to sync `config.toml` and `config.dev.toml`
6. **Follow Licensing** - Respect the multi-license structure
7. **Featured Projects** - Only suggest as issues, not PRs
8. **No Sub-Projects** - Only top-level projects should be listed
9. **GitHub Only** - This list is specifically for GitHub-hosted projects
10. **Red Hat Employee Work** - Projects must be part of Red Hat job, not volunteer work

---

## Quick Reference

### Project JSON Template
```json
{
  "projectName": "",
  "projectDescription": "",
  "projectRepository": "",
  "projectWebsite": "",
  "category": "",
  "twitterHandle": "",
  "twitterURL": "",
  "lowercaseName": ""
}
```

### Valid Categories
- Development
- Documentation
- Middleware
- Operations
- Organizations
- Platform
- Storage

### Required Fields
- `projectName`
- `projectRepository`
- `category`

### Local Dev Commands
```bash
# Start dev server
zola --config config.dev.toml serve

# Build for production
zola build

# Validate (if available)
python -m json.tool data/projects.json > /dev/null
```

---

Last updated: February 2026
Version: 1.0 (Customized for RedHatOfficial.github.io)
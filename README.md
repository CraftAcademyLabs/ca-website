# Nomads Of Code (formerly known as Craft Academy) Site

[![Build Status](https://semaphoreci.com/api/v1/craftacademy/website/branches/master/shields_badge.svg)](https://semaphoreci.com/craftacademy/website)

This is a fork of the [Makers Academy Site](https://github.com/makersacademy/website) with custom, Craft Academy specific, additions. 

## 🎉 2026 Modernization Update

This repository has been **modernized to 2026 standards** with the following major updates:

### ✅ What's Been Updated
- **Ruby**: Upgraded from 2.5.1 (EOL 2021) → **3.2.3** (Current stable)
- **Middleman**: Upgraded from 3.3.12 (2015) → **4.6.2** (Latest stable)
- **HAML**: Updated from 4.0 → **6.0**
- **Dependencies**: All gems updated to secure, modern versions
- **Security**: Fixed vulnerable dependencies (ffi, sprockets)
- **Compatibility**: Added Ruby 3+ compatibility (net-ftp gem)
- **Code Quality**: Fixed deprecated partial references for Middleman 4

### 🚀 Key Improvements
- Modern Ruby 3.2.3 with latest features and performance improvements
- Latest Middleman 4.6 with improved asset pipeline
- All security vulnerabilities addressed
- Better compatibility with modern development environments
- Cleaner, more maintainable codebase

## Setting up the site locally

### Prerequisites
- Ruby 3.2.3 (use rbenv or rvm)
- Bundler 2.7.2+

### Installation Steps
1. Clone the repo
2. Install dependencies: `bundle install`
3. Create a **.env** file with required environment variables:
   ```
   HOST=localhost
   DEPLOY_PATH=/path/to/deploy
   DEPLOY_USER=your_user
   ```
4. Start the development server: `bundle exec middleman server`
5. Go to **http://localhost:4567** to view the site in your browser

> **Note**: Always use `bundle exec` when running commands to ensure correct gem versions.

## Building the site

To build the static site:
```bash
bundle exec middleman build
```

The built site will be in the `build/` directory.

## Deploying

> **Note**: The `middleman-deploy` extension has been removed as it's incompatible with Middleman 4+. 

### Manual Deployment
Build the site and deploy using rsync:
```bash
bundle exec middleman build
rsync -avz --delete build/ user@server:/path/to/deploy/
```

Or use your preferred deployment method (GitHub Pages, Netlify, Vercel, etc.)

## Technologies used

* **[Ruby 3.2.3](https://www.ruby-lang.org/en/)** - Modern Ruby with improved performance
* **[Middleman 4.6](https://middlemanapp.com/)** - Static site generator
* **[HAML 6.0](http://haml.info/)** - Elegant templating
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[jQuery](http://jquery.com/)** - Client side scripts
* **[RSpec](http://rspec.info/)** - Testing framework
* **[Sass](http://sass-lang.com/)** - CSS preprocessing
* **[Bourbon](http://bourbon.io/)/[Neat](http://neat.bourbon.io/)/[Bitters](http://bitters.bourbon.io/)** - CSS framework

## Adding images

Our images are stored on the [craft academy assets GitHub repo](https://github.com/CraftAcademy/craft-assets) - we've split them out to a seperate repository to keep the size of this repository down. All assets from that repository can be accessed from https://assets.craftacademy.se.

When adding a new image, add it to the [images directory](https://github.com/CraftAcademy/craft-assets/tree/gh-pages/images) of the [craft academy assets GitHub repo](https://github.com/CraftAcademy/craft-assets), and make sure that the image has been compressed using [image optim](https://imageoptim.com/) and are good quality images that fit the look and feel of the site.

## Testing

Run tests with:
```bash
bundle exec rspec
```

## Troubleshooting

### CSS not loading
If CSS isn't loading, ensure you've run `bundle exec middleman build` after any changes to stylesheets.

### LiveReload issues
If you encounter network permission errors with LiveReload in certain environments, you can disable it in `config.rb` or use the built site with a simple HTTP server.

## Screenshots

### Swedish Homepage
![Swedish Homepage](https://github.com/user-attachments/assets/57dcea70-0fe7-4c58-b28b-273f89576c7d)

### English Homepage  
![English Homepage](https://github.com/user-attachments/assets/2b03a753-dd88-4ed5-a9b2-8453cb61d089)

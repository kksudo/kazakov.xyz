# scottschlangen.com

Personal portfolio and resume site for Scott Schlangen, built with [Hugo](https://gohugo.io/) and the [Coder](https://github.com/luizdepra/hugo-coder) theme. Deployed to Cloudflare Pages.

## Structure

- `content/` — About, Now, Projects, Resume
- `layouts/` — Homepage and head overrides for the portfolio experience
- `config.toml` — Site configuration, social links, navigation
- `assets/scss/` — Custom portfolio styles
- `assets/js/` — Subtle scroll reveal interactions
- `static/img/` — Images and company logos
- `themes/` — Hugo Coder theme (git submodule)

## Development

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/schlangens/scottschlangen.com.git

# Run local dev server
hugo server -D

# Build for production
hugo --minify --gc
```

## Deployment

Deployed to [Cloudflare Pages](https://pages.cloudflare.com/) via GitHub Actions on push to `main`.

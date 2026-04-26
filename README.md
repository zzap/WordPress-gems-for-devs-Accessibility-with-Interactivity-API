# WordPress gems for devs: Accessibility with Interactivity API

Repository for code examples and resources used in the "WordPress gems for devs: Accessibility with Interactivity API" talk.

| Event  | Date | Branch | Links |
| --- | --- | --- | --- |
| WordCamp Portugal | 16 May 2026 | [conf/WordCampPortugal2026](https://github.com/zzap/WordPress-gems-for-devs-HTML-API/tree/conf/WordCampPortugal2026) | [Event](https://portugal.wordcamp.org/2026/session/wordpress-gems-for-devs-accessibility-with-interactivity-api/) \| [Slides](https://docs.google.com/presentation/d/179W5g7vIfEnMR5u-4RO-94UCPHZmEKg80qmROmNYKU0/edit?usp=sharing) |

## Interactivity API

**[Interactivity API](https://github.com/zzap/WordPress-gems-for-devs-Interactivity-API) wouldn't be possible without [HTML API](https://github.com/zzap/WordPress-gems-for-devs-HTML-API).**

### What problems does it solve?

- Compatibility with PHP hooks.
- Inter-block communication.
- Site-wide features such as client-side navigation.

### Reference

- [Interactivity API Reference](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
  - [The Reactive and Declarative mindset](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)
    - [List of Directives](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#list-of-directives)
  - [Understanding global state, local context and derived state](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)
    - [The store](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#the-store)
  - [Server-side rendering: Processing directives on the server](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)
    - [Server functions](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#server-functions)
- [WP_Interactivity_API_Directives_Processor](https://developer.wordpress.org/reference/classes/wp_interactivity_api_directives_processor/)
- [@wordpress/create-block-interactive-template](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-interactive-template/)
- [&lt;RichText/&gt; reference](https://developer.wordpress.org/block-editor/reference-guides/richtext/)

### Examples

- [The movie demo](https://wpmovies.dev/), [GitHub repo](https://github.com/WordPress/wp-movies-demo)
- [Countdown](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
- [Instant Search](https://github.com/r-chrzan/instant-search-interactivity)
- [Todo list](https://github.com/ahsanshaheen199/interactive-todos/tree/main)
- [Interactivity API showcase](https://github.com/WordPress/gutenberg/discussions/55642)

Examples in production:

- [mainostoimistot.fi](https://mainostoimistot.fi/) - [Query Loop Filters](https://github.com/samikeijonen/query-filter/tree/seravo) by [Sami Keijonen](https://github.com/samikeijonen/), forked from [humanmade/query-filter](https://github.com/humanmade/query-filter)
- [Podcaster Plus](https://www.podcasterplus.com/) plugin by [Dan Maby](https://github.com/danmaby) and [Nathan Wrigley](https://nathanwrigley.com/)

### History

The idea of using the declarative method to bridge the connection between frontend and backend came from the [Cloudfest 2022 Hackathon project](https://hackathon.cloudfest.com/cloudfest-hackathon-2022-greatest-hackathon-ever/), [Bento + WordPress](https://www.alainschlesser.com/using-bento-components-in-gutenberg-blocks/), which was led by [Alain Schlesser](https://github.com/schlessera) and [Pascal Birchler](https://github.com/swissspidy).

### Equivalents in other PHP frameworks

- Laravel - [Livewire](https://livewire.laravel.com/) using AlpineJS
- Symfony UX - [Live components](https://ux.symfony.com/live-component), primarily built on top of [Turbo](https://turbo.hotwired.dev/) and [Stimulus](https://stimulus.hotwired.dev/), which are part of the [Hotwire](https://hotwired.dev/) framework.
- Phoenix [LiveView](https://hexdocs.pm/phoenix_live_view/welcome.html)

## Resources

- [ARIA Authoring Practices Guide - Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [Accessibility development best practices](https://make.wordpress.org/accessibility/handbook/markup/)
- [Interactivity API best practices in 6.8](https://make.wordpress.org/core/2025/03/24/interactivity-api-best-practices-in-6-8/)
- [Interactivity API: Roadmap](https://github.com/WordPress/gutenberg/discussions/52904)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/#how-to-create-interactive-blocks)
- [Interactivity API discussions](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api)
- [Changelog - Tracking Breaking Changes in the Interactivity API](https://github.com/WordPress/gutenberg/discussions/52906)
- [Getting Started - and other learning resources](https://github.com/WordPress/gutenberg/discussions/52894)
- [European Accessibility Act (Directive (EU) 2019/882)](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng)

### Accessibility Tools

- online check [websiteaccessibilitychecker.com](https://websiteaccessibilitychecker.com/checker/index.php)
- Chrome extension [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- Chrome extension [Funkify – Disability Simulator](https://chromewebstore.google.com/detail/funkify-%E2%80%93-disability-simu/ojcijjdchelkddboickefhnbdpeajdjg)
- Chrome extension [HeadingsMap](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- Chrome extension [WAVE Evaluation Tool](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

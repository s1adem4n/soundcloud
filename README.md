<h1 align="center">SoundCloud</h1>

<p align="center">SoundCloud APIv2 wrapper for typescript</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 22 🤝" src="https://img.shields.io/badge/all_contributors-22_🤝-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://github.com/s1adem4n/soundcloud/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Code of Conduct: Enforced 🤝" src="https://img.shields.io/badge/code_of_conduct-enforced_🤝-21bb42" />
	</a>
	<a href="https://github.com/s1adem4n/soundcloud/blob/main/LICENSE.md" target="_blank">
	    <img alt="License: MIT 📝" src="https://img.shields.io/badge/license-MIT_📝-21bb42.svg">
    </a>
	<a href="https://github.com/sponsors/s1adem4n" target="_blank">
    	<img alt="Sponsor: On GitHub 💸" src="https://img.shields.io/badge/sponsor-on_github_💸-21bb42.svg" />
    </a>
	<img alt="Style: Prettier 🧹" src="https://img.shields.io/badge/style-prettier_🧹-21bb42.svg" />
    <img alt="TypeScript: Strict 💪" src="https://img.shields.io/badge/typescript-strict_💪-21bb42.svg" />
</p>

## Usage

```shell
npm i @slademan/soundcloud
```

```ts
import Soundcloud from "@slademan/soundcloud";

const sc = new Soundcloud(ClientID, OauthToken);

const me = await sc.me.get();
if (me.success && me.data) {
	console.log(me.data);
}
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/garuna-m6"><img src="https://avatars.githubusercontent.com/u/23234342?v=4?s=100" width="100px;" alt="Anurag"/><br /><sub><b>Anurag</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=garuna-m6" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://roe.dev/"><img src="https://avatars.githubusercontent.com/u/28706372?v=4?s=100" width="100px;" alt="Daniel Roe"/><br /><sub><b>Daniel Roe</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=danielroe" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nowyDEV"><img src="https://avatars.githubusercontent.com/u/12304307?v=4?s=100" width="100px;" alt="Dominik Nowik"/><br /><sub><b>Dominik Nowik</b></sub></a><br /><a href="#tool-nowyDEV" title="Tools">🔧</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=nowyDEV" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/emday4prez"><img src="https://avatars.githubusercontent.com/u/35363144?v=4?s=100" width="100px;" alt="Emerson"/><br /><sub><b>Emerson</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=emday4prez" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sinchang.me"><img src="https://avatars.githubusercontent.com/u/3297859?v=4?s=100" width="100px;" alt="Jeff Wen"/><br /><sub><b>Jeff Wen</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=sinchang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://typescriptcourse.com/tutorials"><img src="https://avatars.githubusercontent.com/u/3806031?v=4?s=100" width="100px;" alt="Joe Previte"/><br /><sub><b>Joe Previte</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/issues?q=author%3Ajsjoeio" title="Bug reports">🐛</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=jsjoeio" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.johnnyreilly.com/"><img src="https://avatars.githubusercontent.com/u/1010525?v=4?s=100" width="100px;" alt="John Reilly"/><br /><sub><b>John Reilly</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=johnnyreilly" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/issues?q=author%3As1adem4n" title="Bug reports">🐛</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=s1adem4n" title="Code">💻</a> <a href="#maintenance-s1adem4n" title="Maintenance">🚧</a> <a href="https://github.com/s1adem4n/soundcloud/pulls?q=is%3Apr+reviewed-by%3As1adem4n" title="Reviewed Pull Requests">👀</a> <a href="#tool-s1adem4n" title="Tools">🔧</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=s1adem4n" title="Documentation">📖</a> <a href="#infra-s1adem4n" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=s1adem4n" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/Jolg42"><img src="https://avatars.githubusercontent.com/u/1328733?v=4?s=100" width="100px;" alt="Joël Galeran"/><br /><sub><b>Joël Galeran</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=jolg42" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://webpro.nl"><img src="https://avatars.githubusercontent.com/u/456426?v=4?s=100" width="100px;" alt="Lars Kappert"/><br /><sub><b>Lars Kappert</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=webpro" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://navinmoorthy.me/"><img src="https://avatars.githubusercontent.com/u/39694575?v=4?s=100" width="100px;" alt="Navin Moorthy"/><br /><sub><b>Navin Moorthy</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/issues?q=author%3Anavin-moorthy" title="Bug reports">🐛</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=navin-moorthy" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NazCodeland"><img src="https://avatars.githubusercontent.com/u/113494366?v=4?s=100" width="100px;" alt="NazCodeland"/><br /><sub><b>NazCodeland</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=NazCodeland" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://orta.io"><img src="https://avatars.githubusercontent.com/u/49038?v=4?s=100" width="100px;" alt="Orta Therox"/><br /><sub><b>Orta Therox</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=orta" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://paulisaweso.me/"><img src="https://avatars.githubusercontent.com/u/6335792?v=4?s=100" width="100px;" alt="Paul Esch-Laurent"/><br /><sub><b>Paul Esch-Laurent</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=Pinjasaur" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/promise-dash"><img src="https://avatars.githubusercontent.com/u/86062880?v=4?s=100" width="100px;" alt="Promise Dash"/><br /><sub><b>Promise Dash</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=promise-dash" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RebeccaStevens"><img src="https://avatars.githubusercontent.com/u/7224206?v=4?s=100" width="100px;" alt="Rebecca Stevens"/><br /><sub><b>Rebecca Stevens</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=RebeccaStevens" title="Code">💻</a> <a href="#infra-RebeccaStevens" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://linktr.ee/ronbraha"><img src="https://avatars.githubusercontent.com/u/45559220?v=4?s=100" width="100px;" alt="Ron Braha"/><br /><sub><b>Ron Braha</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=RNR1" title="Code">💻</a> <a href="#design-RNR1" title="Design">🎨</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=RNR1" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ronjeanfrancois.com"><img src="https://avatars.githubusercontent.com/u/105710107?v=4?s=100" width="100px;" alt="Ron Jean-Francois"/><br /><sub><b>Ron Jean-Francois</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=ronthetech" title="Code">💻</a> <a href="#infra-ronthetech" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/the-lazy-learner"><img src="https://avatars.githubusercontent.com/u/13695177?v=4?s=100" width="100px;" alt="Sudhansu"/><br /><sub><b>Sudhansu</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=the-lazy-learner" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tungbq"><img src="https://avatars.githubusercontent.com/u/85242618?v=4?s=100" width="100px;" alt="Tung Bui (Leo)"/><br /><sub><b>Tung Bui (Leo)</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=tungbq" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/s1adem4n"><img src="https://avatars.githubusercontent.com/u/68190441?v=4?s=100" width="100px;" alt="s1adem4n"/><br /><sub><b>s1adem4n</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=s1adem4n" title="Code">💻</a> <a href="#content-s1adem4n" title="Content">🖋</a> <a href="https://github.com/s1adem4n/soundcloud/commits?author=s1adem4n" title="Documentation">📖</a> <a href="#ideas-s1adem4n" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-s1adem4n" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-s1adem4n" title="Maintenance">🚧</a> <a href="#projectManagement-s1adem4n" title="Project Management">📆</a> <a href="#tool-s1adem4n" title="Tools">🔧</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TAKANOME-DEV"><img src="https://avatars.githubusercontent.com/u/79809121?v=4?s=100" width="100px;" alt="takanomedev"/><br /><sub><b>takanomedev</b></sub></a><br /><a href="https://github.com/s1adem4n/soundcloud/commits?author=TAKANOME-DEV" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package is based on [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package).

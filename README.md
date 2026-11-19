<div align="center">

# asszxc / Glass Dawn

A customizable glassmorphism theme for BetterDiscord.

![Version](https://img.shields.io/badge/version-1.0.0-33333d?style=flat-square)
![Platform](https://img.shields.io/badge/platform-BetterDiscord-33333d?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-33333d?style=flat-square)

[Download theme](https://raw.githubusercontent.com/Meldixx/asszxc-discord/main/asszxc.theme.css) · [Download settings](https://raw.githubusercontent.com/Meldixx/asszxc-discord/main/asszxcSettings.plugin.js) · [Русский](README.ru.md)

</div>

## Overview

Glass Dawn gives Discord a unified translucent interface with a customizable background, soft blur, understated controls and animated branding. Use the theme on its own, or install asszxc Settings to customize the appearance directly in BetterDiscord.

## Features

- Glass surfaces across the desktop interface, including channels, DMs, friends, profiles and settings.
- Custom wallpaper, position, scale, tint and dimming.
- Adjustable blur, saturation, panel opacity and interface colors.
- Animated Orbitron wordmark and a consistent default layout.
- 46 customization options organized into four categories.
- English and Russian settings, live preview of changes, local saving and reset to defaults.

## Downloads

| Package | Version | File |
| --- | --- | --- |
| asszxc Theme | 1.0.0 | [asszxc.theme.css](https://raw.githubusercontent.com/Meldixx/asszxc-discord/main/asszxc.theme.css) |
| asszxc Settings | 1.0.0 | [asszxcSettings.plugin.js](https://raw.githubusercontent.com/Meldixx/asszxc-discord/main/asszxcSettings.plugin.js) |

## Installation

1. Install [BetterDiscord](https://betterdiscord.app/).
2. Open Discord → User Settings → BetterDiscord → Themes → Open Themes Folder.
3. Save `asszxc.theme.css` to that folder and enable the theme.
4. Optionally, open BetterDiscord → Plugins → Open Plugins Folder. Save `asszxcSettings.plugin.js` there and enable it.
5. Click the settings gear on the **asszxc Settings** plugin card.

If another theme conflicts, disable it. The settings plugin is optional.

## Customization

| Category | Controls |
| --- | --- |
| Background | HTTPS wallpaper URL or local image (up to 8 MB), position, scale, tint and dimming |
| Glass | Window blur, menu blur and saturation |
| Panels | Individual surface colors, opacity, borders, hover and selection |
| Colors | Text, links, accent, focus outline and buttons |

Changes are saved locally and applied while the theme is enabled. Select **Reset all settings** to restore the defaults. Advanced users can edit the documented CSS variables in the theme file; layout and branding are not exposed as plugin controls.

## Compatibility and privacy

Designed for the BetterDiscord desktop client. Discord updates may affect individual CSS selectors; live-client compatibility of this release still needs verification. The companion plugin is not designed for Vencord.

The plugin does not collect messages or account data and includes no analytics or telemetry. Preferences and local images are stored through BetterDiscord's local data API. Remote wallpapers and fonts are loaded from their respective hosts. See [third-party resources](THIRD-PARTY.md) for details, including the pending verification of the default wallpaper's rights.

## Support

Report visual issues and reproducible bugs in [GitHub Issues](https://github.com/Meldixx/asszxc-discord/issues). Include the Discord and BetterDiscord versions, affected screen and a screenshot with personal information removed.

For development checks, run:

```sh
node --check asszxcSettings.plugin.js
node --test tests/settings.test.cjs
```

## License

[MIT](LICENSE) applies to original project code for which the distributor holds the necessary rights. External resources are subject to their own terms. Glass Dawn is independently distributed, is not affiliated with Discord or BetterDiscord, and is not approved for the official BetterDiscord catalog. The current implementation does not meet the catalog's authorship requirements.

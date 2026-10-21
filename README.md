<p align="center">
  <img src="docs/img/icon-512.png" alt="Deal Radar" width="96">
</p>

<h1 align="center">Deal Radar</h1>

<h1 align="center"><b>Be the first to message the seller.</b></h1><br>
<p align="center">Deal Radar watches Facebook Marketplace and your Facebook groups — plus the top marketplaces in Czechia, Slovakia, Poland, Germany, Austria, Norway, Sweden, Finland and Denmark, eBay.com and Craigslist in the US, Mercari in Japan and Chrono24 for watches — and pings you on Telegram within a minute of a new listing, before the deal is gone.</p>

<p align="center"><b>Private beta · invite only.</b> No public download — the browser extension is shared directly with invited pilot users.</p>

<p align="center">
  <a href="https://radar.4xs.dev">radar.4xs.dev</a> · <a href="https://kotyzap.github.io/Deal-Radar/">project page</a> · by <a href="https://4xs.dev">4xs.dev</a>
</p>

**Sources**

| Source | Country | Checked by |
|---|---|---|
| FB Marketplace | 🌎 | browser extension, around your location (default Prague + 500 km) |
| FB groups | 🌎 | browser extension, groups you joined |
| eBay.com | 🌎 | server, US sellers only |
| Chrono24 | 🌎 | browser extension, watches |
| Bazoš CZ | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server |
| Aukro | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server |
| Sbazar | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server |
| Vinted | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server; vinted.cz also lists items from Poland, Hungary, Romania, Croatia and Slovenia |
| Allegro.cz | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server |
| Bazoš SK | <img src="docs/img/flags/sk.svg" alt="SK" height="12"> | server |
| OLX.pl | <img src="docs/img/flags/pl.svg" alt="PL" height="12"> | server |
| Kleinanzeigen.de | <img src="docs/img/flags/de.svg" alt="DE" height="12"> | server |
| eBay.de | <img src="docs/img/flags/de.svg" alt="DE" height="12"> | server |
| willhaben.at | <img src="docs/img/flags/at.svg" alt="AT" height="12"> | server |
| eBay.at | <img src="docs/img/flags/at.svg" alt="AT" height="12"> | server |
| Craigslist | <img src="docs/img/flags/us.svg" alt="US" height="12"> | browser extension, up to 5 cities per watch |
| FINN.no | <img src="docs/img/flags/no.svg" alt="NO" height="12"> | server |
| Blocket.se | <img src="docs/img/flags/se.svg" alt="SE" height="12"> | server |
| Tori.fi | <img src="docs/img/flags/fi.svg" alt="FI" height="12"> | server |
| DBA.dk | <img src="docs/img/flags/dk.svg" alt="DK" height="12"> | server |
| Mercari JP | <img src="docs/img/flags/jp.svg" alt="JP" height="12"> | browser extension; alerts add a Buyee link for buyers outside Japan |

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/coverage-dark.svg">
  <img src="docs/img/coverage.svg" alt="Map of the covered countries: Czechia, Slovakia, Poland, Germany, Austria, Denmark, Norway, Sweden, Finland, the USA and Japan">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/watches-dark.png">
  <img src="docs/img/watches.png" alt="Deal Radar watches list with keywords, price ceiling, sources and bid">
</picture>

## What's new

- **From listing to alert.** radar.4xs.dev, the project page and this README show the path step by step, with a real Vinted alert. Vinted's catalog turns out to include Poland, Hungary, Romania, Croatia and Slovenia; the map shows them, and the editor suggests model numbers as keywords.
- **5 free watches.** During the free trial or a free invite, 5 watches are free (an invite can give more). Each one beyond costs from €5/week — every watch is searched every minute on each of its sources. If the wallet runs out, only those extra watches pause.
- **Smoother start.** Open the invite link or paste it into the extension — either order works. The app warns when Telegram can't reach you (Start not pressed) and has a Test button, and every watch shows when it was last checked.
- **Coverage map.** Marketplaces in 11 countries, plus FB, eBay.com and Chrono24 anywhere — see the map above. New screenshots too.
- **Scandinavia.** FINN.no, Blocket.se, Tori.fi and DBA.dk join the sources, checked by the server every minute, newest first. Prices in NOK, SEK, EUR and DKK, with your currency next to them.
- **Chrono24.** The watch marketplace is checked by the browser extension, newest first.
- **Japan.** Mercari JP, checked by the browser extension. Mercari needs a Japanese phone number, so every Mercari alert also carries a Buyee link to buy from abroad.
- **USA.** eBay.com (US sellers) is checked by the server every minute, and Craigslist by the browser extension: pick up to 5 Craigslist areas per watch from Craigslist's own list (a town belongs to its nearest city's area — Leander is in *austin*). Prices in USD.
- **Pause switch.** One tap in the extension popup pauses Facebook and Craigslist checks for 1 h, 3 h or until you start again, and closes the pinned Facebook tab so your browser stays light. Server sources keep running.
- **Germany and Austria.** willhaben.at, Kleinanzeigen.de, eBay.de and eBay.at join the sources. Like Bazoš or OLX, the server checks them every minute, newest first.
- **Prices in your currency.** Pick CZK, EUR, PLN or USD. Alerts show the listing's own price and yours — “850 PLN (≈ 201 EUR)” — and you set a watch's min and max price in your currency.
- **Four languages.** The extension, radar.4xs.dev and the [project page](https://kotyzap.github.io/Deal-Radar/) speak English, Czech, German and Japanese. They follow your browser; switch in the header.

## From listing to alert

| | With Deal Radar | Checking by hand |
|---|---|---|
| **0:00** | A seller posts a G-Shock on Vinted. | |
| **1–3 min** | Deal Radar's next check finds it — every minute on most sites, every 3 minutes on Vinted and Facebook. | |
| **+ seconds** | Telegram alert: title, price in your currency, link. | |
| **You** | Message the seller while the listing still says “listed a minute ago”. | Whenever you next refresh — often after someone else has already written. |

A real alert from 21 October (a Polish seller on Vinted, price converted to CZK; the listing said “listed a minute ago” when the alert was opened):

> **Casio G-Shock**<br>
> Zegarek Casio GShock WR 20Bar · G-Shock<br>
> 2 534 CZK · vinted<br>
> https://www.vinted.cz/items/…

| The server | Your browser |
|---|---|
| Every minute, your computer can be off: Bazoš, Aukro, Sbazar, Vinted, Allegro, OLX, Kleinanzeigen, eBay, willhaben, FINN, Blocket, Tori, DBA. | The extension, while the browser is open: FB Marketplace, FB groups, Craigslist, Mercari JP, Chrono24. |

Use model numbers as keywords (GA-2100, 18-400): Vinted and FB groups show listings in Polish, Hungarian, Romanian and more, and a model number matches in every language.

## How it works

1. **Get an invite.** You receive an invite link and the Deal Radar extension for Chrome or Firefox directly — it isn't in any public store.
2. **Press Start in @DealRadarRobot, then log in with Telegram** — open the invite link, or the extension (popup → Watches → Get started) and paste the link there. No password, no e-mail. Alerts arrive in the same Telegram account; if Telegram can't reach you, the app says so and offers a test message.
3. **Create a watch.** Keywords that must appear, keywords that must not, a minimum and maximum price in your currency — CZK, EUR, PLN or USD (listings in other currencies are converted at the daily ČNB rate), the sources and, for Facebook, the groups to search. A 7-day preview shows what it would have caught.
4. **Get the alert.** Every source is polled once a minute. A new listing that matches lands in Telegram with title, price (also in your currency) and link — you message the seller.
5. **Vote Good or Junk.** One tap per alert tells the radar how well a watch is tuned.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/editor-dark.png">
  <img src="docs/img/editor.png" alt="Watch editor with min and max price, sources, FB groups and a 7-day preview">
</picture>

*The editor: price range, sources, the watch's FB groups, and what it would have caught in the last 7 days.*

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/alerts-dark.png">
  <img src="docs/img/alerts.png" alt="Alerts list with prices, sources and Good / Junk votes">
</picture>

*Every alert also goes to Telegram. “#1 of 3” = you heard first among three bidders; “#2 of 2” = someone outbid you and heard a minute earlier.*

## Facebook Marketplace and groups, in your own browser

<img align="right" width="260" src="docs/img/popup.png" alt="Extension popup: FB Marketplace and group searches, last check, latest alerts">

- **Browser extension.** FB has no public search API, so the extension checks your searches from your normal, logged-in Chrome or Firefox — one pinned tab, every ~3 minutes, newest first, Prague + 500 km.
- **Your FB groups.** Many deals are posted only in collector groups. On the FB groups tab you tick up to 10 groups you've joined; each watch then picks which of them to search. The extension runs Facebook's own search inside each group for the watch's keywords, newest posts first, about every 10 minutes.
- **Only offers, only for you.** A group post alerts only if it looks like an offer — a price or a sale word (prodám, na prodej, cenu nabídněte, sprzedam…) and no “wanted” word (koupím, hledám, kupię…). Group posts are private: they alert only the person whose browser found them, never go into the shared index and aren't part of the bidding.
- **Nothing leaves but listings.** The extension pushes only the cards and posts it sees (title, price, link) to the radar. Your Facebook session stays in your browser.
- **Other sources need no extension.** Bazoš, Aukro, Sbazar, Vinted, OLX.pl, Allegro.cz, willhaben.at, Kleinanzeigen.de and eBay.de/.at/.com are polled by the server itself, so alerts keep coming when your computer is off.

<br clear="right">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/groups-dark.png">
  <img src="docs/img/groups.png" alt="FB groups tab: tick up to 10 joined groups that watches may search">
</picture>

*FB groups tab: tick the groups Deal Radar may search; each watch picks from these.*

## Pricing

| | |
|---|---|
| **7 days free trial** | Every account starts with a free week of up to 5 watches (an invite can give more, or a longer free period). Each watch beyond them costs from €5/week — every watch is searched every minute on each of its sources. |
| **from €2 per watch per week** | Each active watch costs its weekly bid, charged daily from a wallet you top up on [Ko-fi](https://ko-fi.com/pavelk) with your personal DR-code. |
| **Bid to hear first** | When one listing matches several people's watches, the highest bid is alerted first; each next place a minute later. Alerts show your rank and the top rival bid. |

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/wallet-dark.png">
  <img src="docs/img/wallet.png" alt="Wallet: balance, cost per day, days left and Ko-fi top-up code">
</picture>

## Status

Private beta — invite only. No public download: the extension is shared directly with pilot users, and only invited Telegram accounts can log in. Built on Cloudflare Workers + D1, Telegram Login and a Chrome/Firefox extension.

---

© Pavel Kotyza · [4xs.dev](https://4xs.dev)

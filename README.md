<p align="center">
  <img src="docs/img/icon-512.png" alt="Deal Radar" width="96">
</p>

<h1 align="center">Deal Radar</h1>

<h1 align="center"><b>Be the first to message the seller.</b></h1><br>
<p align="center">Deal Radar watches Facebook Marketplace and your Facebook groups — plus the top marketplaces in Czechia, Slovakia, Poland, Germany, Austria, Norway, Sweden, Finland and Denmark, eBay.com and Craigslist in the US, Mercari in Japan and Chrono24 for watches — and pings you on Telegram within minutes of a new listing, before the deal is gone.</p>

<p align="center"><b>Private beta · invite only.</b> No public download — the browser extension is shared directly with invited pilot users.</p>

<p align="center">
  <a href="https://radar.4xs.dev">radar.4xs.dev</a> · <a href="https://kotyzap.github.io/Deal-Radar/">project page</a> · <a href="https://radar.4xs.dev/privacy">privacy</a> · by <a href="https://4xs.dev">4xs.dev</a>
</p>

## Sources

**Server** sources are checked by Deal Radar itself, also when your computer is off. **Browser** sources are checked by the extension in your own browser while it is open — these sites have no public search or block anything that isn't a real browser.

| Source | Country | Checked by |
|---|---|---|
| FB Marketplace | 🌎 | browser, every ~3 min, around your location (default Prague + 500 km) |
| FB groups | 🌎 | browser, every ~10 min, groups you joined and picked |
| eBay.com | 🌎 | browser, every ~3 min, US sellers only |
| Chrono24 | 🌎 | browser, every ~5 min |
| Bazoš CZ | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server, every minute |
| Aukro | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server, every minute |
| Sbazar | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server, every minute |
| Vinted | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | server, every 3 min; vinted.cz also lists items from Poland, Hungary, Romania, Croatia and Slovenia |
| Allegro.cz | <img src="docs/img/flags/cz.svg" alt="CZ" height="12"> | browser, every ~3 min |
| Bazoš SK | <img src="docs/img/flags/sk.svg" alt="SK" height="12"> | server, every minute |
| OLX.pl | <img src="docs/img/flags/pl.svg" alt="PL" height="12"> | server, every minute |
| Kleinanzeigen.de | <img src="docs/img/flags/de.svg" alt="DE" height="12"> | server, every minute |
| eBay.de | <img src="docs/img/flags/de.svg" alt="DE" height="12"> | browser, every ~3 min |
| willhaben.at | <img src="docs/img/flags/at.svg" alt="AT" height="12"> | server, every minute |
| eBay.at | <img src="docs/img/flags/at.svg" alt="AT" height="12"> | browser, every ~3 min |
| Craigslist | <img src="docs/img/flags/us.svg" alt="US" height="12"> | browser, up to 5 areas per watch |
| FINN.no | <img src="docs/img/flags/no.svg" alt="NO" height="12"> | server, every minute |
| Blocket.se | <img src="docs/img/flags/se.svg" alt="SE" height="12"> | server, every minute |
| Tori.fi | <img src="docs/img/flags/fi.svg" alt="FI" height="12"> | server, every minute |
| DBA.dk | <img src="docs/img/flags/dk.svg" alt="DK" height="12"> | server, every minute |
| Mercari JP | <img src="docs/img/flags/jp.svg" alt="JP" height="12"> | browser, every ~3 min; alerts add a Buyee link for buyers outside Japan |

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/coverage-dark.svg">
  <img src="docs/img/coverage.svg" alt="Map of the covered countries: Czechia, Slovakia, Poland, Germany, Austria, Denmark, Norway, Sweden, Finland, the USA and Japan, plus Hungary, Romania, Croatia and Slovenia via Vinted">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/watches-dark.png">
  <img src="docs/img/watches.png" alt="Deal Radar watches list with keywords, price range, sources, last check and bid">
</picture>

## What's new

- **One pause for everything.** The pause switch in the extension popup now stops all your searches and alerts — in the browser and on the server — for 1 h, 3 h or until you start again, and closes the pinned tab so your browser stays light. When you resume, listings posted during the pause don't flood you with alerts. Paused watches are still charged.
- **Allegro and eBay move to the browser.** Allegro.cz and eBay.de/.at/.com refuse every request that doesn't come from a real browser, so the extension now checks them every ~3 minutes while your browser is open. New watches leave them unticked.
- **From listing to alert.** radar.4xs.dev, the project page and this README show the path step by step, with a real Vinted alert. Vinted's catalog turns out to include Poland, Hungary, Romania, Croatia and Slovenia; the map shows them, and the editor suggests model numbers as keywords.
- **5 free watches.** During the free trial or a free invite, 5 watches are free (an invite can give more). Each one beyond costs from €5/week — every watch is searched on each of its sources, around the clock. If the wallet runs out, only those extra watches pause.
- **Smoother start.** Open the invite link or paste it into the extension — either order works. The app warns when Telegram can't reach you (Start not pressed) and has a Test button, and every watch shows when it was last checked.
- **Coverage map.** Marketplaces in 11 countries, plus FB, eBay.com and Chrono24 anywhere — see the map above.
- **Scandinavia.** FINN.no, Blocket.se, Tori.fi and DBA.dk, checked by the server every minute, newest first. Prices in NOK, SEK, EUR and DKK, with your currency next to them.
- **Chrono24 and Japan.** Chrono24 for watches, and Mercari JP — Mercari needs a Japanese phone number, so every Mercari alert also carries a Buyee link to buy from abroad. Both checked by the browser extension.
- **USA.** eBay.com (US sellers) and Craigslist: pick up to 5 Craigslist areas per watch from Craigslist's own list (a town belongs to its nearest city's area — Leander is in *austin*). Prices in USD.
- **Germany and Austria.** willhaben.at and Kleinanzeigen.de on the server, eBay.de and eBay.at in the browser.
- **Prices in your currency.** Pick CZK, EUR, PLN or USD. Alerts show the listing's own price and yours — “850 PLN (≈ 201 EUR)” — and you set a watch's min and max price in your currency.
- **Four languages.** The extension, radar.4xs.dev and the [project page](https://kotyzap.github.io/Deal-Radar/) speak English, Czech, German and Japanese. They follow your browser; switch in the header.

## From listing to alert

| | With Deal Radar | Checking by hand |
|---|---|---|
| **0:00** | A seller posts a G-Shock on Vinted. | |
| **1–3 min** | Deal Radar's next check finds it — every minute on most server sites, every ~3 minutes on Vinted, Facebook and the other browser sources. | |
| **+ seconds** | Telegram alert: title, price in your currency, link. | |
| **You** | Message the seller while the listing still says “listed a minute ago”. | Whenever you next refresh — often after someone else has already written. |

A real alert from 21 October (a Polish seller on Vinted, price converted to CZK; the listing said “listed a minute ago” when the alert was opened):

> **Casio G-Shock**<br>
> Zegarek Casio GShock WR 20Bar · G-Shock<br>
> 2 534 CZK · vinted<br>
> https://www.vinted.cz/items/…

| The server | Your browser |
|---|---|
| Your computer can be off: Bazoš, Aukro, Sbazar, Vinted, OLX, Kleinanzeigen, willhaben, FINN, Blocket, Tori, DBA. | The extension, while the browser is open: FB Marketplace, FB groups, Allegro, eBay, Craigslist, Mercari JP, Chrono24. |

**Tip:** use model numbers as keywords (GA-2100, 18-400). Vinted and FB groups show listings in Polish, Hungarian, Romanian and more, and a model number matches in every language.

## How it works

1. **Get an invite.** You receive an invite link and the Deal Radar extension for Chrome or Firefox directly — it isn't in any public store.
2. **Press Start in @DealRadarRobot, then log in with Telegram** — open the invite link, or the extension (popup → Watches → Get started) and paste the link there. No password, no e-mail. Alerts arrive in the same Telegram account; if Telegram can't reach you, the app says so and offers a test message.
3. **Create a watch.** Keywords that must appear, keywords that must not, a minimum and maximum price in your currency — CZK, EUR, PLN or USD (listings in other currencies are converted at the daily ČNB rate), the sources and, for Facebook, the groups to search. A 7-day preview shows what it would have caught.
4. **Get the alert.** A new listing that matches lands in Telegram with title, price (also in your currency) and link — you message the seller. The first check of a new watch only learns what is listed now, so you get alerts for new listings, not old ones.
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

## The browser extension

<img align="right" width="260" src="docs/img/popup.png" alt="Extension popup: searches, last check, latest alerts, Watches and Check now buttons">

- **Your own browser.** Facebook has no public search API, and Allegro, eBay, Mercari and Chrono24 turn away anything that isn't a real browser. So the extension runs these searches in your normal Chrome or Firefox — one pinned tab, newest first.
- **Your FB groups.** Many deals are posted only in collector groups. On the FB groups tab you tick up to 10 groups you've joined; each watch then picks which of them to search. The extension runs Facebook's own search inside each group for the watch's keywords, newest posts first.
- **Only offers, only for you.** A group post alerts only if it looks like an offer — a price or a sale word (prodám, na prodej, cenu nabídněte, sprzedam…) and no “wanted” word (koupím, hledám, kupię…). Group posts are private: they alert only the person whose browser found them, never go into the shared index and aren't part of the bidding.
- **Nothing leaves but listings.** The extension sends only the listings it sees (title, price, link) to the radar. Your Facebook login, messages and browsing stay in your browser. Details in the [privacy policy](https://radar.4xs.dev/privacy).
- **Server sources need no extension.** Bazoš, Aukro, Sbazar, Vinted, OLX.pl, willhaben.at, Kleinanzeigen.de and the Nordic sites are checked by the server, so those alerts keep coming when your computer is off.

<br clear="right">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/groups-dark.png">
  <img src="docs/img/groups.png" alt="FB groups tab: tick up to 10 joined groups that watches may search">
</picture>

*FB groups tab: tick the groups Deal Radar may search; each watch picks from these.*

## Pricing

| | |
|---|---|
| **Free start** | Every account starts with a free week with up to 5 free watches (an invite can give more watches or a longer free period). Each watch beyond them costs from €5/week, also during the free period. |
| **From €2 per watch per week** | After the free period, each active watch costs its weekly bid, charged daily from a wallet you top up on [Ko-fi](https://ko-fi.com/pavelk) with your personal DR-code. |
| **Bid to hear first** | When one listing matches several people's watches, the highest bid is alerted first; each next place a minute later. Alerts show your rank and the top rival bid. |

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/img/wallet-dark.png">
  <img src="docs/img/wallet.png" alt="Wallet: balance, cost per day, days left and Ko-fi top-up code">
</picture>

## Status

Private beta — invite only. No public download: the extension is shared directly with pilot users, and only invited Telegram accounts can log in. Built on Cloudflare Workers + D1, Telegram Login and a Chrome/Firefox extension.

Deal Radar is an independent project and is not affiliated with Meta/Facebook, eBay, Allegro, Vinted, Craigslist, Mercari, Chrono24, Telegram or any other marketplace it searches.

---

© Pavel Kotyza · [4xs.dev](https://4xs.dev)

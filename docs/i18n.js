// Deal Radar landing page (GitHub Pages) languages: English (default), Czech, German, Japanese. Pavel Kotyza <kotyza@gmail.com>
// Same engine as public/i18n.js (only the strings differ). The English stays in index.html; data-i18n / data-i18n-attr replace it.
(() => {
const LANGS = { en: 'English', cs: 'Čeština', de: 'Deutsch', ja: '日本語' };
const LOCALES = { en: 'en-GB', cs: 'cs-CZ', de: 'de-DE', ja: 'ja-JP' };
const S = { en: {}, cs: {}, de: {}, ja: {} };
const add = (k, en, cs, de, ja) => { if (en != null) S.en[k] = en; S.cs[k] = cs; S.de[k] = de; S.ja[k] = ja; };
const GH = `<a href="https://github.com/kotyzap/deal-radar">GitHub</a>`;

add('lang.label', null, `Jazyk`, `Sprache`, `言語`);
add('theme.toggle', null, `Přepnout motiv`, `Design wechseln`, `テーマ切替`);
add('theme.dark', `Dark`, `Tmavý`, `Dunkel`, `ダーク`);
add('theme.light', `Light`, `Světlý`, `Hell`, `ライト`);
add('meta.title', null, `Deal Radar — napište prodejci jako první`, `Deal Radar — schreiben Sie dem Verkäufer als Erster`, `Deal Radar — 誰よりも早く出品者に連絡しよう`);
add('hero.kicker', null, `Soukromá beta · jen na pozvánku`, `Private Beta · nur mit Einladung`, `プライベートベータ・招待制`);
add('hero.h1', null, `Napište prodejci jako první.`, `Schreiben Sie dem Verkäufer als Erster.`, `誰よりも早く出品者に連絡しよう。`);
add('hero.lead', null,
  `Deal Radar hlídá Facebook Marketplace a vaše facebookové skupiny — a k tomu nejlepší bazary v Česku, na Slovensku, v Polsku, Německu, Rakousku, Norsku, Švédsku, Finsku a Dánsku, eBay.com a Craigslist v USA, Mercari v Japonsku a Chrono24 na hodinky — a do minuty od vložení nového inzerátu vám napíše na Telegram, dřív než je nabídka pryč.`,
  `Deal Radar überwacht Facebook Marketplace und Ihre Facebook-Gruppen — dazu die wichtigsten Marktplätze in Tschechien, der Slowakei, Polen, Deutschland, Österreich, Norwegen, Schweden, Finnland und Dänemark, eBay.com und Craigslist in den USA, Mercari in Japan und Chrono24 für Uhren — und meldet sich innerhalb einer Minute nach einem neuen Angebot auf Telegram, bevor das Schnäppchen weg ist.`,
  `Deal RadarはFacebook MarketplaceとあなたのFacebookグループ、さらにチェコ・スロバキア・ポーランド・ドイツ・オーストリア・ノルウェー・スウェーデン・フィンランド・デンマークの主要マーケットプレイス、米国のeBay.comとCraigslist、日本のメルカリ、時計のChrono24を監視し、新しい出品から1分以内、売り切れる前にTelegramで通知します。`);
add('cta.how', null, `Jak to funguje`, `So funktioniert's`, `仕組み`);
add('cta.github', null, `Zobrazit na GitHubu`, `Auf GitHub ansehen`, `GitHubで見る`);
add('hero.invite', null,
  `Deal Radar je v soukromém pilotu. Veřejně ke stažení není: rozšíření prohlížeče dostávají přímo pozvaní uživatelé.`,
  `Deal Radar ist in einem privaten Pilotbetrieb. Es gibt keinen öffentlichen Download: Die Browser-Erweiterung wird direkt an eingeladene Nutzer weitergegeben.`,
  `Deal Radarは非公開のパイロット運用中です。一般公開のダウンロードはなく、ブラウザ拡張機能は招待されたユーザーに直接配布されます。`);
add('src.fbGroups', null, `FB skupiny`, `FB-Gruppen`, `FBグループ`);
add('alt.watches', null, `Seznam hlídačů Deal Radaru s klíčovými slovy, cenovým limitem, zdroji a nabídkou`, `Deal-Radar-Suchaufträge mit Stichwörtern, Preisgrenze, Quellen und Gebot`, `キーワード・価格上限・ソース・入札額を表示したDeal Radarのウォッチ一覧`);
add('alt.watchesDark', null, `Seznam hlídačů Deal Radaru, tmavý motiv`, `Deal-Radar-Suchaufträge, dunkles Design`, `Deal Radarのウォッチ一覧（ダークテーマ）`);
add('alt.editor', null, `Editor hlídače s minimální a maximální cenou, zdroji, FB skupinami a 7denním náhledem odpovídajících inzerátů`, `Suchauftrag-Editor mit Mindest- und Höchstpreis, Quellen, FB-Gruppen und 7-Tage-Vorschau passender Angebote`, `最低・最高価格、ソース、FBグループ、一致する出品の7日間プレビューを表示したウォッチエディタ`);
add('alt.editorDark', null, `Editor hlídače, tmavý motiv`, `Suchauftrag-Editor, dunkles Design`, `ウォッチエディタ（ダークテーマ）`);
add('alt.alerts', null, `Seznam upozornění s cenami, zdroji a hodnocením Trefa / Mimo`, `Trefferliste mit Preisen, Quellen und Bewertungen Gut / Unpassend`, `価格・ソース・「良い／不要」評価を表示した通知一覧`);
add('alt.alertsDark', null, `Seznam upozornění, tmavý motiv`, `Trefferliste, dunkles Design`, `通知一覧（ダークテーマ）`);
add('alt.popup', null, `Vyskakovací okno rozšíření: hledání na FB Marketplace a ve skupinách, poslední kontrola, poslední upozornění`, `Popup der Erweiterung: Suchen in FB Marketplace und Gruppen, letzte Prüfung, neueste Treffer`, `拡張機能のポップアップ：FB Marketplaceとグループの検索、最終チェック、最新の通知`);
add('alt.popupDark', null, `Vyskakovací okno rozšíření, tmavý motiv`, `Popup der Erweiterung, dunkles Design`, `拡張機能のポップアップ（ダークテーマ）`);
add('alt.groups', null, `Karta FB skupiny: zaškrtněte až 10 skupin, které smí hlídače prohledávat`, `Tab FB-Gruppen: bis zu 10 beigetretene Gruppen anhaken, die Suchaufträge durchsuchen dürfen`, `FBグループタブ：ウォッチが検索できる参加中のグループを最大10個チェック`);
add('alt.groupsDark', null, `Karta FB skupiny, tmavý motiv`, `Tab FB-Gruppen, dunkles Design`, `FBグループタブ（ダークテーマ）`);
add('alt.wallet', null, `Peněženka: zůstatek, cena za den, zbývající dny a kód pro dobití přes Ko-fi`, `Guthaben: Stand, Kosten pro Tag, verbleibende Tage und Ko-fi-Aufladecode`, `ウォレット：残高、1日あたりの費用、残り日数、Ko-fiチャージ用コード`);
add('alt.walletDark', null, `Peněženka, tmavý motiv`, `Guthaben, dunkles Design`, `ウォレット（ダークテーマ）`);

add('how.1', null,
  `<b>Získejte pozvánku.</b> Rozšíření Deal Radar pro Chrome nebo Firefox dostanete přímo — v žádném veřejném obchodě není.`,
  `<b>Einladung erhalten.</b> Sie bekommen die Deal-Radar-Erweiterung für Chrome oder Firefox direkt — sie ist in keinem öffentlichen Store.`,
  `<b>招待を受ける。</b>Chrome／Firefox用のDeal Radar拡張機能が直接届きます。公開ストアにはありません。`);
add('how.2', null,
  `<b>Přihlaste se přes Telegram</b> v rozšíření (vyskakovací okno → Hlídače). Žádné heslo, žádný e-mail. Upozornění chodí na stejný účet Telegram.`,
  `<b>Mit Telegram anmelden</b> in der Erweiterung (Popup → Suchaufträge). Kein Passwort, keine E-Mail. Treffer kommen im selben Telegram-Konto an.`,
  `拡張機能から<b>Telegramでログイン</b>（ポップアップ → ウォッチ）。パスワードもメールも不要。通知は同じTelegramアカウントに届きます。`);
add('how.3', null,
  `<b>Vytvořte hlídač.</b> Klíčová slova, která musí být v názvu, slova, která tam být nesmí, minimální a maximální cena ve vaší měně — CZK, EUR, PLN nebo USD (inzeráty v jiných měnách se přepočítávají denním kurzem ČNB), zdroje a u Facebooku skupiny, které se mají prohledávat. 7denní náhled ukáže, co by zachytil.`,
  `<b>Suchauftrag anlegen.</b> Stichwörter, die vorkommen müssen, Stichwörter, die nicht vorkommen dürfen, Mindest- und Höchstpreis in Ihrer Währung — CZK, EUR, PLN oder USD (Angebote in anderen Währungen werden zum täglichen ČNB-Kurs umgerechnet), die Quellen und bei Facebook die zu durchsuchenden Gruppen. Eine 7-Tage-Vorschau zeigt, was er gefunden hätte.`,
  `<b>ウォッチを作成。</b>含めるキーワード、除外するキーワード、あなたの通貨（CZK・EUR・PLN・USD）での最低・最高価格（他の通貨の出品はČNBの日次レートで換算）、ソース、Facebookの場合は検索するグループを指定します。7日間のプレビューで、何が見つかったはずかを確認できます。`);
add('news.h2', null, `Novinky`, `Neuigkeiten`, `最新情報`);
add('news.nordH', null, `Skandinávie`, `Skandinavien`, `北欧`);
add('news.nordP', null,
  `Mezi zdroje přibyly FINN.no, Blocket.se, Tori.fi a DBA.dk. Server je kontroluje každou minutu, nejnovější první. Ceny v NOK, SEK, EUR a DKK a vedle nich ve vaší měně.`,
  `FINN.no, Blocket.se, Tori.fi und DBA.dk kommen als Quellen dazu. Der Server fragt sie jede Minute ab, neueste zuerst. Preise in NOK, SEK, EUR und DKK, daneben in Ihrer Währung.`,
  `FINN.no、Blocket.se、Tori.fi、DBA.dkがソースに加わりました。サーバーが毎分、新しい順にチェックします。価格はNOK・SEK・EUR・DKKと、あなたの通貨で表示されます。`);
add('news.jpH', null, `Chrono24 a japonské Mercari`, `Chrono24 und Mercari Japan`, `Chrono24とメルカリ`);
add('news.jpP', null,
  `Obojí kontroluje rozšíření prohlížeče. Mercari vyžaduje japonské telefonní číslo, proto každé upozornění z Mercari obsahuje i odkaz na Buyee pro nákup ze zahraničí.`,
  `Beide prüft die Browser-Erweiterung. Mercari verlangt eine japanische Telefonnummer, deshalb enthält jede Mercari-Meldung auch einen Buyee-Link zum Kauf aus dem Ausland.`,
  `どちらもブラウザ拡張機能がチェックします。日本国外の方はメルカリで直接購入できないため、メルカリの通知には海外から購入できるBuyeeのリンクも付きます。`);
add('news.deH', null, `Německo a Rakousko`, `Deutschland und Österreich`, `ドイツとオーストリア`);
add('news.deP', null,
  `Mezi zdroje přibyly willhaben.at, Kleinanzeigen.de, eBay.de a eBay.at. Stejně jako Bazoš nebo OLX je server kontroluje každou minutu, nejnovější první.`,
  `willhaben.at, Kleinanzeigen.de, eBay.de und eBay.at kommen als Quellen dazu. Wie Bazoš oder OLX fragt der Server sie jede Minute ab, neueste zuerst.`,
  `willhaben.at、Kleinanzeigen.de、eBay.de、eBay.atがソースに加わりました。BazošやOLXと同じく、サーバーが毎分、新しい順にチェックします。`);
add('news.curH', null, `Ceny ve vaší měně`, `Preise in Ihrer Währung`, `あなたの通貨で価格表示`);
add('news.curP', null,
  `Vyberte CZK, EUR, PLN nebo USD. Upozornění ukážou původní cenu inzerátu i cenu ve vaší měně — „850 PLN (≈ 201 EUR)“ — a minimální i maximální cenu hlídače zadáváte ve své měně.`,
  `Wählen Sie CZK, EUR, PLN oder USD. Treffer zeigen den Originalpreis und Ihren — „850 PLN (≈ 201 EUR)“ — und Mindest- und Höchstpreis eines Suchauftrags geben Sie in Ihrer Währung ein.`,
  `CZK・EUR・PLN・USDから選べます。通知には出品の元の価格とあなたの通貨での価格（「850 PLN (≈ 201 EUR)」）が表示され、ウォッチの最低・最高価格もあなたの通貨で設定できます。`);
add('news.langH', null, `Čtyři jazyky`, `Vier Sprachen`, `4つの言語`);
add('news.langP', null,
  `Rozšíření, radar.4xs.dev i tato stránka mluví anglicky, česky, německy a japonsky. Řídí se jazykem prohlížeče; přepnout jde v záhlaví.`,
  `Die Erweiterung, radar.4xs.dev und diese Seite gibt es auf Englisch, Tschechisch, Deutsch und Japanisch. Sie folgen Ihrem Browser; umschalten können Sie oben in der Kopfzeile.`,
  `拡張機能、radar.4xs.dev、このページは英語・チェコ語・ドイツ語・日本語に対応。ブラウザの言語に従い、ヘッダーで切り替えられます。`);
add('how.4', null,
  `<b>Dostaňte upozornění.</b> Každý zdroj se kontroluje jednou za minutu. Nový odpovídající inzerát přistane v Telegramu s názvem, cenou (i ve vaší měně) a odkazem — a vy napíšete prodejci.`,
  `<b>Treffer erhalten.</b> Jede Quelle wird einmal pro Minute abgefragt. Ein neues passendes Angebot landet mit Titel, Preis (auch in Ihrer Währung) und Link in Telegram — Sie schreiben dem Verkäufer.`,
  `<b>通知を受け取る。</b>各ソースは1分ごとにチェックされます。一致する新しい出品は、タイトル・価格（あなたの通貨でも）・リンク付きでTelegramに届きます。あとは出品者に連絡するだけ。`);
add('how.5', null,
  `<b>Hodnoťte Trefa, nebo Mimo.</b> Jedno ťuknutí u každého upozornění řekne radaru, jak dobře je hlídač nastavený.`,
  `<b>Mit Gut oder Unpassend bewerten.</b> Ein Tipp pro Treffer zeigt dem Radar, wie gut ein Suchauftrag eingestellt ist.`,
  `<b>「良い」か「不要」で評価。</b>通知ごとにワンタップで、ウォッチの精度をレーダーに伝えます。`);
add('cap.editor', null,
  `Editor: cenové rozpětí, zdroje, FB skupiny hlídače a co by zachytil za posledních 7 dní.`,
  `Der Editor: Preisspanne, Quellen, die FB-Gruppen des Suchauftrags und was er in den letzten 7 Tagen gefunden hätte.`,
  `エディタ：価格帯、ソース、ウォッチのFBグループ、過去7日間に見つかったはずの出品。`);
add('cap.alerts', null,
  `Každé upozornění jde i na Telegram. „#1 z 3“ = dozvěděli jste se to první ze tří přihazujících; „#2 z 2“ = někdo vás přeplatil a dozvěděl se to o minutu dřív.`,
  `Jeder Treffer geht auch an Telegram. „#1 von 3“ = Sie haben es als Erster von drei Bietenden erfahren; „#2 von 2“ = jemand hat Sie überboten und es eine Minute früher erfahren.`,
  `すべての通知はTelegramにも届きます。「3人中1位」＝3人の入札者の中で最初に通知されたこと。「2人中2位」＝誰かがあなたより高く入札し、1分早く通知されたことを意味します。`);

add('fb.h2', null, `Facebook Marketplace a skupiny ve vašem vlastním prohlížeči`, `Facebook Marketplace und Gruppen, in Ihrem eigenen Browser`, `Facebook Marketplaceとグループを、あなた自身のブラウザで`);
add('fb.extH', null, `Rozšíření prohlížeče`, `Browser-Erweiterung`, `ブラウザ拡張機能`);
add('fb.extP', null,
  `FB nemá veřejné API pro vyhledávání, takže rozšíření kontroluje vaše hledání z vašeho běžného přihlášeného Chromu nebo Firefoxu — jedna připnutá karta, zhruba každé 3 minuty, nejnovější první, Praha + 500 km.`,
  `FB hat keine öffentliche Such-API, daher prüft die Erweiterung Ihre Suchen in Ihrem normalen, angemeldeten Chrome oder Firefox — ein angehefteter Tab, etwa alle 3 Minuten, neueste zuerst, Prag + 500 km.`,
  `FBには公開の検索APIがないため、拡張機能はログイン済みの普段のChromeやFirefoxから検索をチェックします。固定タブ1つで約3分ごと、新しい順、プラハから500km圏内。`);
add('fb.grpH', null, `Vaše FB skupiny`, `Ihre FB-Gruppen`, `あなたのFBグループ`);
add('fb.grpP', null,
  `Spousta nabídek se objeví jen ve sběratelských skupinách. Na kartě FB skupiny zaškrtnete až 10 skupin, ve kterých jste členem; každý hlídač si pak vybere, které z nich prohledávat. Rozšíření spouští vlastní vyhledávání Facebooku uvnitř každé skupiny podle klíčových slov hlídače, nejnovější příspěvky první, zhruba každých 10 minut.`,
  `Viele Angebote erscheinen nur in Sammlergruppen. Auf dem Tab FB-Gruppen haken Sie bis zu 10 Gruppen an, denen Sie beigetreten sind; jeder Suchauftrag wählt dann, welche davon durchsucht werden. Die Erweiterung nutzt die Facebook-eigene Suche in jeder Gruppe mit den Stichwörtern des Suchauftrags, neueste Beiträge zuerst, etwa alle 10 Minuten.`,
  `多くの掘り出し物はコレクターグループにしか投稿されません。FBグループタブで参加中のグループを最大10個チェックし、各ウォッチがその中から検索するグループを選びます。拡張機能は各グループ内でFacebook自身の検索をウォッチのキーワードで実行します（新しい投稿順、約10分ごと）。`);
add('fb.offH', null, `Jen nabídky, jen pro vás`, `Nur Angebote, nur für Sie`, `売り出しだけを、あなただけに`);
add('fb.offP', null,
  `Příspěvek ve skupině upozorní jen tehdy, když vypadá jako nabídka — má cenu nebo prodejní slovo (prodám, na prodej, cenu nabídněte, sprzedam…) a žádné slovo poptávky (koupím, hledám, kupię…). Příspěvky ze skupin jsou soukromé: upozorní jen toho, jehož prohlížeč je našel, nikdy nejdou do sdíleného indexu a nejsou součástí přihazování.`,
  `Ein Gruppenbeitrag löst nur dann einen Treffer aus, wenn er wie ein Angebot aussieht — ein Preis oder ein Verkaufswort (prodám, na prodej, cenu nabídněte, sprzedam…) und kein „Suche“-Wort (koupím, hledám, kupię…). Gruppenbeiträge sind privat: Sie benachrichtigen nur die Person, deren Browser sie gefunden hat, kommen nie in den gemeinsamen Index und sind nicht Teil des Bietens.`,
  `グループの投稿は、売り出しに見える場合だけ通知されます。つまり価格か販売を示す語（prodám、na prodej、cenu nabídněte、sprzedam…）があり、「買いたい」を示す語（koupím、hledám、kupię…）がない投稿です。グループの投稿は非公開で、見つけたブラウザの持ち主にだけ通知され、共有インデックスには入らず、入札の対象にもなりません。`);
add('fb.leaveH', null, `Ven jdou jen inzeráty`, `Nur Angebote verlassen den Browser`, `送信されるのは出品情報だけ`);
add('fb.leaveP', null,
  `Rozšíření posílá radaru jen karty a příspěvky, které vidí (název, cenu, odkaz). Vaše přihlášení k Facebooku zůstává v prohlížeči.`,
  `Die Erweiterung sendet nur die Karten und Beiträge, die sie sieht (Titel, Preis, Link), an das Radar. Ihre Facebook-Sitzung bleibt in Ihrem Browser.`,
  `拡張機能がレーダーに送るのは、見えたカードや投稿（タイトル・価格・リンク）だけです。Facebookのセッションはブラウザ内に留まります。`);
add('fb.otherH', null, `Ostatní zdroje rozšíření nepotřebují`, `Andere Quellen brauchen keine Erweiterung`, `他のソースは拡張機能不要`);
add('fb.otherP', null,
  `Bazoš, Aukro, Sbazar, Vinted, OLX.pl, Allegro.cz, willhaben.at, Kleinanzeigen.de a eBay.de/.at/.com kontroluje přímo server, takže upozornění chodí, i když máte počítač vypnutý.`,
  `Bazoš, Aukro, Sbazar, Vinted, OLX.pl, Allegro.cz, willhaben.at, Kleinanzeigen.de und eBay.de/.at/.com fragt der Server selbst ab, daher kommen Treffer auch bei ausgeschaltetem Computer.`,
  `Bazoš、Aukro、Sbazar、Vinted、OLX.pl、Allegro.cz、willhaben.at、Kleinanzeigen.de、eBay.de/.at/.comはサーバー自身がチェックするので、パソコンの電源が切れていても通知は届きます。`);
add('cap.popup', null, `Vyskakovací okno rozšíření.`, `Popup der Erweiterung.`, `拡張機能のポップアップ。`);
add('cap.groups', null,
  `Karta FB skupiny: zaškrtněte skupiny, které smí Deal Radar prohledávat; každý hlídač si z nich vybírá.`,
  `Tab FB-Gruppen: Haken Sie die Gruppen an, die Deal Radar durchsuchen darf; jeder Suchauftrag wählt daraus.`,
  `FBグループタブ：Deal Radarが検索してよいグループをチェックします。各ウォッチはこの中から選びます。`);

add('price.h2', null, `Ceník`, `Preise`, `料金`);
add('plan.1', null, `7 dní <small>zkušebně zdarma</small>`, `7 Tage <small>kostenlos testen</small>`, `7日間 <small>無料トライアル</small>`);
add('plan.1p', null, `Každý účet začíná týdnem neomezených hlídačů.`, `Jedes Konto startet mit einer Woche unbegrenzter Suchaufträge.`, `すべてのアカウントは、ウォッチ無制限の1週間から始まります。`);
add('plan.2', null, `od 2 € <small>za hlídač a týden</small>`, `ab 2 € <small>pro Suchauftrag und Woche</small>`, `€2から <small>ウォッチ1件・1週間あたり</small>`);
add('plan.2p', null,
  `Každý aktivní hlídač stojí svou týdenní nabídku, strhávanou denně z peněženky, kterou dobíjíte na Ko-fi se svým osobním DR-kódem.`,
  `Jeder aktive Suchauftrag kostet sein Wochengebot, täglich abgebucht vom Guthaben, das Sie auf Ko-fi mit Ihrem persönlichen DR-Code aufladen.`,
  `有効なウォッチごとに週間入札額がかかり、個人のDRコードを使ってKo-fiでチャージしたウォレットから毎日引き落とされます。`);
add('plan.3', null, `Přihoďte a dozvíte se to první <small></small>`, `Mehr bieten, früher erfahren <small></small>`, `入札して一番に知る <small></small>`);
add('plan.3p', null,
  `Když jeden inzerát odpovídá hlídačům více lidí, upozornění dostane nejdřív nejvyšší nabídka; každé další místo o minutu později. Upozornění ukazují vaše pořadí a nejvyšší nabídku soupeře.`,
  `Passt ein Angebot zu Suchaufträgen mehrerer Personen, wird das höchste Gebot zuerst benachrichtigt; jeder weitere Platz eine Minute später. Treffer zeigen Ihren Rang und das höchste Konkurrenzgebot.`,
  `1つの出品が複数の人のウォッチに一致した場合、最も高い入札者に最初に通知され、次の順位は1分ずつ遅れます。通知にはあなたの順位とライバルの最高入札額が表示されます。`);
add('status.h2', null, `Stav`, `Status`, `ステータス`);
add('status.p', null,
  `Soukromá beta — jen na pozvánku. Veřejně ke stažení není: rozšíření dostávají přímo pilotní uživatelé a přihlásit se mohou jen pozvané účty Telegram. Postaveno na Cloudflare Workers + D1, Telegram Login a rozšíření pro Chrome/Firefox. Zdrojový kód a changelog na <a href="https://github.com/kotyzap/deal-radar">GitHubu</a>.`,
  `Private Beta — nur mit Einladung. Kein öffentlicher Download: Die Erweiterung wird direkt an Pilotnutzer weitergegeben, und nur eingeladene Telegram-Konten können sich anmelden. Gebaut mit Cloudflare Workers + D1, Telegram Login und einer Chrome/Firefox-Erweiterung. Quellcode und Changelog auf ${GH}.`,
  `プライベートベータ（招待制）。一般公開のダウンロードはなく、拡張機能はパイロットユーザーに直接配布され、ログインできるのは招待されたTelegramアカウントだけです。Cloudflare Workers + D1、Telegram Login、Chrome／Firefox拡張機能で構築。ソースと変更履歴は${GH}で。`);

// ---- engine
let lang;
try { lang = localStorage.getItem('lang'); } catch {}
if (!LANGS[lang]) lang = (navigator.languages || [navigator.language]).map(l => String(l).toLowerCase().split('-')[0]).map(l => l === 'sk' ? 'cs' : l).find(l => LANGS[l]) || 'en';
if (globalThis.document) document.documentElement.lang = lang;
const plural = new Intl.PluralRules(LOCALES[lang]);
function t(key, v = {}) {
  let s = S[lang][key] ?? S.en[key] ?? key;
  if (typeof s === 'object') s = s[plural.select(v.n)] ?? s.other;
  return s.replace(/\{(\w+)\}/g, (m, k) => k in v ? v[k] : m);
}
function apply(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => { const s = S[lang][el.dataset.i18n]; if (s != null) el.innerHTML = s; });
  root.querySelectorAll('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(',').forEach(p => {
    const [a, k] = p.split(':'); const s = S[lang][k]; if (s != null) el.setAttribute(a, s);
  }));
}
// <select> in the header: lists the languages, saves the pick and reloads the page
function picker(sel) {
  sel.innerHTML = Object.entries(LANGS).map(([k, n]) => `<option value="${k}"${k === lang ? ' selected' : ''}>${n}</option>`).join('');
  sel.onchange = () => { try { localStorage.setItem('lang', sel.value); } catch {} location.reload(); };
}
globalThis.i18n = { lang, locale: LOCALES[lang], t, apply, picker, strings: S };
})();

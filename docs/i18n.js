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
add('hero.kicker', null,
  `Zdarma v prohlížeči · Telegram s předplatným`,
  `Kostenlos im Browser · Telegram mit dem Abo`,
  `ブラウザで無料・プランならTelegram`);
add('hero.h1', null, `Napište prodejci jako první.`, `Schreiben Sie dem Verkäufer als Erster.`, `誰よりも早く出品者に連絡しよう。`);
add('hero.lead', null,
  `Deal Radar hlídá Facebook Marketplace a vaše facebookové skupiny — a k tomu nejlepší bazary v Česku, na Slovensku, v Polsku, Německu, Rakousku, Norsku, Finsku a Dánsku, eBay.com a Craigslist v USA, Mercari v Japonsku a Chrono24 na hodinky — a dá vám vědět o novém inzerátu, dřív než je nabídka pryč.`,
  `Deal Radar überwacht Facebook Marketplace und Ihre Facebook-Gruppen — dazu die wichtigsten Marktplätze in Tschechien, der Slowakei, Polen, Deutschland, Österreich, Norwegen, Finnland und Dänemark, eBay.com und Craigslist in den USA, Mercari in Japan und Chrono24 für Uhren — und meldet ein neues Angebot, bevor das Schnäppchen weg ist.`,
  `Deal RadarはFacebook MarketplaceとあなたのFacebookグループ、さらにチェコ・スロバキア・ポーランド・ドイツ・オーストリア・ノルウェー・フィンランド・デンマークの主要マーケットプレイス、米国のeBay.comとCraigslist、日本のメルカリ、時計のChrono24を監視し、売り切れる前に新しい出品を知らせます。`);
add('cta.how', null, `Jak to funguje`, `So funktioniert's`, `仕組み`);
add('cta.github', null, `Zobrazit na GitHubu`, `Auf GitHub ansehen`, `GitHubで見る`);
add('hero.invite', null,
  `Zdarma: samotné rozšíření prohlížeče — 3 hlídače, kontrola každých 10 minut, oznámení v prohlížeči. Předplatné za 9 € měsíčně pro 5 hlídačů: upozornění na Telegram do mobilu a server, který kontroluje každou minutu, i když je počítač vypnutý.`,
  `Kostenlos: nur die Browser-Erweiterung — 3 Suchaufträge, alle 10 Minuten geprüft, Benachrichtigungen im Browser. Das Abo, 9 € im Monat für 5 Suchaufträge: Telegram-Meldungen aufs Handy und der Server prüft jede Minute, auch wenn Ihr Computer aus ist.`,
  `無料：ブラウザ拡張機能のみ — ウォッチ3件、10分ごとにチェック、ブラウザに通知。プランは5件で月9ユーロ：スマホにTelegram通知、サーバーが毎分チェック（パソコンがオフでも）。`);
add('src.fbGroups', null, `FB skupiny`, `FB-Gruppen`, `FBグループ`);
add('alt.watches', null, `Seznam hlídačů Deal Radaru s klíčovými slovy, cenovým rozsahem, zdroji a poslední kontrolou`, `Deal-Radar-Suchaufträge mit Stichwörtern, Preisspanne, Quellen und letzter Prüfung`, `キーワード・価格帯・ソース・最終チェックを表示したDeal Radarのウォッチ一覧`);
add('alt.watchesDark', null, `Seznam hlídačů Deal Radaru, tmavý motiv`, `Deal-Radar-Suchaufträge, dunkles Design`, `Deal Radarのウォッチ一覧（ダークテーマ）`);
add('alt.editor', null, `Editor hlídače s minimální a maximální cenou, zdroji, FB skupinami a 7denním náhledem odpovídajících inzerátů`, `Suchauftrag-Editor mit Mindest- und Höchstpreis, Quellen, FB-Gruppen und 7-Tage-Vorschau passender Angebote`, `最低・最高価格、ソース、FBグループ、一致する出品の7日間プレビューを表示したウォッチエディタ`);
add('alt.editorDark', null, `Editor hlídače, tmavý motiv`, `Suchauftrag-Editor, dunkles Design`, `ウォッチエディタ（ダークテーマ）`);
add('alt.alerts', null, `Seznam upozornění s cenami, zdroji a hodnocením Trefa / Mimo`, `Trefferliste mit Preisen, Quellen und Bewertungen Gut / Unpassend`, `価格・ソース・「良い／不要」評価を表示した通知一覧`);
add('alt.alertsDark', null, `Seznam upozornění, tmavý motiv`, `Trefferliste, dunkles Design`, `通知一覧（ダークテーマ）`);
add('alt.popup', null, `Vyskakovací okno rozšíření: hledání na FB Marketplace a ve skupinách, poslední kontrola, poslední upozornění`, `Popup der Erweiterung: Suchen in FB Marketplace und Gruppen, letzte Prüfung, neueste Treffer`, `拡張機能のポップアップ：FB Marketplaceとグループの検索、最終チェック、最新の通知`);
add('alt.popupDark', null, `Vyskakovací okno rozšíření, tmavý motiv`, `Popup der Erweiterung, dunkles Design`, `拡張機能のポップアップ（ダークテーマ）`);
add('alt.groups', null, `Karta FB skupiny: zaškrtněte až 10 skupin, které smí hlídače prohledávat`, `Tab FB-Gruppen: bis zu 10 beigetretene Gruppen anhaken, die Suchaufträge durchsuchen dürfen`, `FBグループタブ：ウォッチが検索できる参加中のグループを最大10個チェック`);
add('alt.groupsDark', null, `Karta FB skupiny, tmavý motiv`, `Tab FB-Gruppen, dunkles Design`, `FBグループタブ（ダークテーマ）`);
add('alt.wallet', null, `Karta Předplatné: zdarma vs. předplatné a jak ho získat přes Telegram a Ko-fi`, `Abo-Tab: kostenlos vs. Abo und wie man es mit Telegram und Ko-fi startet`, `プランタブ：無料とプランの比較、TelegramとKo-fiでの始め方`);
add('alt.walletDark', null, `Karta Předplatné, tmavý motiv`, `Abo-Tab, dunkles Design`, `プランタブ（ダークテーマ）`);

add('how.1', null,
  `<b>Nainstalujte rozšíření</b> pro Chrome (verze pro Firefox je zkušební). Nic se neregistruje.`,
  `<b>Installieren Sie die Erweiterung</b> für Chrome (der Firefox-Build ist experimentell). Keine Anmeldung nötig.`,
  `Chrome用の<b>拡張機能をインストール</b>（Firefox版は試験的）。登録は不要です。`);
add('how.2', null,
  `<b>Chcete to v mobilu?</b> Rozšíření → Předplatné: stiskněte Start v @DealRadarRobot, přihlaste se přes Telegram a staňte se členem na Ko-fi se svým kódem DR. Rozšíření se přepne samo do 5 minut, dokud je prohlížeč otevřený.`,
  `<b>Lieber aufs Handy?</b> Erweiterung → Abo: Start bei @DealRadarRobot drücken, mit Telegram anmelden und auf Ko-fi mit Ihrem DR-Code Mitglied werden. Die Erweiterung wechselt innerhalb von 5 Minuten von selbst, solange der Browser offen ist.`,
  `<b>スマホで受け取りたい？</b>拡張機能 → プラン：@DealRadarRobotでStartを押し、Telegramでログインして、DRコード付きでKo-fiのメンバーになります。ブラウザが開いていれば、拡張機能は5分以内に自動で切り替わります。`);
add('how.3', null,
  `<b>Vytvořte hlídač.</b> Klíčová slova, která musí být v názvu, slova, která tam být nesmí, minimální a maximální cena ve vaší měně — CZK, EUR, PLN nebo USD (inzeráty v jiných měnách se přepočítávají denním kurzem ČNB), zdroje (rychlý výběr podle země) a u Facebooku skupiny, které se mají prohledávat. Inzeráty bez ceny jen když to zaškrtnete. 7denní náhled ukáže, co by zachytil.`,
  `<b>Suchauftrag anlegen.</b> Stichwörter, die vorkommen müssen, Stichwörter, die nicht vorkommen dürfen, Mindest- und Höchstpreis in Ihrer Währung — CZK, EUR, PLN oder USD (Angebote in anderen Währungen werden zum täglichen ČNB-Kurs umgerechnet), die Quellen (Schnellauswahl nach Land) und bei Facebook die zu durchsuchenden Gruppen. Angebote ohne Preis nur, wenn Sie es ankreuzen. Eine 7-Tage-Vorschau zeigt, was er gefunden hätte.`,
  `<b>ウォッチを作成。</b>含めるキーワード、除外するキーワード、あなたの通貨（CZK・EUR・PLN・USD）での最低・最高価格（他の通貨の出品はČNBの日次レートで換算）、ソース（国別のクイック選択）、Facebookの場合は検索するグループを指定します。価格のない出品はチェックした場合のみ。7日間のプレビューで、何が見つかったはずかを確認できます。`);
add('flow.h', null, `Od inzerátu k upozornění`, `Vom Inserat zur Benachrichtigung`, `出品から通知まで`);
add('flow.you', null, `S Deal Radarem`, `Mit Deal Radar`, `Deal Radarなら`);
add('flow.s1h', null, `Vloženo`, `Eingestellt`, `出品`);
add('flow.s1p', null, `Prodejce vloží G-Shock na Vinted.`, `Ein Verkäufer stellt eine G-Shock auf Vinted ein.`, `出品者がVintedにG-Shockを出品。`);
add('flow.s2t', null, `1–3 min`, `1–3 Min.`, `1〜3分`);
add('flow.s2h', null, `Nalezeno`, `Gefunden`, `検出`);
add('flow.s2p', null, `Najde ho další kontrola Deal Radaru: na většině webů každou minutu, na Vintedu a Facebooku každé 3 minuty.`, `Die nächste Prüfung von Deal Radar findet es: auf den meisten Seiten jede Minute, auf Vinted und Facebook alle 3 Minuten.`, `Deal Radarの次のチェックで見つかります。ほとんどのサイトは毎分、VintedとFacebookは3分ごと。`);
add('flow.s3t', null, `+ pár sekund`, `+ Sekunden`, `+ 数秒`);
add('flow.s3h', null, `Upozornění v Telegramu`, `Telegram-Nachricht`, `Telegram通知`);
add('flow.s3p', null, `Název, cena ve vaší měně a odkaz — v telefonu.`, `Titel, Preis in Ihrer Währung und Link — auf dem Handy.`, `タイトル、あなたの通貨での価格、リンクがスマホに届きます。`);
add('flow.s4t', null, `vy`, `Sie`, `あなた`);
add('flow.s4h', null, `Napíšete prodejci`, `Sie schreiben dem Verkäufer`, `出品者に連絡`);
add('flow.s4p', null, `Inzerát pořád ukazuje „vystaveno před minutou“.`, `Das Inserat zeigt noch „vor einer Minute eingestellt“.`, `出品にはまだ「1分前に出品」と表示されています。`);
add('flow.hand', null, `Ruční hledání`, `Von Hand suchen`, `手動で検索`);
add('flow.slowH', null, `Až příště obnovíte stránku`, `Wenn Sie das nächste Mal neu laden`, `次にページを更新したとき`);
add('flow.slowP', null, `Často až poté, co prodejci napsal někdo jiný.`, `Oft erst, nachdem jemand anderes dem Verkäufer geschrieben hat.`, `たいていは、他の誰かがすでに出品者に連絡した後です。`);
add('flow.realK', null, `Skutečné upozornění, 21. října`, `Eine echte Benachrichtigung, 21. Oktober`, `実際の通知（10月21日）`);
add('flow.realP', null, `Prodejce z Polska na Vintedu, cena převedená na Kč. Když se upozornění otevřelo, inzerát ukazoval „vystaveno před minutou“.`, `Ein polnischer Verkäufer auf Vinted, Preis in CZK umgerechnet. Beim Öffnen der Benachrichtigung zeigte das Inserat „vor einer Minute eingestellt“.`, `Vintedのポーランドの出品者、価格はCZKに換算。通知を開いたとき、出品には「1分前に出品」と表示されていました。`);
add('flow.engK', null, `Kdo co kontroluje`, `Wer was prüft`, `チェックの担当`);
add('flow.srvH', null, `Server`, `Der Server`, `サーバー`);
add('flow.srvP', null,
  `S předplatným: každou minutu, počítač může být vypnutý. Bazoš, Aukro, Sbazar, Vinted, OLX, Kleinanzeigen, willhaben, FINN, Tori, DBA. Zdarma je kontroluje váš prohlížeč, každých 10 minut.`,
  `Mit dem Abo: jede Minute, Ihr Computer darf aus sein. Bazoš, Aukro, Sbazar, Vinted, OLX, Kleinanzeigen, willhaben, FINN, Tori, DBA. Kostenlos prüft Ihr Browser sie, alle 10 Minuten.`,
  `プランなら毎分。パソコンの電源は切れていても大丈夫。Bazoš、Aukro、Sbazar、Vinted、OLX、Kleinanzeigen、willhaben、FINN、Tori、DBA。無料ではブラウザが10分ごとにチェックします。`);
add('flow.extH', null, `Váš prohlížeč`, `Ihr Browser`, `あなたのブラウザ`);
add('flow.extP', null, `Rozšíření, dokud je prohlížeč otevřený. FB Marketplace, FB skupiny, Craigslist, Mercari JP, Chrono24, Allegro, eBay.`, `Die Erweiterung, solange der Browser offen ist. FB Marketplace, FB-Gruppen, Craigslist, Mercari JP, Chrono24, Allegro, eBay.`, `ブラウザが開いている間は拡張機能が担当。FB Marketplace、FBグループ、Craigslist、メルカリ、Chrono24、Allegro、eBay。`);
add('cov.h2', null, `Kde Deal Radar hledá`, `Wo Deal Radar sucht`, `Deal Radarの検索範囲`);
add('cov.p', null,
  `Bazary v 10 zemích se kontrolují od nejnovějších — s předplatným serverem každou minutu, zdarma vaším prohlížečem každých 10 minut. Katalog Vintedu přidává inzeráty z Polska, Maďarska, Rumunska, Chorvatska a Slovinska. Facebook Marketplace, vaše facebookové skupiny, eBay.com a Chrono24 fungují, ať jste kdekoli.`,
  `Marktplätze in 10 Ländern werden neueste zuerst geprüft — mit dem Abo jede Minute vom Server, kostenlos alle 10 Minuten von Ihrem Browser. Vinteds Katalog ergänzt Angebote aus Polen, Ungarn, Rumänien, Kroatien und Slowenien. Facebook Marketplace, Ihre Facebook-Gruppen, eBay.com und Chrono24 funktionieren überall.`,
  `10か国のマーケットプレイスを新しい順にチェックします — プランならサーバーが毎分、無料ならブラウザが10分ごと。Vintedのカタログにはポーランド・ハンガリー・ルーマニア・クロアチア・スロベニアの出品も含まれます。Facebook Marketplace、Facebookグループ、eBay.com、Chrono24はどこでも使えます。`);
add('alt.map', null, `Mapa: pokryté jsou Česko, Slovensko, Polsko, Německo, Rakousko, Dánsko, Norsko, Finsko, USA a Japonsko; Vinted přidává Maďarsko, Rumunsko, Chorvatsko a Slovinsko`, `Karte: abgedeckt sind Tschechien, Slowakei, Polen, Deutschland, Österreich, Dänemark, Norwegen, Finnland, USA und Japan; Vinted ergänzt Ungarn, Rumänien, Kroatien und Slowenien`, `地図：チェコ、スロバキア、ポーランド、ドイツ、オーストリア、デンマーク、ノルウェー、フィンランド、米国、日本が対象。Vintedでハンガリー、ルーマニア、クロアチア、スロベニアも`);
add('news.v21H', null, `2.1: hladší start`, `2.1: ein glatterer Start`, `2.1：よりスムーズなスタート`);
add('news.v21P', null,
  `Po zaplacení se rozšíření samo přepne na předplatné do 5 minut — žádnou kartu nemusíte nechávat otevřenou. Přihlášení už nevyprší, dokud Deal Radar používáte. Nové hlídače začínají se stránkami vaší země (zbytek rychlým výběrem), inzeráty bez ceny jen když chcete, a hlídače jde exportovat do souboru.`,
  `Nach dem Bezahlen wechselt die Erweiterung innerhalb von 5 Minuten von selbst zum Abo — kein Tab muss offen bleiben. Anmeldungen laufen nicht mehr ab, solange Sie Deal Radar nutzen. Neue Suchaufträge starten mit den Seiten Ihres Landes (Schnellauswahl für den Rest), Angebote ohne Preis nur auf Wunsch, und Suchaufträge lassen sich als Datei exportieren.`,
  `支払い後、拡張機能は5分以内に自動でプランに切り替わります — タブを開いたままにする必要はありません。Deal Radarを使っている間はログインが切れません。新しいウォッチはあなたの国のサイトから始まり（他はクイック選択）、価格のない出品は希望時のみ、ウォッチはファイルに書き出せます。`);
add('news.freeH', null,
  `Zdarma v prohlížeči`,
  `Kostenlos im Browser`,
  `ブラウザで無料`);
add('news.freeP', null,
  `Deal Radar 2.0: bez účtu, bez pozvánky. Nainstalujte rozšíření a přidejte až 3 hlídače; každý web se kontroluje z vašeho prohlížeče každých 10 minut a shody vyskočí jako oznámení. Po vypnutém počítači vám jedno shrnutí řekne, kolik jich mezitím přišlo.`,
  `Deal Radar 2.0: kein Konto, keine Einladung. Erweiterung installieren, bis zu 3 Suchaufträge anlegen; jede Seite wird alle 10 Minuten aus Ihrem Browser geprüft, Treffer erscheinen als Benachrichtigung. War der Computer aus, sagt eine Zusammenfassung, wie viele inzwischen kamen.`,
  `Deal Radar 2.0：アカウントも招待も不要。拡張機能を入れてウォッチを3件まで追加すると、各サイトをブラウザから10分ごとにチェックし、一致を通知します。パソコンがオフだった後は、その間の件数をまとめて知らせます。`);
add('news.startH', null,
  `Předplatné: Telegram + server`,
  `Das Abo: Telegram + Server`,
  `プラン：Telegram＋サーバー`);
add('news.startP', null,
  `9 € měsíčně za 5 hlídačů, jako členství na Ko-fi. Server kontroluje každou minutu, i když je počítač vypnutý, a upozornění chodí do mobilu. Po zaplacení se rozšíření přepne samo. Žádné přihazování: všichni se to dozví naráz.`,
  `9 € im Monat für 5 Suchaufträge, als Ko-fi-Mitgliedschaft. Der Server prüft jede Minute, auch wenn der Computer aus ist, und Meldungen kommen aufs Handy. Nach der Zahlung wechselt die Erweiterung von selbst. Kein Bieten mehr: Alle erfahren es gleichzeitig.`,
  `Ko-fiのメンバーシップで5件月9ユーロ。サーバーがパソコンオフ時も毎分チェックし、通知はスマホに届きます。支払うと拡張機能が自動で切り替わります。入札は廃止：全員が同時に知らされます。`);
add('news.h2', null, `Novinky`, `Neuigkeiten`, `最新情報`);
add('news.nordH', null, `Skandinávie`, `Skandinavien`, `北欧`);
add('news.nordP', null,
  `FINN.no, Tori.fi a DBA.dk patří mezi zdroje, kontrolují se od nejnovějších. Ceny v NOK, EUR a DKK, vedle nich ve vaší měně.`,
  `FINN.no, Tori.fi und DBA.dk gehören zu den Quellen, neueste zuerst geprüft. Preise in NOK, EUR und DKK, daneben in Ihrer Währung.`,
  `FINN.no、Tori.fi、DBA.dkをソースとして新しい順にチェックします。価格はNOK・EUR・DKKで、あなたの通貨も併記します。`);
add('news.jpH', null, `Chrono24 a japonské Mercari`, `Chrono24 und Mercari Japan`, `Chrono24とメルカリ`);
add('news.jpP', null,
  `Obojí kontroluje rozšíření prohlížeče. Mercari vyžaduje japonské telefonní číslo, proto každé upozornění z Mercari obsahuje i odkaz na Buyee pro nákup ze zahraničí.`,
  `Beide prüft die Browser-Erweiterung. Mercari verlangt eine japanische Telefonnummer, deshalb enthält jede Mercari-Meldung auch einen Buyee-Link zum Kauf aus dem Ausland.`,
  `どちらもブラウザ拡張機能がチェックします。日本国外の方はメルカリで直接購入できないため、メルカリの通知には海外から購入できるBuyeeのリンクも付きます。`);
add('news.curH', null, `Ceny ve vaší měně`, `Preise in Ihrer Währung`, `あなたの通貨で価格表示`);
add('news.curP', null,
  `Vyberte CZK, EUR, PLN nebo USD. Upozornění ukážou původní cenu inzerátu i cenu ve vaší měně — „850 PLN (≈ 201 EUR)“ — a minimální i maximální cenu hlídače zadáváte ve své měně.`,
  `Wählen Sie CZK, EUR, PLN oder USD. Treffer zeigen den Originalpreis und Ihren — „850 PLN (≈ 201 EUR)“ — und Mindest- und Höchstpreis eines Suchauftrags geben Sie in Ihrer Währung ein.`,
  `CZK・EUR・PLN・USDから選べます。通知には出品の元の価格とあなたの通貨での価格（「850 PLN (≈ 201 EUR)」）が表示され、ウォッチの最低・最高価格もあなたの通貨で設定できます。`);
add('how.4', null,
  `<b>Dostanete upozornění.</b> Zdarma: oznámení v prohlížeči do 10–12 minut. S předplatným: Telegram, u zdrojů serveru do minuty — název, cena (i ve vaší měně) a odkaz; prodejci napíšete vy.`,
  `<b>Meldung erhalten.</b> Kostenlos: eine Benachrichtigung im Browser innerhalb von 10–12 Minuten. Mit dem Abo: Telegram, bei den Server-Quellen innerhalb einer Minute — Titel, Preis (auch in Ihrer Währung) und Link; Sie schreiben dem Verkäufer.`,
  `<b>通知を受け取る。</b>無料：10〜12分以内にブラウザへ通知。プラン：サーバーのソースなら1分以内にTelegramへ — タイトル、価格（あなたの通貨でも）、リンク。出品者への連絡はあなたが。`);
add('how.5', null,
  `<b>Hodnoťte Trefa, nebo Mimo.</b> Jedno ťuknutí u každého upozornění řekne radaru, jak dobře je hlídač nastavený.`,
  `<b>Mit Gut oder Unpassend bewerten.</b> Ein Tipp pro Treffer zeigt dem Radar, wie gut ein Suchauftrag eingestellt ist.`,
  `<b>「良い」か「不要」で評価。</b>通知ごとにワンタップで、ウォッチの精度をレーダーに伝えます。`);
add('cap.editor', null,
  `Editor: cenové rozpětí, zdroje, FB skupiny hlídače a co by zachytil za posledních 7 dní.`,
  `Der Editor: Preisspanne, Quellen, die FB-Gruppen des Suchauftrags und was er in den letzten 7 Tagen gefunden hätte.`,
  `エディタ：価格帯、ソース、ウォッチのFBグループ、過去7日間に見つかったはずの出品。`);
add('cap.alerts', null,
  `Upozornění s cenami, zdroji a hlasy Dobré / Nic moc. S předplatným jde každé upozornění i na Telegram.`,
  `Meldungen mit Preisen, Quellen und Gut-/Schrott-Stimmen. Mit dem Abo geht jede Meldung auch auf Telegram.`,
  `価格・ソース・良い／不要の評価付きの通知一覧。プランでは各通知がTelegramにも届きます。`);

add('fb.h2', null, `Facebook Marketplace a skupiny ve vašem vlastním prohlížeči`, `Facebook Marketplace und Gruppen, in Ihrem eigenen Browser`, `Facebook Marketplaceとグループを、あなた自身のブラウザで`);
add('fb.extH', null, `Rozšíření prohlížeče`, `Browser-Erweiterung`, `ブラウザ拡張機能`);
add('fb.extP', null,
  `FB nemá veřejné API pro vyhledávání, takže rozšíření kontroluje vaše hledání z vašeho běžného přihlášeného Chromu — jedna připnutá karta, zhruba každé 3 minuty, nejnovější první, Praha + 500 km.`,
  `FB hat keine öffentliche Such-API, daher prüft die Erweiterung Ihre Suchen in Ihrem normalen, angemeldeten Chrome — ein angehefteter Tab, etwa alle 3 Minuten, neueste zuerst, Prag + 500 km.`,
  `FBには公開の検索APIがないため、拡張機能はログイン済みの普段のChromeから検索をチェックします。固定タブ1つで約3分ごと、新しい順、プラハから500km圏内。`);
add('fb.grpH', null, `Vaše FB skupiny`, `Ihre FB-Gruppen`, `あなたのFBグループ`);
add('fb.grpP', null,
  `Spousta nabídek se objeví jen ve sběratelských skupinách. Na kartě FB skupiny zaškrtnete až 10 skupin, ve kterých jste členem; každý hlídač si pak vybere, které z nich prohledávat. Rozšíření spouští vlastní vyhledávání Facebooku uvnitř každé skupiny podle klíčových slov hlídače, nejnovější příspěvky první, zhruba každých 10 minut.`,
  `Viele Angebote erscheinen nur in Sammlergruppen. Auf dem Tab FB-Gruppen haken Sie bis zu 10 Gruppen an, denen Sie beigetreten sind; jeder Suchauftrag wählt dann, welche davon durchsucht werden. Die Erweiterung nutzt die Facebook-eigene Suche in jeder Gruppe mit den Stichwörtern des Suchauftrags, neueste Beiträge zuerst, etwa alle 10 Minuten.`,
  `多くの掘り出し物はコレクターグループにしか投稿されません。FBグループタブで参加中のグループを最大10個チェックし、各ウォッチがその中から検索するグループを選びます。拡張機能は各グループ内でFacebook自身の検索をウォッチのキーワードで実行します（新しい投稿順、約10分ごと）。`);
add('fb.offH', null, `Jen nabídky, jen pro vás`, `Nur Angebote, nur für Sie`, `売り出しだけを、あなただけに`);
add('fb.offP', null,
  `Příspěvek ve skupině upozorní jen tehdy, když vypadá jako nabídka — cena nebo prodejní slovo (prodám, na prodej, cenu nabídněte, sprzedam…) a žádné slovo poptávky (koupím, hledám, kupię…). Příspěvky ze skupin jsou soukromé: upozorní jen toho, čí prohlížeč je našel, a nikdy nejdou do sdíleného indexu.`,
  `Ein Gruppenbeitrag meldet sich nur, wenn er wie ein Angebot aussieht — ein Preis oder ein Verkaufswort (prodám, na prodej, cenu nabídněte, sprzedam…) und kein Suchwort (koupím, hledám, kupię…). Gruppenbeiträge sind privat: Sie melden sich nur bei der Person, deren Browser sie gefunden hat, und landen nie im gemeinsamen Index.`,
  `グループ投稿は、出品らしい場合だけ通知します — 価格か販売を示す語（prodám、na prodej、cenu nabídněte、sprzedam…）があり、「求む」の語（koupím、hledám、kupię…）がないこと。グループ投稿は非公開で、見つけたブラウザの持ち主にだけ通知され、共有インデックスには入りません。`);
add('fb.leaveH', null, `Ven jdou jen inzeráty`, `Nur Angebote verlassen den Browser`, `送信されるのは出品情報だけ`);
add('fb.leaveP', null,
  `Rozšíření posílá radaru jen karty a příspěvky, které vidí (název, cenu, odkaz). Vaše přihlášení k Facebooku zůstává v prohlížeči.`,
  `Die Erweiterung sendet nur die Karten und Beiträge, die sie sieht (Titel, Preis, Link), an das Radar. Ihre Facebook-Sitzung bleibt in Ihrem Browser.`,
  `拡張機能がレーダーに送るのは、見えたカードや投稿（タイトル・価格・リンク）だけです。Facebookのセッションはブラウザ内に留まります。`);
add('fb.otherH', null, `Ostatní zdroje rozšíření nepotřebují`, `Andere Quellen brauchen keine Erweiterung`, `他のソースは拡張機能不要`);
add('fb.otherP', null,
  `Bazoš, Aukro, Sbazar, Vinted, OLX.pl, willhaben.at a Kleinanzeigen.de kontroluje přímo server, takže upozornění chodí, i když máte počítač vypnutý.`,
  `Bazoš, Aukro, Sbazar, Vinted, OLX.pl, willhaben.at und Kleinanzeigen.de fragt der Server selbst ab, daher kommen Treffer auch bei ausgeschaltetem Computer.`,
  `Bazoš、Aukro、Sbazar、Vinted、OLX.pl、willhaben.at、Kleinanzeigen.deはサーバー自身がチェックするので、パソコンの電源が切れていても通知は届きます。`);
add('cap.popup', null, `Vyskakovací okno rozšíření.`, `Popup der Erweiterung.`, `拡張機能のポップアップ。`);
add('cap.groups', null,
  `Karta FB skupiny: zaškrtněte skupiny, které smí Deal Radar prohledávat; každý hlídač si z nich vybírá.`,
  `Tab FB-Gruppen: Haken Sie die Gruppen an, die Deal Radar durchsuchen darf; jeder Suchauftrag wählt daraus.`,
  `FBグループタブ：Deal Radarが検索してよいグループをチェックします。各ウォッチはこの中から選びます。`);

add('price.h2', null, `Ceník`, `Preise`, `料金`);
add('plan.1', null,
  `Zdarma <small>v prohlížeči</small>`,
  `Kostenlos <small>im Browser</small>`,
  `無料 <small>ブラウザで</small>`);
add('plan.1p', null,
  `3 hlídače, každé hledání se kontroluje každých 10 minut z vašeho prohlížeče, oznámení v něm. Bez účtu.`,
  `3 Suchaufträge, jede Suche alle 10 Minuten aus Ihrem Browser geprüft, Benachrichtigungen dort. Ohne Konto.`,
  `ウォッチ3件、各検索をブラウザから10分ごとにチェックし、ブラウザに通知。アカウント不要。`);
add('plan.2', null,
  `9 € <small>měsíčně za 5 hlídačů</small>`,
  `9 € <small>im Monat für 5 Suchaufträge</small>`,
  `月9ユーロ <small>ウォッチ5件</small>`);
add('plan.2p', null,
  `Upozornění na Telegram do mobilu. Server kontroluje Bazoš, Vinted, Kleinanzeigen a další každou minutu, i když je počítač vypnutý; v prohlížeči FB Marketplace, Mercari JP, Allegro a eBay zhruba každé 3 minuty, Craigslist a Chrono24 každých 5, FB skupiny každých 10. Členství na Ko-fi s vaším kódem DR.`,
  `Telegram-Meldungen aufs Handy. Der Server prüft Bazoš, Vinted, Kleinanzeigen &amp; Co. jede Minute, auch wenn der Computer aus ist; im Browser FB Marketplace, Mercari JP, Allegro und eBay etwa alle 3 Minuten, Craigslist und Chrono24 alle 5, FB-Gruppen alle 10. Eine Ko-fi-Mitgliedschaft mit Ihrem DR-Code.`,
  `スマホにTelegram通知。サーバーがBazoš、Vinted、Kleinanzeigenなどをパソコンオフ時も毎分チェック、ブラウザではFB Marketplace・メルカリ・Allegro・eBayは約3分ごと、Craigslist・Chrono24は5分ごと、FBグループは10分ごと。DRコード付きのKo-fiメンバーシップで。`);
add('plan.3', null,
  `+5 hlídačů <small>za každých dalších 9 €</small>`,
  `+5 Suchaufträge <small>für je 9 € mehr</small>`,
  `+5件 <small>9ユーロ追加ごとに</small>`);
add('plan.3p', null,
  `Všichni, jejichž hlídač sedí, se to dozví naráz — žádné přihazování. FB, FB skupiny, Craigslist, Mercari JP, Chrono24, Allegro a eBay vždy kontroluje váš prohlížeč, i s předplatným.`,
  `Alle, deren Suchauftrag passt, erfahren es gleichzeitig — kein Bieten. FB, FB-Gruppen, Craigslist, Mercari JP, Chrono24, Allegro und eBay prüft immer Ihr Browser, auch mit dem Abo.`,
  `一致した全員が同時に知らされます — 入札なし。FB、FBグループ、Craigslist、メルカリ、Chrono24、Allegro、eBayはプランでも常にブラウザがチェックします。`);
add('status.h2', null, `Stav`, `Status`, `ステータス`);
add('status.p', null,
  `2.1.0 — zdarma v prohlížeči, předplatné s Telegramem a serverem. Postaveno na Cloudflare Workers + D1, Telegram Login a rozšíření pro Chrome (verze pro Firefox je zkušební).`,
  `2.1.0 — kostenlos im Browser, das Abo mit Telegram und Server. Gebaut auf Cloudflare Workers + D1, Telegram Login und einer Chrome-Erweiterung (Firefox-Build experimentell).`,
  `2.1.0 — ブラウザでは無料、プランはTelegramとサーバー付き。Cloudflare Workers + D1、Telegram Login、Chrome拡張機能（Firefox版は試験的）で構築。`);

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

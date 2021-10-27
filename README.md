# FamiljenSida
En hemsida som presenterar Familjen i korthet och listar dess medlemmar i rockningsföljd.

## Var hälsad, kamrat!

Denna sida bör underhållas och hållas uppdaterad av Familjens medlemmer i samtliga lärosäten.
Särskilt författarskap av biografier och rättning av mina copy/paste-misstag uppskattas!

**Wannabes** har fått i uppdrag att hitta alla rockars IRL-namn och mata in dessa.

### Listan

Ni finner en fil med namnet "members.json" i repot som innehåller en lista med objekt som ser ut så här:

```json
{
    "name": "",
    "irlName": "",
    "inaugurationLocation": "",
    "inaugurationYear": "",
    "bio": ""
}
```

Objekten representerar en rock styck och listas i rockningsföljd. Från detta json-objekt genereras sedan korten på hemsidan.
Objektens attribut är följande:

Attribut | Förklaring
------------ | -------------
name | "Ovvenamn" om sådant existerar. Namnet personen är känd som i studentkretsar.
irlName | Det tråkiga namnet personen använder hos myndigheter. **Wannabeuppdrag:** fyll i samtliga **EFTER** att ni har fått godkännande av sagd person att publisera deras namn!
inaugurationLocation | Vilket lärosäte personen rockades under. Alltså inte vilken plats personen råkade befinna sig på då det skedde.
inaugurationYear | Året personen rockades,
bio | En biografisk text. Pluspoäng om den är charmig eller rolig på något sätt!

#### Värt att notera för biografier:
* Orden 'Wannabe(s)' & 'Familjen(s)' får automatiskt Corleone font
* För radhopp, skriv in `\n`
* Ny paragraf påbörjas med `\n\n`

### Repouppsättning

I detta kodförråd finns lite gott och blandat, både gammalt och nytt. Detta kan leda till en del förvirring, så här kommer en snabb genomgång.

Mapp/Fil | Förklaring
-------- | ----------
CNAME | Denna fil används av github för att veta under vilken domän sidan ska publiceras
assets/ | Här lägger du filer som du vill komma åt på förstasidan på familjen.su
index.html | Förstasidan på familjen.su
kk/ | Arkiv av en äldre pik mot KK, koden är isolerad till denna mappen
kraefta/ | Detta är mappen där nya kraephtsidor publiceras. Skapa en fil med årtal som namn (ex 2021.html) och sen en mapp för året där alla assets för året läggs. Se även kapitlet om kraepht-sida nedan.
members.json | Medlemslista i json format, se kapitlet om "Listan" ovan
punsch.txt | Det heliga dokumentet med Familjens punsch-recept
script.js | Diverse javascript som används i rotens index.html
snfh.txt | Spelregler för leken Som Narvik Fast Hemma
style.css | CSS för rotens index.html

### Att skapa en ny kraepth-sida

Så du vill skapa en ny kraepht-sida? Härligt!

Det viktiga att veta är att det är tre saker som förväntas av dig när du skapar sidan.
1. Du skapar en fil för året i mappen kraefta (ex. kraefta/2022.html)
2. Alla bilder/filer/script osv som du använder för året läggs i en mapp med årets namn (och hänvisas på passande sätt från filen). Ex: kraefta/2022/kraephta.png som sedan kallas från kraefta/2022.html genom relativ placering (2022/kraephta.png)
3. När sidan är klar så uppdaterar du symlänkarna i mappen kraefta/ eller ber någon annan att göra det. Lättast är att be någon annan att göra det, men vet du vad du gör så kan du ta bort kraefta/index.html och kraefta/index.php och skapa dem mot den nya filen (ex kraefta/2022.html)

Önskar du mer vägledning eller hjälp så är det bara att du hojtar i någon av Familjens olika kanaler.

### Branch-strategi

Allt innehåll i `main` publiceras automatiskt via github pages. Arbeta med saker i separata grenar och öppna en pull request när du närmar dig något som kan granskas för att inkluderas i `main`.

**Wannabes** är endast tillåtna i `wannabe`-branchen.

## Tack för din hjälp, kamrat!

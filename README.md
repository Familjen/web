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

### Branch-strategi

`master` är kopplad till en CI/CD-pipeline och varje commit i den deployas till produktion per automatik, så arbeta inte i den utan använd er av `development`.
`wannabe` rebase:as in i `development`, `development` in i `master`.

**Wannabes** är endast tillåtna i `wannabe`-branchen.

## Tack för din hjälp, kamrat!

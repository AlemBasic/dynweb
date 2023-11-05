# Stegene for å bygge prosjekt

Jeg har brukt IntelliJ til å genererer prosjekt struktur (prosjekt som man ser i IntelliJ - dette inneholder filer som package.json, src folder og diverse). 
Dette steg kunne jeg utført manuelt men valgte å bruke IntelliJ (new prosjekt og generer).

Deretter så har jeg importeret nav og lagt inn navigajon. Jeg har brukt npm (node package manager) for å importere hjelpe bibliotek som
kan linke mellom sidene. Her brukt denne her til å se på mens jeg la inn nødvendinge linker.
https://hygraph.com/blog/routing-in-react
De filene har jeg endret manuelt -> NavBar.tsx har jeg utviklet og har endret i App.tsx


Deretter så har jeg endret filene som er dynamiske. 
Products, Users and CartsDTO - de her viser infromasjon fra DB-en (Postgresql som blir installer på RPI).

Dette er også en npm (en ekstra packe som hjelper å koble seg mot DB og vise innhold). 

# Prosjektstruktur:

Undersøk prosjektstrukturen som IntelliJ har opprettet. Du vil finne mapper som inneholder kildekode, ressurser og andre nødvendige filer.
Kjenn Ditt Rammeverk:

Hvis du valgte Node.js som ditt rammeverk, er det viktig å være kjent med Node.js-økosystemet og hvordan det fungerer. Dette inkluderer npm-pakkehåndteringsverktøyet, moduler, og rammeverk som Express.js.
Rediger Kode:

Åpne prosjektmappene og rediger kildekoden i henhold til dine behov. Dette kan inkludere opprettelse av nye ruter, visninger, og endringer i eksisterende logikk.
Avhengigheter og Pakker:

Bruk npm til å legge til avhengigheter og pakker som du trenger for prosjektet ditt. Dette kan inkludere tredjepartsmoduler, biblioteker og verktøy.
Utforming og Stil:

Implementer design og stilendringer i henhold til prosjektets krav. Du kan bruke HTML, CSS, og JavaScript for å tilpasse utseendet og oppførselen til nettstedet.
Testing:

Utfør enhetstesting og integrasjonstesting for å sikre at dine endringer fungerer som forventet.
Lokal Testing:

Start prosjektet lokalt ved å bruke Node.js-serveren som er satt opp. Du kan teste nettsiden i nettleseren din ved å åpne http://localhost:port i nettleseren, der "port" er den porten serveren lytter på.
Feilsøking:

Feilsøk eventuelle problemer eller feil i koden. IntelliJ gir kraftige verktøy for feilsøking og gir deg muligheten til å finne og rette feil raskt.
Git (valgfritt):

Hvis du arbeider i et team eller ønsker versjonskontroll, kan du vurdere å bruke Git for å administrere prosjektkoden. IntelliJ har innebygd støtte for Git-integrasjon.
Bygg og Deploy:

Når du er fornøyd med endringene dine, kan du bygge prosjektet og forberede det for implementering. Du kan bruke kommandoer som npm run build for å lage produksjonsklar kode.
Implementering:

Velg en hostingløsning for din Node.js-app, som kan være en skyplattform, en virtuell server eller Raspberry Pi, som nevnt tidligere.
Overvåking og Vedlikehold:

Etter implementering, sørg for at du overvåker ytelsen og håndterer eventuelle feil som oppstår. Vedlikehold prosjektet og gjør oppdateringer etter behov.
Med denne tilnærmingen kan du redigere og bygge dine egne endringer i prosjektet ditt, tilpasse det etter dine behov og til slutt distribuere det til din valgte hostingplattform. IntelliJ gir deg et kraftig utviklingsmiljø for å gjøre denne prosessen enklere.

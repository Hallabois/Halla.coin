# Hallacoin.x [![Translation file integrity](https://github.com/hallabois/Hallacoin.x/actions/workflows/jsonCheck.yml/badge.svg)](https://github.com/hallabois/Hallacoin.x/actions/workflows/jsonCheck.yml)
Projektin nettisivu.
[https://hallabois.github.io/Hallacoin.x/](https://hallabois.github.io/Hallacoin.x/)
---

# Ohjeet devaamiseen
[npm](https://www.npmjs.com/get-npm) tulee olla asennettuna

## Asenna riippuvuudet
```npm install```
## Käynnistä http-serveri
```npm run dev```
Hostaa nettisivun koneellasi, normaalisti osoitteessa https://localhost:5000. Voit muokata lähdetiedostoja serverin ollessa käynnissä, kaikki compilataan muutosten jälkeen automaattisesti uudestaan.

# Arkkitehtuurista
/public/                ```Compilattu koodi ja staattinen media (mm. 3d-mallit)```

/scripts/						    ```turha```

/src/								    ```Lähdekoodi```

/src/App.svelte			    ```Nettisivun päätiedosto, perjaatteessa "index.html"```

/src/main.js				    ```Wrapperi, tuskin tarpeellista koskaan avata tai muokata```

/src/scene.svelte		    ```3D-kolikon luova javascript-tiedosto, käyttää kirjastoa "three.js"```

src/Loadingbar.svelte   ```Teksti, joka näkyy kun kolikkoa vielä ladataan```

# Analytiikka
https://simpleanalytics.com/hallacoin.ml - Kunnioittaa kävijöiden yksityisyyttä paremmin kuin google, ei käytä cookieita :)

Lisää analytiikka-palvelun lupauksia: https://docs.simpleanalytics.com/what-we-collect?ref=simpleanalytics.com

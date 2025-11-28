# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Senuk Wickramasinghe

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  [https://www.vanschaikzeist.nl/](https://www.figi.nl/)

  #### Screenshot(s) van de eerste pagina (small screen): 
  #### Van Schaik Zeist -Home
  ##### Welkom pagina van Figt, Theater Zeist
  <img src="readme-images/figihome.png" width="375px" alt="Welkom pagina van Figt, Theater Zeist">


  #### Screenshot(s) van de tweede pagina (small screen):
  #### Van Schaik Zeist - Projecten
  ##### Over Ons Pagina
  <img src="readme-images/overfigi.png" width="375px" alt="Over Ons Pagina">

 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
  
  ### Screenreader
  
  Nadat ik de toegankelijkheid op mijn apparaat had ingeschakeld, heb ik de website bezocht om te controleren hoe goed de schermlezer daarop presteerde. De bovenkant van de website deed het goed, maar toen ik verder naar beneden scrolde, begonnen er fouten te verschijnen.
  Met Tab probeerde ik verder te navigeren, maar ik merkte dat de screenreader verborgen elementen oppikte.  
  Met Capslock + F7 kon ik alle links bekijken, en op dezelfde manier zag ik ook de headings. De docent stelde voor een extensie te installeren om de heading-structuur beter te kunnen zien.

  #### Bevindingen (Screenreader)
  
<img src="readme-images/screenreadertest1.png" width="375px" alt="Verborgen items">

**Verborgen items:** De screenreader detecteerde elementen die visueel niet zichtbaar zijn.

<img src="readme-images/screenreadertest2.png" width="375px" alt="Datum niet gedetecteerd">

**Datumselectie niet leesbaar:** De schermlezer kon het tabblad “Datum selecteren” niet detecteren.


  ---

  ### WCAG Checklist
  
Ik heb met Ronald samengewerkt om de checklist te maken. De uitgeprinte checklist gaf geen goede uitleg. We besloten om in plaats daarvan de website te gebruiken. Wat me opviel, is dat de checklist geen rekening houdt met animatie en overgangen. De checklist hielp wel om te zien dat er veel fouten op de website stonden die verbeterd moesten worden.

  #### Bevindingen (WCAG)

**Global Code**
- Validate HTML: via https://validator.w3.org/nu/ kwamen veel fouten naar voren.

<img src="readme-images/wcaghecklist-validate html.png" width="375px" alt="Errors in HTML en CSS">

- Unique title: de welkomstpagina heeft geen paginatitel.

<img src="readme-images/wcaghecklist-uniquetitle.png" width="375px" alt="Geen title in de landings page">


**Keyboard**
- Navigeren met toetsenbord: sommige elementen konden niet geselecteerd worden.


**Mobile & Touch**
- Size & position: bepaalde items worden te klein weergegeven in de mobiele weergave.

  <img src="readme-images/wcaghecklist-sizeenposition.png" width="375px" alt="Items worden te klein">
  
- Spacing: sommige items staan te dicht op elkaar.


**Headings**
- Meerdere H1-elementen op dezelfde pagina.
- Onlogische structuur: een H1 staat onder een H2.


**Lists**
- Geen correcte lijststructuur: veel divs in divs gebruikt.


**Images**
- Geen alt-attributen aanwezig op sommige afbeeldingen.


**Appearance**
- Geen dark mode beschikbaar.

  </details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/week1breakdownsketchhelepagina.png" width="375px" alt="breakdown van de hele pagina">
  **Hele pagina**
  - Ik begon met het opdelen van alles in onderdelen uit de HTML-boilerplate-sjabloon. Ik voegde ook toe wat elke sectie is.

  ### dynamisch deel (Nav): 
  <img src="readme-images/week1breakdownsketchnav.png" width="375px" alt="breakdown van Nav">
  **Nav**
  - De navigatiebalk is verdeeld in twee secties. Deze secties zijn verdeeld met behulp van een raster. Het bovenste deel van het raster wordt de bovenste balk genoemd en het onderste deel de navigatiebalk. Elk deel heeft ook een raster. Ze kunnen worden verplaatst of      vergroot of verkleind.
  
  ### dynamisch deel (Experience): 
  <img src="readme-images/week1breakdownsketchexperience.png" width="375px" alt="breakdown van Experience">
  **Experience**
  - Ik heb de heldensectie ook met behulp van rasters gemaakt. Onder het rastergedeelte bevindt zich een gedeelte voor de verschillende ervaringen die je bij Figi kunt beleven. Ik heb een sectie genaamd Figi Experience aangemaakt en er een raster van gemaakt. Het bovenste gedeelte heet Experience Text en het onderste gedeelte heet Experience Cards. Experience Text heeft een h2 erin, die gecentreerd is. Experience Cards is ook een raster, met secties met kaarten en hun namen erop.

</details>





## Voortgang 1 (week 2)
<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: August           | student 2: Kevin            | student 3: Senuk    | student 4        |
  | ---                         | ---                         | ---                 | ---              |
  | Hoe maak je een grafiek,    | Hoe maak je een svg         | Hoe maak je forms   | en dan ik dat    |
  | mag ik ook foto gebruiken?  |  die alleen in de html zit, | en een carousel     | dit wil ik zeker |
  | Grid of flexbox?            |  naar een bestand           | ...                 | ...              |

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
<input type="date">: Voor forms gebruiken
CSS config: Voor een Carousel: https://chrome.dev/carousel-configurator/
3 css pages - Above the main css, header and footer in it as well.
Every section starts with H2

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  |student 1: August| student 2: Senuk W.A | student 3: Kevin    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | Hamburger Menu     | en ik dit    | en dan ik dat    |
  | en dat ook nog | Pop-Up voor text   | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>

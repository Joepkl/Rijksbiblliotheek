# Rijksmuseum Single Page Webapp

Voor dit project ben ik een webapp gaan maken voor het Rijksmuseum. Ik maak hierbij gebruik van de Rijksmuseum API om de data van de kunstwerken te laden. Ik ben begonnen met onderzoek doen naar de API en welke data er in staat. Daarna heb ik gekeken naar de stijl van het Rijksmuseum, om hier rekening mee te houden bij het designen van mijn webapp. Ik wilde in de webapp eerst uitgelichte kunstwerken laten zien aan de gebruiker, en een zoekfunctie verwerken. Als eerste opzet heb ik een breakdown schets gemaakt om een beeld te krijgen van wat ik wil gaan maken. 




## Breakdown schets

<img width="615" alt="breakdown schets wafs" src="https://user-images.githubusercontent.com/74242736/157248554-b81d496e-d08d-4ac0-8478-f8100afa3011.png">



## Wireflow met verschillende states

Om duidelijk te krijgen welke states en verschillende schermen er moeten komen heb ik een wireflow gemaakt. Hierin is de flow te zien tussen schermen, en wanneer de gebruiker welke state te zien krijgt. 

<img width="615" alt="wireflow wafs" src="https://user-images.githubusercontent.com/74242736/157252368-a80e8b15-de4f-4fc5-a81d-bb31c4509ab9.png">




## Wat gedaan per week?

### Week 1
Ik ben begonnen met proberen de data van de API te laden in de website. Om uit te testen of het werkt heb ik het eerst in de console geladen. Ook ben ik aan de slag gegaan met de user interface van de website. Ik heb in HTML en CSS een begin gemaakt van hoe de website er uit moet komen te zien. 

<img width="350" alt="Schermafbeelding 2022-03-08 om 18 07 31" src="https://user-images.githubusercontent.com/74242736/157288860-ab8a0fb5-4e48-49b5-8cd1-07657e500765.png">

### Week 2
In de tweede week was ik bezig om te zorgen dat de data werd gerenderd in de HTML. Dit was in het begin erg lastig maar met wat hulp kwam ik er wel uit. Ook ben ik verder gegaan met de UI van de website, en heb ik ervoor gezorgd dat de website responsive is. 

<img width="350" alt="Schermafbeelding 2022-03-08 om 18 11 17" src="https://user-images.githubusercontent.com/74242736/157289543-78de5d61-9e5e-4d74-b56e-3d3866ac33ac.png">

### Week 3
In de derde week ben ik de grote function om data te laden en renderen op gaan splitsen in modules. Ook heb ik een module gemaakt om te zorgen dat de zoekfunctie werkt. Verder ben ik begonnen aan states toe te voegen aan de webapp zoals empty, loading en de error state. Dit heb ik toegepast bij het laden van uitgelichte kunstwerken en zoekresultaten. Ook heb ik na het code review nog een paar kleine aanpassingen gedaan zoals een terug naar home button toevoegen in het zoekscherm. 

<img width="350" alt="Schermafbeelding 2022-03-08 om 18 15 20" src="https://user-images.githubusercontent.com/74242736/157290252-4939640d-1803-4992-87e1-94f6fb66392c.png">

<img width="350" alt="Schermafbeelding 2022-03-08 om 18 16 04" src="https://user-images.githubusercontent.com/74242736/157290371-03f6a08b-f807-41af-95d0-28d83d923d67.png">

<img width="350" alt="Schermafbeelding 2022-03-08 om 18 16 29" src="https://user-images.githubusercontent.com/74242736/157290433-1bb08d71-9838-4e3b-a829-fd7fb0bc6661.png">

### Hash URL
Ook ben ik bezig geweest om de hash states toe te voegen aan de SPA van het Rijksmuseum. Met hulp van Jorn is het uiteindelijk gelukt om de hash toe te voegen aan de URL. Als je zoekt naar een kunstwerk wordt de zoekopdracht toegevoegd aan de URL en krijg je de zoekresultaten te zien. Alleen werken de loading en error state niet meer. Ook werd de uitgelichte kunstwerken constant vervangen door: "Zoekresultaten voor" terwijl dit pas de bedoeling is als de zoekopdracht wordt ingevoerd. Ik heb hier samen met Jorn nog aan gezeten alleen lukte ons het niet om het helemaal werkend te krijgen. Vandaar dat ik de versie van de SPA met hash states in een apart mapje in Github heb gezet. Zo kon ik toch laten zien dat ik met de hash states heb geëxperimenteerd. De livelink op Github is de versie van mijn SPA waarin alles nog werkte zoals ik bedoelde zonder de routie. Hieronder nog een foto om te laten zien dat de hash achter de URL komt te staan na een zoekopdracht.

<img width="650" alt="Schermafbeelding 2022-03-11 om 11 12 23" src="https://user-images.githubusercontent.com/74242736/157847345-d5396b7c-e52a-402d-92dd-864bde70a832.png">


## Verschillende states

### Empty state
<img width="650" alt="Schermafbeelding 2022-03-11 om 10 51 27" src="https://user-images.githubusercontent.com/74242736/157843764-d4fffe11-11fe-42a6-9757-d1c8b481dea4.png">


### Loading state
<img width="650" alt="Schermafbeelding 2022-03-11 om 10 49 23" src="https://user-images.githubusercontent.com/74242736/157843443-f7ba7f45-0613-4fd4-a6b8-e3304ec8dd30.png">


### Error state
<img width="650" alt="Schermafbeelding 2022-03-11 om 10 50 23" src="https://user-images.githubusercontent.com/74242736/157843566-078a5108-497d-4b91-b47a-df1f36e85d04.png">


## Activity diagram
Ik heb een activity diagram gemaakt om duidelijk in beeld te brengen welke JS wanneer wordt aangeroepen. In het diagram zijn de verschillende pagina's en states van de webapp te zien. De verbanden tussen de pagina's zijn met pijlen aangegeven, en daaronder staat vermeld welke JS module wordt aangeroepen.

<img width="1300" alt="Schermafbeelding 2022-03-11 om 11 40 40" src="https://user-images.githubusercontent.com/74242736/157851842-fbdc686e-4692-4100-8f75-2ee2e80f08b3.png">



## Eindproduct
<img width="615" alt="Schermafbeelding 2022-03-08 om 18 18 25" src="https://user-images.githubusercontent.com/74242736/157290801-d02332f8-b699-4d19-aeda-cad7719f8d21.png">

### Livelink webapp
* https://joepkl.github.io/Rijksbiblliotheek/rijksmuseum-goed/

### Features van de webapp:
* Uitgelichte kunstwerken bekijken
* Zoeken naar kunst of kunstenaars

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

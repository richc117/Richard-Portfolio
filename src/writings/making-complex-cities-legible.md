---
layout: layouts/writing.njk
title: "Making complex cities legible"
description: What transit maps teach us about GIS, information architecture, and user experience.
tags:
  - writings
form: Long-form essay
date: 2026-08-30
summary: A transit network is an information system as much as an infrastructure one. On Beck, Borges, the Mexico City Metro, and what I learned building schematic maps for twenty-two rail networks from open data.
---

I have lived in Los Angeles for most of my life, and I still regularly discover parts of the city that feel completely new to me.

Sometimes that sense of discovery is exciting. At other times it reveals something about the way Los Angeles works: a place can be physically close and still feel inaccessible.

For a period of my life I commuted from East Los Angeles to Santa Monica. On particularly bad days the trip could take close to three hours. Experiences like that shape how you understand a city. Instead of seeing Los Angeles as a connected whole, you begin to experience it as a collection of islands.

Public transportation has the potential to connect those islands. But the existence of a transit network does not necessarily mean people understand how to use it. A system can be physically present and still feel inaccessible when its information is difficult to find, interpret, or trust.

That makes transportation more than an infrastructure problem. It is also a problem of geographic information systems, information architecture, and user experience.

I spent a while working through that argument by building something, and the building taught me more than the thinking did. The result is a project called [Legible Cities](https://richc117.github.io/legible-cities/): schematic maps and running timetables for twenty-two rail networks, generated entirely from the agencies' own published schedule data. No map in it was drawn by hand. I will come back to it, but the argument comes first.

<figure>
  <img class="on-dark" loading="lazy" decoding="async" src="/assets/writings/la-map-dark.svg" alt="Schematic map of the Los Angeles Metro rail network. Six coloured lines run horizontally, vertically and at forty-five degrees, converging on a cluster of downtown interchanges, with every station marked by a dot and named.">
  <img class="on-sepia" loading="lazy" decoding="async" src="/assets/writings/la-map-light.svg" alt="Schematic map of the Los Angeles Metro rail network. Six coloured lines run horizontally, vertically and at forty-five degrees, converging on a cluster of downtown interchanges, with every station marked by a dot and named.">
  <figcaption>Los Angeles Metro rail, drawn from the agency's own published schedule file. 110 stations and six lines, with nothing placed by hand.</figcaption>
</figure>

## A transit network is also an information system

Consider everything a rider may need to understand before beginning a trip. Which service is available? Where is the nearest stop? Which direction should I travel? Where do I transfer? When will the next train arrive? What happens if I miss my stop?

The physical network is only one part of the experience. Riders also have to navigate a large information system composed of routes, stations, schedules, signs, maps, symbols, alerts, and applications.

This is where three disciplines meet. GIS helps us understand where things are and how they relate to one another. Information architecture determines how that complexity should be organized, labeled, and presented. User experience asks whether a real person can understand the information and use it to accomplish something.

Together, they translate an enormous transportation network into a journey someone can actually make.

## Data does not tell its own story

GIS gives cities powerful ways to collect, analyze, and visualize information connected to location. A city can map collisions, identify gaps in transportation coverage, examine pedestrian access, or study whether public services are equitably distributed.

But having access to data does not tell us what to do with it. We still have to decide which questions we are trying to answer, whose needs we are considering, and which information is relevant to the decision. More information does not automatically produce greater understanding.

Jorge Luis Borges explored this in his one-paragraph story *On Exactitude in Science*. He imagined an empire whose cartographers became so committed to accuracy that they produced a map at the same scale as the empire itself. The map reproduced the territory perfectly, and became practically useless.

A map is not a smaller copy of the world. It is a decision about what matters.

## When accuracy gets in the way of understanding

Early maps of the London Underground preserved the physical geography of the rail system. As the network expanded, they became harder to read. Routes curved and converged, and stations in central London compressed into an unreadable knot.

Harry Beck approached the problem differently. He was an electrical draughtsman, and he treated the Underground more like a circuit diagram than a geographic map. His design straightened the routes, limited them to a few fixed angles, and spaced the stations evenly. Transport for London notes that the 1933 design was initially considered too radical. It became one of the most recognizable pieces of information design in the world.

Beck did not draw London more accurately. He drew the journey more clearly.

The precise curve of a rail line is rarely the most important thing a rider needs. They need to know which line to take, in which direction, where to transfer, and where to exit. By reducing geographic accuracy, Beck increased functional clarity.

That distinction matters well beyond transit. Accuracy should not be judged only by how faithfully a design reproduces the world. It should also be judged by how well it supports the task a person is trying to complete.

Watching that transformation happen to a network I know well was the part of this project that stayed with me. Run the Los Angeles rail network through the schematising step and the downtown interchanges — which sit almost on top of each other in real space — open up and become legible, while the long reach out to Azusa compresses into something you can take in at a glance. Nothing about the network changed. Only the decision about what to preserve.

<figure class="figure-pair">
  <img class="on-dark" loading="lazy" decoding="async" src="/assets/writings/la-geographic-dark.svg" alt="The Los Angeles rail network drawn at its true geographic coordinates. The lines wander and curve as the track does, and the downtown stations compress into an unreadable knot.">
  <img class="on-sepia" loading="lazy" decoding="async" src="/assets/writings/la-geographic-light.svg" alt="The Los Angeles rail network drawn at its true geographic coordinates. The lines wander and curve as the track does, and the downtown stations compress into an unreadable knot.">
  <img class="on-dark" loading="lazy" decoding="async" src="/assets/writings/la-schematic-dark.svg" alt="The same network after the schematising step. Every segment now runs horizontally, vertically or at forty-five degrees, and the downtown interchanges have opened out into distinct, readable junctions.">
  <img class="on-sepia" loading="lazy" decoding="async" src="/assets/writings/la-schematic-light.svg" alt="The same network after the schematising step. Every segment now runs horizontally, vertically or at forty-five degrees, and the downtown interchanges have opened out into distinct, readable junctions.">
  <figcaption>The same six lines before and after the schematising step: first at their real coordinates, then snapped onto eight fixed angles. The second is far less accurate and far easier to use.</figcaption>
</figure>

## How people understand space

I first encountered survey and route-based navigation strategies while studying cognitive science at UC San Diego.

A survey strategy helps someone build an overall mental model of an environment: you look at a map and try to understand how places relate to one another. A route-based strategy breaks a journey into a sequence of actions — continue forward, turn at the next street, transfer at the next station.

Turn-by-turn navigation primarily supports route-based behavior. It tells us what to do next without requiring us to understand the larger environment. A transit map occupies an interesting space between the two. It gives us a view of the whole system while also letting us trace one specific sequence of stations and transfers.

That is easier to feel than to describe, which is one reason the project animates a real service day. Watch the whole network and you are reading it as a survey. Pick one train and follow it and you have switched to a route. Neither strategy is better; they answer different questions. Good information design does not assume everyone understands an environment the same way.

## Culture can become part of the navigation system

Clarity is not achieved only by removing information. Sometimes meaning makes information easier to recognize.

The Mexico City Metro is the example I keep returning to. In addition to its written name, every station has a distinctive icon tied to a place, landmark, historical reference, or local identity. Chapultepec station is represented by a grasshopper — the name comes from a Nahuatl expression usually translated as "grasshopper hill."

The symbol is not decoration. It is a second way to identify and remember the station. A local resident may recognize the historical meaning. A visitor who cannot pronounce the name can still recognize the grasshopper. The icon works across different levels of familiarity, language, and experience, and it makes the system feel connected to the city it serves.

It is worth being precise about why that system exists. When the Metro opened in 1969, roughly a third of the population could not read. Lance Wyman and his collaborators designed the icons so the network could be used without reading it at all. The cultural richness is real, but the icons were an accessibility decision first — which is exactly the point. Meaning and access were not in tension. The same choice served both.

<figure>
  <img class="on-dark" loading="lazy" decoding="async" src="/assets/writings/cdmx-map-dark.svg" alt="Schematic map of the Mexico City Metro. Twelve lines in the operator's own colours cross a dense central core and reach out to the edges of the city; every station is marked and named in text, with no icons.">
  <img class="on-sepia" loading="lazy" decoding="async" src="/assets/writings/cdmx-map-light.svg" alt="Schematic map of the Mexico City Metro. Twelve lines in the operator's own colours cross a dense central core and reach out to the edges of the city; every station is marked and named in text, with no icons.">
  <figcaption>The Mexico City Metro, generated by the same code as every other map in the project. The station names are all here. Wyman's icons &mdash; the part that lets the system be used without reading it &mdash; are not.</figcaption>
</figure>

This is also the clearest limitation of what I built. My pipeline can read a schedule and resolve a network into a legible diagram. It has no idea what any of these places mean. It knows that Mariachi Plaza is a station on the E Line. It does not know why that name matters. Everything in the project is the part of the problem that can be automated, which is worth being precise about, because it is not the whole problem.

That leaves an open question for Los Angeles: how could our transportation information better reflect the culture, history, and identities of the communities people move through? Not a decorative logo on every station, but a serious use of local meaning to support recognition, memory, and orientation.

## Accessibility is more than physical access

When we discuss transportation accessibility we focus, rightly, on physical access. Can someone enter the station? Is there an elevator? Can the vehicle accommodate different mobility needs?

But transportation also has cognitive, linguistic, and informational dimensions. Can a first-time rider understand the map? Can someone distinguish one route from another? Can the system be understood by people who speak different languages? Can a rider recover after making a mistake? Does someone feel confident enough to begin the trip at all?

A confusing system places the greatest burden on the people with the least familiarity and the fewest alternatives.

At the same time, we should be careful not to exaggerate what information design can accomplish. A beautiful map cannot compensate for infrequent service, inaccessible stations, safety concerns, poor coverage, or unreliable arrival times. Those are fundamental parts of the rider experience, and no diagram fixes them. What clear information can do is reduce uncertainty, and help people understand the choices available to them.

## What building it taught me

The project now covers twenty-two networks — around 2,700 stations and 38,000 scheduled trips — from Los Angeles and New York to Mexico City. Every one of them comes from the same code reading the agency's own published feed.

Three things surprised me.

The first is how much of the work is not cartography at all. It is data archaeology. One agency ships a license agreement inside its data file. Another leaves the field that names its lines completely blank, so every line comes through unnamed. A third publishes no timetable, only the interval between trains, which has to be expanded before anything can move. Mexico City's own data server no longer answers at all, and the map in the project comes from an archived copy of a feed whose service period ended in 2025. Public data is public, but it is rarely tidy, and the tidying is where the real understanding of a network happens.

The second is that abstraction is not one step but a series of choices, each of which throws something away. Geography goes first. Then, in a second view, the geography of the diagram itself goes too, and each line becomes a row of equally spaced stations — at which point you can compare networks to each other rather than locate them in a city. Then time takes over from space entirely, and a whole service day becomes a field of diagonals where the density of the lines is the frequency of the service. Each view answers a question the previous one could not. None of them is more true than the others.

The third is that being honest about the gaps is part of the design. Every network in the project states what the pipeline could not do with it — the stops it could not place, the trains it had to route approximately, the station names it had nowhere to put. That felt uncomfortable to write and right to publish. A visualization that hides its own uncertainty is asking to be trusted more than it deserves.

## Layers of understanding

Los Angeles is too large and complex to be captured in a single map. No visualization can show every street, neighborhood, bus route, rail line, landmark, transfer, and service condition without becoming another version of Borges's one-to-one map.

The opportunity is not to show everything at once. It is to create layers of understanding. GIS can help us analyze the spatial environment. Information architecture can organize that complexity into meaningful structures. User experience can connect those structures to the needs and behaviors of real people. Together they can make a city more legible.

A transit map cannot shorten the physical distance between two neighborhoods. But it can reduce the perceived distance between them. It can help someone recognize that a journey is possible, reveal a neighborhood that felt unreachable, or give a resident enough confidence to explore a city they have lived in for years but never fully experienced.

A good transit map does not merely describe the city. It makes the city feel possible.

---

The full project, with every map, the running timetables, and the sources behind each one, is at **[richc117.github.io/legible-cities](https://richc117.github.io/legible-cities/)**. If you want the technical side — how a schedule file becomes a diagram, and whose work it rests on — I wrote that up separately in [How a schematic map gets made](/writings/how-a-schematic-map-gets-made/).

I gave an earlier version of this argument as a keynote, *GIS, Information Architecture, and UX in Los Angeles*, at World IA Day in 2023.

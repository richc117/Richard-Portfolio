---
layout: layouts/writing.njk
title: "Building a dictation app that keeps to itself"
description: Why I built Aparté, a dictation app for Mac that never connects to the internet, and what building it taught me about making a privacy promise something you can check.
tags:
  - writings
form: Essay
date: 2026-11-18
summary: A dictation app is a promise about where your voice goes. On the rules I wrote before the first line of code, building it with Claude Code in about ten days, and what a co-worker noticed the first time she used it that I had missed.
---

<figure class="figure-hero">
  <svg class="swell" viewBox="176 226 672 572" width="672" height="572" role="img" aria-label="The Aparté icon: five nested lines rising into a single peak." fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
    <path pathLength="1" d="M202 492 H342 C427 492 461 252 512 252 C563 252 597 492 682 492 H822"/>
    <path pathLength="1" d="M202 562 H342 C427 562 461 372 512 372 C563 372 597 562 682 562 H822"/>
    <path pathLength="1" d="M202 632 H342 C427 632 461 492 512 492 C563 492 597 632 682 632 H822"/>
    <path pathLength="1" d="M202 702 H342 C427 702 461 612 512 612 C563 612 597 702 682 702 H822"/>
    <path pathLength="1" d="M202 772 H342 C427 772 461 732 512 732 C563 732 597 772 682 772 H822"/>
  </svg>
</figure>

I built Aparté for two reasons.

The first was practical. I work on a MacBook, mostly inside a window that holds a Windows desktop, and the two share little more than a clipboard. I wanted to speak, have the words turn into text, and paste them wherever I was working.

The second was a rule. I did not want my voice to leave the machine. Many dictation tools send your audio to a server to be transcribed. I wanted one that could not send anything anywhere, even if it wanted to.

The result is [Aparté](https://richc117.github.io/aparte/), a small menu bar app for Mac. You hold a keyboard shortcut, speak, and let go. The text is on your clipboard. The transcription happens on your Mac, and the app has no permission to connect to the internet.

Most of what follows is about the second reason: how you turn a privacy promise into something a person can check, rather than something they have to believe.

## What I wanted it to be

Before any code, I wrote a short list of rules. They were not features. They were things the app would never do, and I told myself that when a rule and a feature conflicted, the rule would win.

- **No network.** The app is not allowed to connect to the internet, not even to check for updates.
- **The speech model ships inside the app.** Nothing is downloaded when you open it.
- **Audio lives in memory only.** Your recording becomes text and is then discarded. It is never written to disk.
- **The clipboard copy stays local.** It is not shared with your other Apple devices, and clipboard history apps are asked to skip it.

**It does not type into other apps.** Aparté writes to the clipboard and nothing else, so the one permission it asks for is the microphone.

The last rule is the one I am proudest of. Some tools in this category ask for permission to control your keyboard so they can type for you. Aparté leaves the typing to the paste you were going to do anyway, and in exchange it can ask for almost nothing.

## How it works

You press and hold Control, Option and Space together, say what you want written, and let go. A soft sound tells you the text is on your clipboard. That is the whole interaction.

Aparté lives in the menu bar. From there you can open a history of your dictations, which stays on your Mac and deletes itself after thirty days unless you say otherwise, and a list of fix-up words for names and terms you want spelled your way.

<figure>
  <picture class="on-dark">
    <source media="(prefers-reduced-motion: reduce)" srcset="/assets/writings/aparte-how-it-works-dark-still.svg">
    <img loading="lazy" decoding="async" src="/assets/writings/aparte-how-it-works-dark.svg" alt="A looping animation of Aparté's three steps. Control, Option and Space are pressed one after another and the menu bar icon changes to its listening state. Five lines rise and fall like a voice. When the keys are released, a ring leaves the menu bar icon, the lines settle into the Aparté icon, and a sentence appears in a clipboard bar.">
  </picture>
  <picture class="on-sepia">
    <source media="(prefers-reduced-motion: reduce)" srcset="/assets/writings/aparte-how-it-works-light-still.svg">
    <img loading="lazy" decoding="async" src="/assets/writings/aparte-how-it-works-light.svg" alt="A looping animation of Aparté's three steps. Control, Option and Space are pressed one after another and the menu bar icon changes to its listening state. Five lines rise and fall like a voice. When the keys are released, a ring leaves the menu bar icon, the lines settle into the Aparté icon, and a sentence appears in a clipboard bar.">
  </picture>
  <figcaption>The three steps, as they play on the Aparté website. The menu bar icons are the app's real ones. The lines are illustration: the app itself draws no waveform. The sentence on the clipboard is a placeholder.</figcaption>
</figure>

## Making a privacy claim checkable

A sentence in a privacy policy is easy to write and hard to verify. Nobody can read the code of every app they install, and "we take your privacy seriously" has never stopped anything.

So instead of promising that Aparté does not use the network, I removed its ability to. macOS runs the app inside a sandbox, and a sandboxed app can only do what it has been explicitly granted. Aparté has been granted two things: the sandbox itself, and the use of the microphone. There is no network entry, which means the operating system, not my good intentions, stops any connection.

Anyone can check this. This prints the app's permissions:

```
codesign -d --entitlements :- /Applications/Aparte.app
```

If the claim is true, two entries appear. If I ever added network access, a third would, and anyone who looked would see it.

The harder part was keeping it true as the app grew. Every change is checked by a script I call the gate. It builds the app, runs the tests, and then audits the result. It fails if the permissions change, if any source file mentions a network call, if audio is ever written to a file, if the clipboard is written from more than one place, or if a dependency is not on a short list at an exact version. I did not trust myself to remember the rules at the end of a long day. I trusted the script.

I should be careful about what this proves. It proves that the app cannot reach the network. It does not prove that the speech model is good, or that I have made no mistakes anywhere else. It is a narrow claim, and narrow claims are the kind you can actually check.

## How we built it

I built Aparté with Claude Code, Anthropic's coding assistant, in about ten days. Claude wrote the Swift. I wrote the brief, chose the rules, decided what to build and what to leave out, and tested every build by hand.

## The name and the icon

An aparté is a theatrical aside: words an actor speaks to the audience that the other characters on stage are not meant to hear. It seemed like the right name for something you talk to that does not repeat what it hears. The tagline came with it: dictation that keeps to itself.

The icon is five nested lines rising into a single peak. I had asked for a very simple sound wave and pointed to the stacked lines on the cover of Joy Division's *Unknown Pleasures* as a reference. Of three options I chose the calm, ordered one over the busier one. It is off-white on black, with no accent color anywhere.

## What other people found

Then someone else used it.

A co-worker tried Aparté recently. She liked it, and she found two problems I had missed.

The first was that she did not notice it was loading. The first launch prepares the speech model for the Mac, which takes about eleven seconds on mine and over thirty on an older one. The app showed this as a small icon in the menu bar. She never saw it, and asked whether the app was working.

The state was communicated, but only by a very small icon in a very small place, and that is not the same thing as being noticed. A state a person does not notice has not been communicated.

So the first launch now opens a window. While the model loads, the five lines breathe and the window says what is happening. When the model is ready, the lines swell into the finished icon and the window becomes a short welcome, with the shortcut shown and the few settings worth choosing on day one.

The second was the volume. The sounds were a little loud for her, and she did not want to turn down her whole Mac to fix that. So there is now a volume slider in the settings, and I set it to start at half. A setting is a way of admitting that I cannot know what is right for someone else.

There was a smaller lesson earlier. The one word the speech model got wrong in my set of technical terms was the name of the tool I was building it with: it heard "Claude Code" as "cloak code." Rather than reach for a bigger model, I added a short list of replacements that Aparté applies after it transcribes. The error rate on that set went from 2.4 percent to zero. It is not an elegant solution. It is a solution a person can understand and edit, which seemed better.

## What it cannot do

I want to be honest about the gaps, because a tool that hides its limits is asking to be trusted more than it has earned.

The idea that started the project worked the first time I tried it, and then it did not work reliably. Sometimes the text crossed into the remote session and sometimes it did not, and copying it again from Aparté's menu brought it across. I troubleshot it at length before concluding that the problem is in the remote desktop client and not in Aparté. I cannot fix that from my side. It is the honest gap between the problem I set out to solve and the one I solved.

It works in English only, and only on Macs with Apple silicon. The download is about 450 megabytes, almost all of it the speech model, because the model has to live inside the app.

And a tool that never connects to the internet cannot tell you it is out of date. New versions only appear if you go looking for them. That is a real cost, and I chose it knowingly.

## Getting it onto other people's Macs

An app Apple has not seen shows a warning that makes most people stop. To avoid it, the app is signed and sent to Apple's notary service, which checks it for malicious software and returns a ticket that macOS recognizes. It was its own small project.

The website is plain HTML and a couple of stylesheets, hosted on GitHub Pages. It has no JavaScript, no analytics, and no requests to anyone else's servers, which seemed the only consistent choice for the home of a privacy tool. The download lives in a GitHub release, because the speech model makes the file far larger than GitHub allows in a repository.

## Whose work this rests on

Almost none of the hard parts are mine.

The speech recognition is [Parakeet TDT 0.6B v2](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2), a model from NVIDIA released under a Creative Commons license. It runs on the Mac's Neural Engine through [FluidAudio](https://github.com/FluidInference/FluidAudio), a Swift library by FluidInference, who also made the CoreML conversion of the model that Aparté uses. Without their work there is no project.

[KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts), by Sindre Sorhus, is what lets you choose your own shortcut. The website's typefaces are [Instrument Serif](https://github.com/Instrument/instrument-serif) and [Instrument Sans](https://github.com/Instrument/instrument-sans). And the code was written with Claude Code, from Anthropic.

What I added is the rules, the decisions, the testing, and the insistence that the promise stay checkable.

---

The app, the download, and a short explanation of how it works are at **[richc117.github.io/aparte](https://richc117.github.io/aparte/)**. Questions and ideas are welcome as [issues on GitHub](https://github.com/richc117/aparte/issues).

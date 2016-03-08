# sh2016-ios (Loki)

*Here be dragons*

At [StudentHack IV](http://studenthack.com), my team built an app called **Loki**, which was judged in the top 10 and eventually won the u18 prize (as Alan, one of our team members, was under 18). I was responsible for the iOS app, which I built in React Native (much to [@dantoml](https://twitter.com/dantoml)'s chargin). The entire app was built over the course of 36 hours and has fun stuff like hard-coded Ngrok URLs and god-awful coding practices, so please don't use any of this as production code or an example of my programming skill (I did some horrible, horrible things to JS this weekend).

Anyway, here's our [Devpost](http://devpost.com/software/loki/) submission which I've also copied below, so feel free to take a looK! The server is available over at [alandoherty/sh2016-backend](https://github.com/alandoherty/sh2016-backend).


## What it does
We let users strike up a conversation with Loki about any topic concerning their local surroundings. On each query, we carry out natural language analysis and attempt to use the Yelp API to allow people to search for places and get recommendations in a conversational tone. For anything more complex that requires more knowledge than what Yelp offers, we forward the question on for other people in the community to answer, ensuring a timely and accurate response from the people who know their community the most. We're also using the Google Vision API to allow you to search Yelp for things you take a photo of.

## How we built it
We used node.js on the server-side along with Express and socket.io. On the front-end, we used react-native as working with the React states model allowed for far faster iteration and development.

## Challenges we ran into
As none of the team had any iOS knowledge, building the iOS app was a challenge in itself! We ended up using react-native, and we're pleased with the results that we experienced.

## What we learned
Natural language analysis is hard! In addition, we spent a lot of time at the start of the project trying to use languages we were unfamiliar with, and found that once we reverted back to familiar technologies progress continued rapidly.

## What's next for Loki
Refining the natural language analysis and sentiment work we're doing, and allowing responses (e.g.. "find me somewhere more upmarket") to our curated suggestions.

We're targeting the Yelp challenge with this hack.

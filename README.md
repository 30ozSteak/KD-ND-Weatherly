This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Weatherly

Kiel Dehnert / Nick Dambrosio

Weatherly is a fast, simplistic, real-time weather app that provides the current / 7-hour / 10-day forecast for a specified city. The user can set their home location to quickly view the weather in their area. It was built using the Create React App and uses the Weather Underground API for it's data. The wallpapers are courtesy of Unsplash Source.


![weatherly1](https://user-images.githubusercontent.com/34214595/43305130-c40890b2-9133-11e8-96de-cd5d1d554524.png)
![weatherly3](https://user-images.githubusercontent.com/34214595/43305122-bf0143f2-9133-11e8-94d1-f8fad053ee21.png)

#### Design

<img width="1440" alt="weatherly" src="https://user-images.githubusercontent.com/34214595/43302695-517213ac-9129-11e8-8aed-956519b16ff5.png">

When approaching this project, we knew we wanted to make something clean, elegant, and without a lot of excess bells and whistles. You wanted the weather? Here. This is how you get the weather. We browsed sites like Pinterest and Dribble to gain inspiration for our work, and found some good ideas that led us to our final design fairly quickly. Most of this was whiteboarded out, and then transfered directly to the code. Next time we'll likely use a proper planning tool like Figma once we finish whiteboarding.

![37831851_10160578116000526_4560789431904108544_n](https://user-images.githubusercontent.com/34214595/43333291-7c23459a-9187-11e8-8e4d-2b4ae0092485.jpg)


![theweatherapp](https://user-images.githubusercontent.com/34214595/43302773-d3e1d89a-9129-11e8-895f-f104250c2d10.jpg)


#### Inspiration

![232857c8aebd5de35625e3e81182b771](https://user-images.githubusercontent.com/34214595/43302774-d483f60c-9129-11e8-90e7-33ac0901de10.jpg)

![37915567_10160576477540526_6268840360076640256_n](https://user-images.githubusercontent.com/34214595/43302644-00b746bc-9129-11e8-8a29-5836ef8edbd8.png)

#### Project Management

<img width="1440" alt="screen shot 2018-07-26 at 11 33 31 pm" src="https://user-images.githubusercontent.com/34214595/43303304-64767c42-912c-11e8-91fc-360fcb0259e8.png">

We used Trello to keep track of our ideas and progress throughout the app and testing. it proved incredibly beneficial for making sure we weren't working on things that the other was, or tasks that were already done. It was super useful when we ran through each line of code and created a card for every component/function/test, and ensured what each one was doing each time.

#### Issues
We kept a fairly large running list of issues as we progressed through the project. All were closed before the final commit. Nice!

#### Customization

The icons used in this app came from Weather Underground, but because they were downloaded in PNG format, a text-shadow property in CSS wouldn't work, and block-shadow would give the entire icon container a shadow. I had to import all of them into photoshop and add a drop shadow / linear gradient overlay to each icon to ensure they stood out against the backgrounds.

![37788748_10160576477695526_7969334585349636096_n](https://user-images.githubusercontent.com/34214595/43302653-05eebeb2-9129-11e8-910b-3b89acce4dad.png)


The wallpapers in the app are taken from a free, lightweight, URL api from unsplash.com.  It allows you to fetch random images of a certain size/category/hashtag/artist/etc, so we set this to be our backdrop so we'd always have something dynamic and fresh.

#### Growth

This was both Kiel and my own first dive into React, and it posed a lot of new and exciting challenges. About halfway through the project a lot of parts and syntax requirements just clicked, and everything went incredibly smoothly. Neither of us devoted excess hours or lost much sleep. Feels good! We're both very excited to be using React more and more now that we've cleared the initial hurdles of learning a new library.

Nick
---------------------------
Man, react was scary to look at, at first. One of the hardest things to wrap my head around was how the items rendered would be positioned on the page. It felt like random luck that ours fell into place the way they did the first time we had code in the editor and I couldn't understand how you would use a tool (like... grid.. for example) on something like components. What would house the grid? Where would it go? I didn't understand.

Around 1130 on Wedesday I had a GRAND epiphany that react components are just words. Those words are rendered inside the div that houses everything. That div can be gridded. If that div can be gridded, anything can be moved anywhere on the page incredibly easily.  Excited to use this on everything coming next. Looking at the app now that's done, I wish I would have moved the search bar, or make it less obtrusive. This would make restyling the upcoming forecast easier too.

Kiel
--------------------------
This was by far the most satisfaction I have personally gotten out of any of my projects thus far in the Turing program. Going into React was certainly intimidating, but it was also an incredibly rewarding experience. Learning modular coding makes the project flow in such an interesting way.  At first it was really hard to wrap my head around exactly how components communicate with each other, but once I actually got into the code and learned how props and actions were passed around it started flowing really easily.

My favorite moment of the project was when I was trying to import my completeMe project into the search bar to actually make it work.  It was one of those moments where you feel like you have no idea what you are doing, but it turns out you know the language well enough that every single thing you try works on the first time. It's cool to grow our vocabularies in a logical way, so that when something new comes along you realize it's just a combination of all the things you already know how to do. All in all this was a great project, and I can't wait to work on more React next mod and beyond.

Fun stuff!

#### Visit our GHs!
Kiel Dehnert - https://github.com/kielzor
Nick Dambrosio - https://github.com/30ozSteak

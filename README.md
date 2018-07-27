This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Weatherly

#### Made with love by Kiel Denhert and Nick Dambrosio

Weatherly is a fast, simplistic, real-time weather app that provides the current / 7-hour / 10-day forecast for a specified city. The user can set their home location to quickly view the weather in their area. It was built using the Create React App and uses the Weather Underground API for it's data.


![weatherly1](https://user-images.githubusercontent.com/34214595/43304816-bd3d2e38-9132-11e8-8aa2-b4f12725593f.png)
![weatherly3](https://user-images.githubusercontent.com/34214595/43304833-cd04823a-9132-11e8-9278-ef3d9158397f.png)

#### Design

<img width="1440" alt="weatherly" src="https://user-images.githubusercontent.com/34214595/43302695-517213ac-9129-11e8-8aed-956519b16ff5.png">

When approaching this project, we knew we wanted to make something clean, elegant, and without a lot of excess bells and whistles. You wanted the weather? Here. This is how you get the weather. We browsed sites like Pinterest and Dribble to gain inspiration for our work, and found some good ideas that led us to our final design fairly quickly. Most of this was whiteboarded out, and then transfered directly to the code. Next time we'll likely use a proper planning tool like Figma once we finish whiteboarding.

![theweatherapp](https://user-images.githubusercontent.com/34214595/43302773-d3e1d89a-9129-11e8-895f-f104250c2d10.jpg)

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

Nick: Man, react was scary to look at, at first. One of the hardest things to wrap my head around was how the items rendered would be positioned on the page. It felt like random luck that ours fell into place the way they did the first time we had code in the editor and I couldn't understand how you would use a tool (like... grid.. for example) on something like components. What would house the grid? Where would it go? I didn't understand.

Around 1130 on Wedesday I had a GRAND epiphany that react components are just words. Those words are rendered inside the div that houses everything. That div can be gridded. If that div can be gridded, anything can be moved anywhere on the page incredibly easily.  I almost redid the whole site in grid, and still might. Fun stuff!

#### Visit our GHs!
Kiel Denhert - https://github.com/kielzor
Nick Dambrosio - https://github.com/30ozSteak

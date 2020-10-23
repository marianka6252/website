+++
aliases = [
  "/post/2016/new-website-and-krita-brushes-update/",
  "/post/2016/05/new-website-and-krita-brushes-update/"
]
author = "nathan"
category = ["News"]
date = "2016-05-30T13:11:19+02:00"
description = "May has been a busy month. I did my best to keep up with everyone on social networks, to give a hand to the Krita developers, with their Kickstarter campaign..."
keywords = ["krita brushes", "Gdquest"]
title = "May update: Krita brushes and ConciseCSS"

[[resources]]
  name = "banner"
  src = "banner.jpg"
  [resources.params]
    alt = "May brushes release"

+++

May has been a busy month. I did my best to keep up with everyone on social networks, to give a hand to the Krita developers, with their [Kickstarter campaign](//www.youtube.com/watch?v=AjIiI8uiVNM)... But I didn't take the time to write longer news posts like this one. Time to share the news for this month! <!--more-->

Actually, I'm still catching up with work, since I got that shoulder injury. Thankfully, I got faster in some areas, especially answering people online, thus I'm making good progress. On to the news!

{{< card-box
  img="krita-logo.png"
  title="Krita 3 launch Youtube livestream"
  url="//www.youtube.com/watch?v=hlcHDRc-gN8"
  urlText="Youtube Livestream"
  >}}

"Krita 3 is out tomorrow! I will be live on YouTube to answer all of your questions about the program, GDQuest, and game art in general. I will also create 2D game assets to fill in the blanks. To join the event, click on the link below and show up tomorrow, at 6 PM <abbr title=\"Central Europe Standard Time (UTC/GMT +2)\>CEST</abbr>
{{< /card-box >}}

## Krita brushes May update

[Omitted long matching line]

![Picture: The brushes on the pop-up palette](krita-brushes-update-may-2016.jpg)

You will now find 2 tutorials along with the brushes. The first one is dedicated to the mix brushes, and it will show you how to play with the opacity setting to get the most out of them. The 2nd one explains how to use the smear brushes in practice. They may seem strange at first, but trust me, they are actually quite useful! On top of that, I updated the existing brushes to make them less resource intensive. The Paint_Painterly preset comes with a new custom brush tip, and it should be at least 3 or 4 times faster now.

## Gdquest's upgrade

The new version of the website is available! I ported it to a new SASS framework, [ConciseCSS](//concisecss.com/). Some things have changed visually, hopefully for the better. But more importantly, under the hood, everything is different. With the same functionality, the website's Go templates are about 20% shorter. The CSS is smaller, and now I have full control over everything. Not only was the port fast to do, but now I'll be able to improve GDQuest faster.

Before that, I was using [Bootstrap](//getbootstrap.com/), one of the most popular frameworks out there, made by Twitter. It is very good, but it's also huge. It has everything you'd ever need, as well as everything you would never need. Because of that, customizing the style of your website can take a lot of time. That's why I switched to Concise.

Starting with the next version, I will also release the website's code open source. That way, those of you who want a powerful system to create a tutorial/blog oriented website will have an option based on Hugo, a blazing fast, open source static website engine. Right now, the website handles posts, course pages, course summaries, and has some simple modules if you'd like to create a blog page for instance. The next version will add templates to render a to do list, to render FAQs, to create a landing page, but also to create a tutorial/articles library!

## Next up

June is going to be a busy month! From June 13 to 19, I'll be at the Randa meetings in Switzerland to work on Krita education, and to meet dozens of passionate KDE developers. The Randa meetings are a yearly open source development sprint. Developers gather from all around the world and share experience with one another to push their respective projects forward.

Now that Krita 3 is coming out, I'm focusing on video tutorials dedicated to the new version. I plan to create about a dozen. Then, I'll move on to chapter 3 of the Krita tutorial for game artists, which will run you through the game assets creation workflow. This chapter is going to be an entire little training in itself, and a great occasion to put everything you've learned so far in the training in practice.

This wraps up this month's update. Thank you kindly for your time!

_See you soon,_

_Nathan_

_PS: Don't forget the [Krita 2016 Kickstarter](//www.kickstarter.com/projects/krita/krita-2016-lets-make-text-and-vector-art-awesome). It ends in 8 days._

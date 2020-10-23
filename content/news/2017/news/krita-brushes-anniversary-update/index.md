+++
aliases = ["/post/2017/news/krita-brushes-anniversary-update/"]
author = "nathan"
category = ["news"]
date = "2017-04-28T08:15:16+02:00"
description = "It's been a year already. 12 months, 12 consecutive updates. The brushes ship with a new design, and to celebrate, they are 30% off until May 1st!"
keywords = ["krita brushes", "gdquest brushes"]
tags = ["krita"]
title = "Krita Brushes Anniversary Update"

[[resources]]
  name = "banner"
  src = "banner.jpg"
  [resources.params]
    alt = "Krita brushes, comparison of the old and new thumbnails"

+++

It's been a year already. 12 months, 12 consecutive updates. This anniversary release may not seem like much, but it's certainly the biggest so far. I redesigned all the brushes from scratch! The new thumbnails are circular. That way, all the information they can convey is available whether you look at the pop-up palette or the presets list. The design is also unique so that it’s easy to differentiate from other bundles.

The updated design reads a lot better when the thumbnails get small. If you work on a laptop, a tablet, or if you have a lot of presets in the docker, you can now spot the one you want faster.

{{< figure
    src="presets-docker-comparison.jpg"
    caption="The old brushes and the new ones in the presets docker. That's quite a change, isn't it?"
    alt="Comparison of the old brush thumbnails and the new ones" >}}

There are up to 4 elements in each thumbnail:

1. **The base** or background color indicates the bundle a brush belongs to
1. **The outline** shows which family the preset belongs to
1. **The pictogram**, in the top-right corner, tells you what the brush is intended for
1. **The stroke** is prominent, in the center


{{< figure
    src="brush-thumbnail-components.jpg"
    caption="A handful of layers are all it takes to generate the complete thumbnail"
    alt="The 4 components of a brush thumbnail, and the assembled result" >}}

I wrote a python script to automate the process, and make it easier to improve them moving forward. As this is a big change, I'm counting on you to tell me what you think!

## 30% off until May 1st

The update is in your library already. And to celebrate its anniversary, the premium brushes are on sale this week-end: you'll save 3 euros off the standard version and 7.5 euros off the premium one!

{{< calltoaction "//gumroad.com/l/krita-brushes-for-game-artists/anniversary" "Get the brushes!" >}}

And if you'd like to know when there's a sale or a new course comes out, subscribe below:

{{< gumroad-follow >}}

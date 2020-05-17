<img src="https://user-images.githubusercontent.com/3104761/82107057-421fe180-9768-11ea-91b5-96358a18c337.jpg" width="100">

# 68
Solicited unsolicited advice from Kevin Kelly, served one at a time.

## Running locally
You'll need something like [Live Server](https://www.npmjs.com/package/live-server#installation) to allow the cross-origin resources to load:

```
live-server
```

Making style changes? You'll need [Sass](https://sass-lang.com/install) installed. Then run:

```
sass --watch css/sass/index.scss css/style.css
```

## Credits

### Content
Advice comes (with permission) from Kevin Kelly's [68 Bits of Unsolicited Advice](https://kk.org/thetechnium/68-bits-of-unsolicited-advice/).

### Type
[PT Root UI](https://www.paratype.com/fonts/pt/pt-root-ui/vf)

_Copyright (c) 2018, Paratype Inc (https://paratype.com), Copyright (c) 2018, Paratype Ltd,
with Reserved Font Name "PT Root UI"._

### Interaction
[Shake.js](https://github.com/alexgibson/shake.js/) is used for [Magic 8-Ball Mode](https://twitter.com/dnywh/status/1261460337225654272).

### Dynamic text formatting
I made [resizeText.js](https://github.com/dnywh/68/blob/master/js/resizeText.js) for recalculating `font-size` and `line-height` based on the length of incoming strings. Existing libraries and packages like Fitty didn't play nice for some reason.

My brother Noah explained what a _monotonically decreasing function_ is and how to [use it](https://github.com/dnywh/68/blob/ae19db2eb34ed5c2e337ca350de86f80b52bd9c0/js/resizeText.js#L2) to acheive the "longer the string, the smaller the font-size" (and vice versa) effect. I also used fpillet's gist for [scaling values between two ranges](https://gist.github.com/fpillet/993002).


### Everything else
These resources helped me along the way:

- Wholegrain Digital's [guide to perfomant web fonts](https://www.wholegraindigital.com/blog/performant-web-fonts/)
- CSS-Tricks' [link and button highlight snippet](https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/) and [checkbox styling guide](https://css-tricks.com/the-checkbox-hack/)
- A StackOverflow [discussion on DeviceOrientationEvent permissions](https://stackoverflow.com/a/60239790/2009441)
- A similar dev.to [post on requestPermission for DeviceOrientationEvent](https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2)

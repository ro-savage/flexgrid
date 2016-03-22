#flexgrid

A simple percentage based grid using flexbox

[DEMO](http://username.github.io/flexgrid)

**Download**: [Developer Version](https://raw.githubusercontent.com/ro-savage/flexgrid/master/flexgrid.css) or [Minified Version](https://raw.githubusercontent.com/ro-savage/flexgrid/master/flexgrid.css)

## Usage
```
<div class="flexgrid-container">
    <div class="row">
      <div class="col-25">
      Always 25% wide
      </div>
      <div class="col-xl-50 col-xs-100">
        50% wide above 1200px
        else 100% wide
      </div>
      <div class="col-md-25 hidden-sm-down">
        25% wide above 768px.
        Hidden below 768px.
      </div>
    </div>
</div>
```

## API
### Breakpoints
**col-#**: infinite - Applies to everything

**col-xs-#**: <544px - Applies to everything

**col-sm-#**: >544px - Applies above 544px

**col-md-#**: >768px - Applies above 768px

**col-lg-#**: >992px - Applies above 992px

**col-xl-#**: >1200px - Applies above 1200px

### Containers
**flexgrid-container**: Limited to 1200px wide.

**flexgrid-container-fluid**: Full screen

### Offset
Can be offset with `col-#-offset` e.g. `col-25-offset` for 25% offset

### Available precentages
**0% to 100% in 5% intervals, plus 33% and 66%**

_0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100_

### Hidden elements
Same API as [Bootstrap v4 responsive utils](http://v4-alpha.getbootstrap.com/layout/responsive-utilities/)

**Extra:** Allows use for .hidden-md etc to hide just on that breakpoint. If the bootstrap API is confusing, just add all the classes you wish to hide.

### Flexbox extras
As this project was forked from [flexboxgrid](http://flexboxgrid.com/) all their special flexbox features work here too.

## Forking
This project is made to be super simple. Feel free to fork and change breakpoints, names etc.

## Todo
* Add more docs
* Add more demos
* Add named space version (can be used with bootstrap etc)

## Credits
Originally forked from [flexboxgrid](http://flexboxgrid.com/) by [kristoferjoseph](https://github.com/kristoferjoseph/flexboxgrid)

Strongly inspired by [unsematic](http://unsemantic.com/) by [nathansmith](https://github.com/nathansmith/unsemantic)

API and extras inspired by [Bootstrap V4](http://v4-alpha.getbootstrap.com/layout/grid/)

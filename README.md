#Angular VizGrimoire dashboard for GitHub data

_ng-vizgrimoire-github_ project is a rewritten from scratch version of current [VizGrimoireJS dashboard](https://github.com/VizGrimoire/VizGrimoireJS)
to be used in [biterg.io](http://biterg.io) website.

##Dependencies

Currently the dashboard depends mainly on:

* [Angular JS](https://angularjs.org/) (_1.4.x_), including _angular-route_ and _angular-bootstrap_ modules
* [Angular NVD3 directives](https://cmaurer.github.io/angularjs-nvd3-directives/)
* _bootstrap-css-only_ for baseline styling

#How to install it

If you want use it as standalone dashboard, clone the repository and:

```
$ npm install

$ bower install
```

Dashboard renders data produced by current standard [MetricsGrimoire](http://metricsgrimoire.github.io) toolkit applied to one GitHub repository. Data (set of json files) must be copied under `data` folder in root directory

Once there, just:

```
$ grunt serve
```

This will let you test and develop over your own dashboard version.

If you want to create a _distributable_ dashboard:

```
$ grunt dist
```

FIXME: `data` folder (by now) needs to be copied to `dist` folder to ensure data is shown

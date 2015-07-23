#Angular VizGrimoire dashboard for GitHub data

_ng-vizgrimoire-github_ project is a rewritten from scratch version of current [VizGrimoireJS dashboard](https://github.com/VizGrimoire/VizGrimoireJS)
to be used in [biterg.io](http://biterg.io) website.

##Dependencies

Currently the dashboard depends mainly on:

* [Angular JS](https://angularjs.org/) (_1.4.x_), including _angular-route_ and _angular-bootstrap_ modules
* [Angular NVD3 directives](https://cmaurer.github.io/angularjs-nvd3-directives/)

#How it works

Dashboard renders data produced by current standard [MetricsGrimoire](http://metricsgrimoire.github.io) toolkit applied to one GitHub repository

Data (set of json files) must be copied under `data` folder in root directory

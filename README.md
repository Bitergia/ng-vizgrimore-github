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

```bash
$ npm install

$ bower install
```

Dashboard renders data produced by current standard [MetricsGrimoire](http://metricsgrimoire.github.io) toolkit applied to one GitHub repository. Data (set of json files) must be copied under `data` folder in root directory.

*Note:*
> Currently, there is a set of data included for testing purposes.

Once there, just:

```bash
$ grunt serve
```

This will let you test and develop over your own dashboard version.

If you want to create a _distributable_ dashboard:

```bash
$ grunt dist
```

FIXME: `data` folder (by now) needs to be copied to `dist` folder to ensure data is shown

`dist` folder content could be uploaded to any web server to be available for browsing through internet

#How it works

##VizGrimoire Widgets (AKA _vgwidets_)

Main component for the dashboard are widgets used to represent data. They are defined as Angular directives in the html code:

```html
<vgwidet-{type} datasource={datasource} metrics={metric1,metric2,etc}></vgwidet>
```

Basically, you define:

* *vgwidget-{type}*: the type of visualization to be used to represent the data:
  * *vgwidget-timeseries*: used for timeseries representation
  * *vgwidget-trends*: used for data trends representation
  * *vgwidget-onion*: used for _onion analysis_ representation
  * *vgwidget-tops*: used for top contributors representation
  * *vgwidget-demography*: used for demographic representation
  * *vgwidget-stackedarea*: used for aggregated set of timeseries visualization (like _acivity by domains_, _activity by companies_, etc.) (_under development_)
* *widget-datasource*: to define where the data to show come from:
 * *scm*: Source code management (data related with commits and committers)
 * *its*: Issue tracking system (data related with issues and issue openers and closers)
 * *scr*: Source code review (data related with pull requests and submitters, reviewers and mergers)
* *widget-metrics*: a list of metrics to be shown (like _commits_, _domains_, _authors_, etc.).

VGWidgets are placed as blocks in the html structure, and the will fit the available width. Usually vgwidet height is hardcoded fixed.

###Some examples

To show a chart of source code authors evolution, current implementation is:

```html
<vgwidet-timeseries widget-datasource="scm" widget-metrics="authors"></vgwidet>
```

If you would like to see both authors and new authors, that would be:

```html
<vgwidet-timeseries widget-datasource="scm" widget-metrics="authors,newauthors"></vgwidet>
```

#TODO

There are a lot of things to do and that could be improved, so, test it, paly with it and submit pull requests if you find it interesting...

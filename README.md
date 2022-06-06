# Module Federation React Example

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/chicio/module-federation-react-example/main/LICENSE.md)

An example app designed with micro frontend architectural pattern using Module Federation.

## Description

This repository contains an example app created using the micro frontend architect.
The app is composed by:

* myarea: the main host app that let a user see his/her orders
* cancel-order: a widget app that let the user delete an order

The cancel-order widget is loaded into the host app using Webpack [Module Federation], by loading a widget from a remote url received as dynamic configuration from remote service. This is an app create for my blog post ["Create a microfrontend app using module federation and dynamic configuration"](https://www.fabrizioduroni.it/2022/06/06/microfrontend-module-federation-dynamic-configuration/). Below you can find a quote from the article.  

> ...There are various way to achive the microfrontend architecture, that usually require a lot of custom work/development and/or the usage of specific frameworks (eg. [single-spa](https://github.com/single-spa/single-spa "single-spa") etc.). With the release of Webpack 5 there is a new game-changer player in the microfrontend world: Module Federation...

Click [here](https://www.fabrizioduroni.it/2022/06/06/microfrontend-module-federation-dynamic-configuration/ "module federation react example") to read the post.

## Try it

To try the example contained in this repository you just need to run the following commands from the root folder.

```bash
npm install
npm start
```

NB. the commands above will start both apps because we are using `concurrently` and npm workspaces. Make sure to have installed npm verion `> 7.X.X`.

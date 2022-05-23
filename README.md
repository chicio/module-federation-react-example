# Module Federation React Example

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/chicio/module-federation-react-example/main/LICENSE.md)

An example app designed with micro frontend architectural pattern using Module Federation.

### Description

This repository contains an example app created using the micro frontend architect.
The app is composed by:

* myarea: the main host app that let a user see his/her orders
* cancel-order: a widget app that let the user delete an order

The cancel-order widget is loaded into the host app using Webpack [Module Federation], by loading a widget from a remote 
url received as dynamic configuration from remote service. This is an app create for my blog post "TO BE DEFINED". Below
you can find a quote from the article.  

> ...TO BE DEFINED...

Click [here](TO BE DEFINED) to read the post.

### Try it!

To try the example contained in this repository you just need to run the following commands from the root folder.

```bash
npm install
npm start
```


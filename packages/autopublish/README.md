# autopublish
[Source code of released version](https://github.com/meteor/meteor/tree/master/packages/autopublish) | [Source code of development version](https://github.com/meteor/meteor/tree/devel/packages/autopublish)
***

Publish all server collections to the client. This package is useful for prototyping an app without worrying about which clients have access to certain data, but should be removed as soon as the app needs to restrict which data is seen by the client.

The `autopublish` package is automatically added to every Meteor app by `meteor create`.
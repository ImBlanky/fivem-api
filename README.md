# fivem-api
A javascript API wich interacts with a FiveM server.

**How To Install :**

`npm i js-fivem-api`


**How-to use :** 

Here is an example to display the number of online players.
```
const server = require("js-fivem-api");

var ip = "YOUR-IP-GOES-HERE"
var port = "YOUR-PORT-GOES-HERE" // e.x. "30120"

server.getPlayers(ip, port).then(data => console.log(data));
```

Here is an example to display an object wich contains all the resources of a server.
```
const server = require("js-fivem-api");

var ip = "YOUR-IP-GOES-HERE"
var port = "YOUR-PORT-GOES-HERE" // e.x. "30120"

server.getServerResources(ip, port).then(data => console.log(data));
```


# Functions :
- **getPlayerObj(ip, port)** Displays the players in the server as an array of objects.
- **getPlayers(ip, port)** Displays the number of online players in the server.
- **getMaxPlayers(ip, port)** Displays the number of the maximum players that can connect to the server.
- **getServerResources(ip, port)** Displays all the server resources as an object.
- **getServerVars(ip, port)** Displays an object with some info of the server such as "txAdmin Version", "License key", "project Name".
- **getServerVersion(ip, port)** Displays the version of the server.
- **getServerLicense(ip, port)** Displays the server license.


#### Important

Before using the api please read the LICENSE.

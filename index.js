#!/usr/bin/env node
const fetch = require("node-fetch");
var version = require("discord.js").version.split("");

if (version.includes("(")) {
  version = version.join("").split("(").pop().split("");
}
version = parseInt(version[0] + version[1]);

///////////////////////////

async function getPlayersObj(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/players.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data;
    }
  }
}

async function getPlayers(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/players.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.length;
    }
  }
}

async function getMaxPlayers(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/dynamic.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.sv_maxclients;
    }
  }
}

async function getServerResources(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/info.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.resources;
    }
  }
}

async function getServerVars(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/info.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.vars;
    }
  }
}

async function getServerVersion(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/info.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.version;
    }
  }
}

async function getServerLicense(ip, port) {
  if (version != 12) {
    throw new Error(
      "Invalid discord.js version! Te discord.js version must be v12"
    );
  }

  const res = await fetch(`http://${ip}:${port}/info.json`);

  if (res.ok) {
    const data = await res.json();
    if (data.length === 0) {
      return null;
    } else {
      return data.vars.sv_licenseKeyToken;
    }
  }
}

module.exports.getPlayersObj = getPlayersObj;
module.exports.getPlayers = getPlayers;
module.exports.getMaxPlayers = getMaxPlayers;
module.exports.getServerResources = getServerResources;
module.exports.getServerVars = getServerVars;
module.exports.getServerVersion = getServerVersion;
module.exports.getServerLicense = getServerLicense;

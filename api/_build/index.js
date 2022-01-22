var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-YIHEGGAX.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NKTQAWDZ.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-DRHJR3JT.css";

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/root.jsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
}
function Document({
  children,
  title = `Remix: Checkout this mario wiki built with hyper.io & Remix! `
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf=8"
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function CatchBoundary() {
  const caught = (0, import_remix2.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status, " ", caught.statusText)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/characters.jsx
var characters_exports = {};
__export(characters_exports, {
  default: () => CharactersRoute,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/utils/session.server.ts
init_react();
var import_remix3 = __toModule(require_remix());
var import_bcrypt = __toModule(require("bcrypt"));
var import_cuid = __toModule(require("cuid"));

// app/utils/hyper/models/user.js
init_react();
var import_hyper_connect = __toModule(require("hyper-connect"));

// app/utils/hyper/schemas.js
init_react();
var z = __toModule(require("zod"));
var userSchema = z.object({
  id: z.string().regex(/^user/),
  type: z.literal("user").default("user"),
  username: z.string().min(3).max(100),
  passwordHash: z.string()
});
var characterSchema = z.object({
  id: z.string().regex(/^character/),
  type: z.literal("character").default("character"),
  name: z.string(),
  debut: z.string().min(4).max(4),
  user_id: z.string().optional()
});
var gameSchema = z.object({
  id: z.string().regex(/^game/),
  type: z.literal("game").default("game"),
  name: z.string().max(100),
  description: z.string().max(5e3).optional(),
  released: z.string().min(4).max(4)
});
var appearanceSchema = z.object({
  id: z.string().regex(/^appearance/),
  type: z.literal("appearance").default("appearance"),
  character_id: z.string(),
  character_name: z.string(),
  game_id: z.string(),
  game_name: z.string()
});

// app/utils/hyper/models/user.js
var import_config = __toModule(require("dotenv/config"));
var hyper = (0, import_hyper_connect.connect)(`${process.env.HYPER}`);
var byType = (doctype) => (doc) => doc.type === doctype;
function validateUser(data) {
  return userSchema.safeParse(data);
}
async function addUser(user) {
  const { success, data, error } = validateUser(user);
  if (success) {
    return await hyper.data.add(data);
  } else {
    return { ok: false, error };
  }
}
async function retrieveUser(username) {
  const { docs } = await hyper.data.get();
  const users = docs.filter(byType("user"));
  const user = users.filter((user2) => user2.username === username);
  const currentUser = await hyper.data.get(user[0]._id);
  console.log("The user docs", currentUser);
  if (!currentUser)
    return null;
  return currentUser;
}

// app/db.server.js
init_react();
var import_hyper_connect2 = __toModule(require("hyper-connect"));
var import_config2 = __toModule(require("dotenv/config"));
var hyper2 = (0, import_hyper_connect2.connect)(`${process.env.HYPER}`);

// app/utils/session.server.ts
var import_config3 = __toModule(require("dotenv/config"));
async function register({ username, password }) {
  const passwordHash = await import_bcrypt.default.hash(password, 10);
  const createdUser = await addUser({
    _id: "user-" + (0, import_cuid.default)(),
    id: "user-" + (0, import_cuid.default)(),
    type: "user",
    username,
    passwordHash
  });
  console.log("This is the created user", createdUser);
  return createdUser;
}
async function login({ username, password }) {
  const user = await retrieveUser(username);
  console.log("The log for login from the server", user);
  if (!user)
    return null;
  const isCorrectPassword = await import_bcrypt.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
var sessionSecret = `${process.env.SESSION_SECRET}`;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "RemixMarioWiki_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const user = await hyper2.data.get(userId);
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix3.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/styles/characters.css
var characters_default = "/build/_assets/characters-3MNFM2DO.css";

// app/utils/hyper/models/character.js
init_react();
var import_hyper_connect3 = __toModule(require("hyper-connect"));
var import_config4 = __toModule(require("dotenv/config"));
var hyper3 = (0, import_hyper_connect3.connect)(`${process.env.HYPER}`);
function validateCharacter(data) {
  return characterSchema.safeParse(data);
}
async function addCharacter(character) {
  const { success, data, error } = validateCharacter(character);
  if (success) {
    return await hyper3.data.add(data);
  } else {
    return { ok: false, error };
  }
}
async function listCharacters() {
  const result = await hyper3.data.query({ type: "character" });
  if (result.ok) {
    return result.docs;
  } else {
    return [];
  }
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/characters.jsx
function links2() {
  return [{ rel: "stylesheet", href: characters_default }];
}
async function loader({ request }) {
  const result = await listCharacters();
  const user = await getUser(request);
  const data = { result, user };
  return { data };
}
function CharactersRoute() {
  let { data } = (0, import_remix4.useLoaderData)();
  console.log("this is the loaderdata", data.user);
  return /* @__PURE__ */ React.createElement("div", {
    className: "characters-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "characters-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Remix characters",
    "aria-label": "Remix characters"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F579}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "Mario Wiki"))), data.user ? /* @__PURE__ */ React.createElement("div", {
    className: "user-info"
  }, /* @__PURE__ */ React.createElement("span", null, `Hi ${data.user.username}`), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Logout"))) : /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/login"
  }, "Login"))), /* @__PURE__ */ React.createElement("main", {
    className: "characters-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "characters-list"
  }, /* @__PURE__ */ React.createElement("p", null, "Here are a few more characters to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.result.map((character) => /* @__PURE__ */ React.createElement("li", {
    key: character.id
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: character.id
  }, character.name)))), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "new",
    className: "button"
  }, "Add your own!")), /* @__PURE__ */ React.createElement("div", {
    className: "characters-outlet"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)))));
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/characters/$characterId.jsx
var characterId_exports = {};
__export(characterId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => SingleCharacterRoute,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
async function loader2({ request, params }) {
  const userId = await getUserId(request);
  let { characterId } = params;
  let character = await hyper2.data.get(characterId);
  if (!character) {
    throw new Response("What?! Character was not found.", {
      status: 404
    });
  }
  const data = {
    character,
    isOwner: userId === character.user_id
  };
  return data;
}
async function action({ request, params }) {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    const userId = await requireUserId(request);
    const character = await hyper2.data.get(params.characterId);
    if (!character) {
      throw new Response("Can't delete what does not exist", { status: 404 });
    }
    if (character.user_id !== userId) {
      throw new Response("Pssh, nice try. That's not your character", {
        status: 401
      });
    }
    await hyper2.data.remove(params.characterId);
    return (0, import_remix5.redirect)("/characters");
  }
}
function SingleCharacterRoute() {
  let data = (0, import_remix5.useLoaderData)();
  console.log("This is the loader data", data);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Name: ", data.character.name), /* @__PURE__ */ React.createElement("h4", null, "Debut: ", data.character.debut), data.isOwner ? /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Delete")) : null);
}
function CatchBoundary2() {
  const caught = (0, import_remix5.useCatch)();
  const params = (0, import_remix5.useParams)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, 'Huh? Who the heck is "', params.characterId, '"');
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
function ErrorBoundary2() {
  let { characterId } = (0, import_remix5.useParams)();
  console.log("the character id from the params", characterId);
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading character by the id ${characterId}. Sorry.`);
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/characters/index.jsx
var characters_exports2 = {};
__export(characters_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => CharctersIndexRoute
});
init_react();
var import_remix6 = __toModule(require_remix());
function CharctersIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Here is where the Character information will be."), /* @__PURE__ */ React.createElement("p", null, "Click on a character and their information will appear."));
}
function CatchBoundary3() {
  const caught = (0, import_remix6.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, "There are no characters to display");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies");
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/characters/new.jsx
var new_exports = {};
__export(new_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action2,
  default: () => NewCharacter,
  loader: () => loader3
});
init_react();
var import_remix7 = __toModule(require_remix());
var import_cuid2 = __toModule(require("cuid"));
async function loader3({ request }) {
  const userId = await getUserId(request);
  console.log(userId);
  if (!userId) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return {};
}
async function action2({ request }) {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const name = form.get("name");
  const debut = form.get("debut");
  if (typeof name !== "string" || typeof debut !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }
  let character = await addCharacter({
    id: "character- " + (0, import_cuid2.default)(),
    type: "character",
    name,
    debut,
    user_id: userId
  });
  console.log("This is the individual character information", character.id);
  return (0, import_remix7.redirect)(`/characters/${character.id}`);
}
function NewCharacter() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Add Your Own Character!"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Debut:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "debut"
  }))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add")));
}
function CatchBoundary4() {
  const caught = (0, import_remix7.useCatch)();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "You must be logged in to create a character."), /* @__PURE__ */ React.createElement(import_remix7.Link, {
      to: "/login"
    }, "Login"));
  }
}
function ErrorBoundary4() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Something unexpected went wrong. Sorry about that.");
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader4
});
init_react();
var import_remix8 = __toModule(require_remix());
async function action3({ request }) {
  return logout(request);
}
async function loader4() {
  return (0, import_remix8.redirect)("/");
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home,
  links: () => links3
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/styles/index.css
var styles_default = "/build/_assets/index-LQJHUV2J.css";

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/index.jsx
function links3() {
  return [{ rel: "stylesheet", href: styles_default }];
}
function Home() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Mario ", /* @__PURE__ */ React.createElement("span", null, "Wiki!")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "characters"
  }, "View Characters"))))));
}

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login,
  links: () => links4
});
init_react();
var import_remix10 = __toModule(require_remix());

// app/styles/login.css
var login_default = "/build/_assets/login-TB27ASMI.css";

// route-module:/Users/benjaminpatton/Documents/Coding_Projects/Remix-Projects/hypermix-mariowiki/app/routes/login.jsx
function links4() {
  return [{ rel: "stylesheet", href: login_default }];
}
var badRequest = (data) => (0, import_remix10.json)(data, { status: 400 });
async function action4({ request }) {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/characters";
  if (typeof loginType !== "string" || typeof username !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({
      message: `Form not submitted correctly`
    });
  }
  console.log("This is the logintype", loginType);
  console.log("These is the username", username);
  console.log("These is the password", password);
  console.log("These is the redirectTo", redirectTo);
  switch (loginType) {
    case "login": {
      const user = await login({ username, password });
      console.log("The loggin case user log", user);
      if (!user) {
        return {
          message: "Username/Password combination is incorrect"
        };
      }
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      const user = await register({ username, password });
      console.log({ user });
      if (!user) {
        return badRequest({
          message: "Not implemented"
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return badRequest({
        message: `Login type invalid`
      });
    }
  }
}
function Login() {
  const actionData = (0, import_remix10.useActionData)();
  const [searchParams] = (0, import_remix10.useSearchParams)();
  console.log("These are the search params", searchParams);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    "aria-describedby": (actionData == null ? void 0 : actionData.message) ? "form-error-message" : void 0
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !(actionData == null ? void 0 : actionData.loginType) || (actionData == null ? void 0 : actionData.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register",
    defaultChecked: (actionData == null ? void 0 : actionData.loginType) === "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultChecked: actionData == null ? void 0 : actionData.username,
    "aria-invalid": Boolean(actionData == null ? void 0 : actionData.username),
    "aria-describedby": (actionData == null ? void 0 : actionData.username) ? "username-error" : void 0
  }), (actionData == null ? void 0 : actionData.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, actionData == null ? void 0 : actionData.username) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    defaultValue: actionData == null ? void 0 : actionData.password,
    type: "password",
    "aria-invalid": Boolean(actionData == null ? void 0 : actionData.password) || void 0,
    "aria-describedby": (actionData == null ? void 0 : actionData.password) ? "password-error" : void 0
  }), (actionData == null ? void 0 : actionData.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, actionData == null ? void 0 : actionData.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.message) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData == null ? void 0 : actionData.message) : null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit")), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "/characters"
  }, "Characters"))))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/characters": {
    id: "routes/characters",
    parentId: "root",
    path: "characters",
    index: void 0,
    caseSensitive: void 0,
    module: characters_exports
  },
  "routes/characters/$characterId": {
    id: "routes/characters/$characterId",
    parentId: "routes/characters",
    path: ":characterId",
    index: void 0,
    caseSensitive: void 0,
    module: characterId_exports
  },
  "routes/characters/index": {
    id: "routes/characters/index",
    parentId: "routes/characters",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: characters_exports2
  },
  "routes/characters/new": {
    id: "routes/characters/new",
    parentId: "routes/characters",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm9vdC5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm91dGVzL2NoYXJhY3RlcnMuanN4IiwgIi4uLy4uL2FwcC91dGlscy9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi9hcHAvdXRpbHMvaHlwZXIvbW9kZWxzL3VzZXIuanMiLCAiLi4vLi4vYXBwL3V0aWxzL2h5cGVyL3NjaGVtYXMuanMiLCAiLi4vLi4vYXBwL2RiLnNlcnZlci5qcyIsICIuLi8uLi9hcHAvdXRpbHMvaHlwZXIvbW9kZWxzL2NoYXJhY3Rlci5qcyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2JlbmphbWlucGF0dG9uL0RvY3VtZW50cy9Db2RpbmdfUHJvamVjdHMvUmVtaXgtUHJvamVjdHMvaHlwZXJtaXgtbWFyaW93aWtpL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVySWQuanN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYmVuamFtaW5wYXR0b24vRG9jdW1lbnRzL0NvZGluZ19Qcm9qZWN0cy9SZW1peC1Qcm9qZWN0cy9oeXBlcm1peC1tYXJpb3dpa2kvYXBwL3JvdXRlcy9jaGFyYWN0ZXJzL2luZGV4LmpzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2JlbmphbWlucGF0dG9uL0RvY3VtZW50cy9Db2RpbmdfUHJvamVjdHMvUmVtaXgtUHJvamVjdHMvaHlwZXJtaXgtbWFyaW93aWtpL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy9uZXcuanN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYmVuamFtaW5wYXR0b24vRG9jdW1lbnRzL0NvZGluZ19Qcm9qZWN0cy9SZW1peC1Qcm9qZWN0cy9oeXBlcm1peC1tYXJpb3dpa2kvYXBwL3JvdXRlcy9sb2dvdXQuanN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvYmVuamFtaW5wYXR0b24vRG9jdW1lbnRzL0NvZGluZ19Qcm9qZWN0cy9SZW1peC1Qcm9qZWN0cy9oeXBlcm1peC1tYXJpb3dpa2kvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm91dGVzL2xvZ2luLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2JlbmphbWlucGF0dG9uL0RvY3VtZW50cy9Db2RpbmdfUHJvamVjdHMvUmVtaXgtUHJvamVjdHMvaHlwZXJtaXgtbWFyaW93aWtpL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2JlbmphbWlucGF0dG9uL0RvY3VtZW50cy9Db2RpbmdfUHJvamVjdHMvUmVtaXgtUHJvamVjdHMvaHlwZXJtaXgtbWFyaW93aWtpL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2JlbmphbWlucGF0dG9uL0RvY3VtZW50cy9Db2RpbmdfUHJvamVjdHMvUmVtaXgtUHJvamVjdHMvaHlwZXJtaXgtbWFyaW93aWtpL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVySWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm91dGVzL2NoYXJhY3RlcnMvaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm91dGVzL2NoYXJhY3RlcnMvbmV3LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvYmVuamFtaW5wYXR0b24vRG9jdW1lbnRzL0NvZGluZ19Qcm9qZWN0cy9SZW1peC1Qcm9qZWN0cy9oeXBlcm1peC1tYXJpb3dpa2kvYXBwL3JvdXRlcy9sb2dvdXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9iZW5qYW1pbnBhdHRvbi9Eb2N1bWVudHMvQ29kaW5nX1Byb2plY3RzL1JlbWl4LVByb2plY3RzL2h5cGVybWl4LW1hcmlvd2lraS9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvYmVuamFtaW5wYXR0b24vRG9jdW1lbnRzL0NvZGluZ19Qcm9qZWN0cy9SZW1peC1Qcm9qZWN0cy9oeXBlcm1peC1tYXJpb3dpa2kvYXBwL3JvdXRlcy9sb2dpbi5qc3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2NoYXJhY3RlcnNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY2hhcmFjdGVyc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3RlcklkXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVySWRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2hhcmFjdGVyc1wiLFxuICAgIHBhdGg6IFwiOmNoYXJhY3RlcklkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NoYXJhY3RlcnMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvY2hhcmFjdGVyc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy9uZXdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9jaGFyYWN0ZXJzXCIsXG4gICAgcGF0aDogXCJuZXdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlQ2F0Y2gsXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGdsb2JhbExhcmdlU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbGFyZ2UuY3NzXCI7XG5pbXBvcnQgZ2xvYmFsTWVkU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbWVkaXVtLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IGdsb2JhbFN0eWxlc1VybCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBnbG9iYWxNZWRTdHlsZXNVcmwsXG4gICAgICBtZWRpYTogXCJwcmludCwgKG1pbi13aWR0aDogNjQwcHgpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZ2xvYmFsTGFyZ2VTdHlsZXNVcmwsXG4gICAgICBtZWRpYTogXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIixcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IGBSZW1peDogQ2hlY2tvdXQgdGhpcyBtYXJpbyB3aWtpIGJ1aWx0IHdpdGggaHlwZXIuaW8gJiBSZW1peCEgYCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmPThcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJVaC1vaCFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5BcHAgRXJyb3I8L2gxPlxuICAgICAgICA8cHJlPntlcnJvci5tZXNzYWdlfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCBMaW5rLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwiLi4vc3R5bGVzL2NoYXJhY3RlcnMuY3NzXCI7XG5pbXBvcnQgeyBsaXN0Q2hhcmFjdGVycyB9IGZyb20gXCIuLi91dGlscy9oeXBlci9tb2RlbHMvY2hhcmFjdGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBsaXN0Q2hhcmFjdGVycygpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgY29uc3QgZGF0YSA9IHsgcmVzdWx0LCB1c2VyIH07XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4geyBkYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3RlcnNSb3V0ZSgpIHtcbiAgbGV0IHsgZGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGxvYWRlcmRhdGFcIiwgZGF0YS51c2VyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmFjdGVycy1sYXlvdXRcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY2hhcmFjdGVycy1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaG9tZS1saW5rXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4IGNoYXJhY3RlcnNcIiBhcmlhLWxhYmVsPVwiUmVtaXggY2hhcmFjdGVyc1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+XHVEODNEXHVERDc5PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLW1lZGl1bVwiPk1hcmlvIFdpa2k8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7ZGF0YS51c2VyID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICAgICAgPHNwYW4+e2BIaSAke2RhdGEudXNlci51c2VybmFtZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2hhcmFjdGVycy1tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJzLWxpc3RcIj5cbiAgICAgICAgICAgIDxwPkhlcmUgYXJlIGEgZmV3IG1vcmUgY2hhcmFjdGVycyB0byBjaGVjayBvdXQ6PC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGF0YS5yZXN1bHQubWFwKChjaGFyYWN0ZXIpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGFyYWN0ZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2NoYXJhY3Rlci5pZH0+e2NoYXJhY3Rlci5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8TGluayB0bz1cIm5ld1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBBZGQgeW91ciBvd24hXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJzLW91dGxldFwiPlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIjtcbmltcG9ydCB7IGFkZFVzZXIsIHJldHJpZXZlVXNlciB9IGZyb20gXCIuL2h5cGVyL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBoeXBlciB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG4vLyB0eXBlIExvZ2luRm9ybSA9IHtcbi8vICAgdXNlcm5hbWU6IHN0cmluZztcbi8vICAgcGFzc3dvcmQ6IHN0cmluZztcbi8vIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSB7XG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGNyZWF0ZWRVc2VyID0gYXdhaXQgYWRkVXNlcih7XG4gICAgX2lkOiBcInVzZXItXCIgKyBjdWlkKCksXG4gICAgaWQ6IFwidXNlci1cIiArIGN1aWQoKSxcbiAgICB0eXBlOiBcInVzZXJcIixcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZEhhc2gsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGNyZWF0ZWQgdXNlclwiLCBjcmVhdGVkVXNlcik7XG4gIHJldHVybiBjcmVhdGVkVXNlcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pIHtcbiAgLy8gY29uc29sZS5sb2coXCJsb2dpbiBmdW5jdGlvbiB0eXBlb2ZcIiwgdHlwZW9mIHVzZXJuYW1lKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJldHJpZXZlVXNlcih1c2VybmFtZSk7XG4gIGNvbnNvbGUubG9nKFwiVGhlIGxvZyBmb3IgbG9naW4gZnJvbSB0aGUgc2VydmVyXCIsIHVzZXIpO1xuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBgJHtwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVH1gO1xuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpO1xufVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJlbWl4TWFyaW9XaWtpX3Nlc3Npb25cIixcbiAgICAvLyBub3JtYWxseSB5b3Ugd2FudCB0aGlzIHRvIGJlIGBzZWN1cmU6IHRydWVgXG4gICAgLy8gYnV0IHRoYXQgZG9lc24ndCB3b3JrIG9uIGxvY2FsaG9zdCBmb3IgU2FmYXJpXG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L3doZW4tdG8tdXNlLWxvY2FsLWh0dHBzL1xuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KSB7XG4gIHJldHVybiBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0VXNlclNlc3Npb24ocmVxdWVzdCk7XG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpO1xuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3QsXG4gIHJlZGlyZWN0VG8gPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSk7XG4gICAgdGhyb3cgcmVkaXJlY3QoYC9sb2dpbj8ke3NlYXJjaFBhcmFtc31gKTtcbiAgfVxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGh5cGVyLmRhdGEuZ2V0KHVzZXJJZCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2gge1xuICAgIHRocm93IGxvZ291dChyZXF1ZXN0KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZCwgcmVkaXJlY3RUbykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcImh5cGVyLWNvbm5lY3RcIjtcbmltcG9ydCB7IHVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vc2NoZW1hc1wiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5jb25zdCBoeXBlciA9IGNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuSFlQRVJ9YCk7XG5cbmNvbnN0IGJ5VHlwZSA9IChkb2N0eXBlKSA9PiAoZG9jKSA9PiBkb2MudHlwZSA9PT0gZG9jdHlwZTtcblxuLy8gVXNlciBGdW5jdGlvbnMgKGZvciBjcmVhdGluZyBhIHVzZXIuLi4pXG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcihkYXRhKSB7XG4gIHJldHVybiB1c2VyU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXIodXNlcikge1xuICBjb25zdCB7IHN1Y2Nlc3MsIGRhdGEsIGVycm9yIH0gPSB2YWxpZGF0ZVVzZXIodXNlcik7XG4gIGlmIChzdWNjZXNzKSB7XG4gICAgcmV0dXJuIGF3YWl0IGh5cGVyLmRhdGEuYWRkKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IG9rOiBmYWxzZSwgZXJyb3IgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVVc2VyKHVzZXJuYW1lKSB7XG4gIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1c2VybmFtZSk7XG4gIGNvbnN0IHsgZG9jcyB9ID0gYXdhaXQgaHlwZXIuZGF0YS5nZXQoKTtcbiAgY29uc3QgdXNlcnMgPSBkb2NzLmZpbHRlcihieVR5cGUoXCJ1c2VyXCIpKTtcbiAgY29uc3QgdXNlciA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xuICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGh5cGVyLmRhdGEuZ2V0KHVzZXJbMF0uX2lkKTtcbiAgY29uc29sZS5sb2coXCJUaGUgdXNlciBkb2NzXCIsIGN1cnJlbnRVc2VyKTtcbiAgaWYgKCFjdXJyZW50VXNlcikgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIGN1cnJlbnRVc2VyO1xufVxuIiwgImltcG9ydCAqIGFzIHogZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgdXNlclNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkucmVnZXgoL151c2VyLyksXG4gIHR5cGU6IHoubGl0ZXJhbChcInVzZXJcIikuZGVmYXVsdChcInVzZXJcIiksXG4gIC8vIGNyZWF0ZWRBdDogei5kYXRlKCksXG4gIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigzKS5tYXgoMTAwKSxcbiAgcGFzc3dvcmRIYXNoOiB6LnN0cmluZygpLFxufSk7XG5cbi8vIFVwZGF0ZSBjaGFyYWN0ZXIgc2NoZW1hIHRvIGhhdmUgYSB1c2VyX2lkIHNvIHRoYXQgd2hlbmV2ZXIgYSB1c2VyIGFkZHMgYSBjaGFyYWN0ZXIsIHRoZWlyIHVzZXJfaWQgaXMgdGFnZ2VkIHRvIHRoZSBjaGFyYWN0ZXIuXG5cbmV4cG9ydCBjb25zdCBjaGFyYWN0ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLnJlZ2V4KC9eY2hhcmFjdGVyLyksXG4gIHR5cGU6IHoubGl0ZXJhbChcImNoYXJhY3RlclwiKS5kZWZhdWx0KFwiY2hhcmFjdGVyXCIpLFxuICBuYW1lOiB6LnN0cmluZygpLFxuICBkZWJ1dDogei5zdHJpbmcoKS5taW4oNCkubWF4KDQpLFxuICB1c2VyX2lkOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IGdhbWVTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGlkOiB6LnN0cmluZygpLnJlZ2V4KC9eZ2FtZS8pLFxuICB0eXBlOiB6LmxpdGVyYWwoXCJnYW1lXCIpLmRlZmF1bHQoXCJnYW1lXCIpLFxuICBuYW1lOiB6LnN0cmluZygpLm1heCgxMDApLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5tYXgoNTAwMCkub3B0aW9uYWwoKSxcbiAgcmVsZWFzZWQ6IHouc3RyaW5nKCkubWluKDQpLm1heCg0KSxcbiAgLy8gdXNlcl9pZDogei5zdHJpbmcoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYXBwZWFyYW5jZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgaWQ6IHouc3RyaW5nKCkucmVnZXgoL15hcHBlYXJhbmNlLyksXG4gIHR5cGU6IHoubGl0ZXJhbChcImFwcGVhcmFuY2VcIikuZGVmYXVsdChcImFwcGVhcmFuY2VcIiksXG4gIGNoYXJhY3Rlcl9pZDogei5zdHJpbmcoKSxcbiAgY2hhcmFjdGVyX25hbWU6IHouc3RyaW5nKCksXG4gIGdhbWVfaWQ6IHouc3RyaW5nKCksXG4gIGdhbWVfbmFtZTogei5zdHJpbmcoKSxcbiAgLy8gdXNlcl9pZDogei5zdHJpbmcoKSxcbn0pO1xuIiwgImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiaHlwZXItY29ubmVjdFwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5jb25zdCBoeXBlciA9IGNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuSFlQRVJ9YCk7XG5cbmV4cG9ydCB7IGh5cGVyIH07XG4iLCAiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJoeXBlci1jb25uZWN0XCI7XG5pbXBvcnQgeyBjaGFyYWN0ZXJTY2hlbWEgfSBmcm9tIFwiLi4vc2NoZW1hc1wiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5jb25zdCBoeXBlciA9IGNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuSFlQRVJ9YCk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hhcmFjdGVyKGRhdGEpIHtcbiAgcmV0dXJuIGNoYXJhY3RlclNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIGNvbnN0IHsgc3VjY2VzcywgZGF0YSwgZXJyb3IgfSA9IHZhbGlkYXRlQ2hhcmFjdGVyKGNoYXJhY3Rlcik7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gYXdhaXQgaHlwZXIuZGF0YS5hZGQoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvciB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0Q2hhcmFjdGVycygpIHtcbiAgLy8gY2FsbCBoeXBlciB0byBnZXQgYSBsaXN0XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGh5cGVyLmRhdGEucXVlcnkoeyB0eXBlOiBcImNoYXJhY3RlclwiIH0pO1xuICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5kb2NzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyQnlJZChpZCkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBoeXBlci5kYXRhLmdldChpZCk7XG4gIGlmIChyZXN1bHQub2spIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZG9jcyk7XG4gICAgcmV0dXJuIHJlc3VsdC5kb2NzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXN1bHQubXNnO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGh5cGVyLmRhdGEuZGVzdHJveShjaGFyYWN0ZXIpO1xuICBpZiAocmVzdWx0Lm9rKSB7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRvY3MpO1xuICAgIHJldHVybiByZXN1bHQuZG9jcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcImZhaWxlZCB0byBkZWxldGUgdGhpcyBjaGFyYWN0ZXJcIiB9O1xuICB9XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zLCBMaW5rLCB1c2VDYXRjaCwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldFVzZXJJZCwgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgeyBoeXBlciB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCwgcGFyYW1zIH0pIHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBsZXQgeyBjaGFyYWN0ZXJJZCB9ID0gcGFyYW1zO1xuICBsZXQgY2hhcmFjdGVyID0gYXdhaXQgaHlwZXIuZGF0YS5nZXQoY2hhcmFjdGVySWQpO1xuICBpZiAoIWNoYXJhY3Rlcikge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIldoYXQ/ISBDaGFyYWN0ZXIgd2FzIG5vdCBmb3VuZC5cIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkYXRhID0ge1xuICAgIGNoYXJhY3RlcixcbiAgICBpc093bmVyOiB1c2VySWQgPT09IGNoYXJhY3Rlci51c2VyX2lkLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCwgcGFyYW1zIH0pIHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBpZiAoZm9ybS5nZXQoXCJfbWV0aG9kXCIpID09PSBcImRlbGV0ZVwiKSB7XG4gICAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySWQpO1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGh5cGVyLmRhdGEuZ2V0KHBhcmFtcy5jaGFyYWN0ZXJJZCk7XG4gICAgLy8gY29uc29sZS5sb2coY2hhcmFjdGVyKTtcbiAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiQ2FuJ3QgZGVsZXRlIHdoYXQgZG9lcyBub3QgZXhpc3RcIiwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG4gICAgaWYgKGNoYXJhY3Rlci51c2VyX2lkICE9PSB1c2VySWQpIHtcbiAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIlBzc2gsIG5pY2UgdHJ5LiBUaGF0J3Mgbm90IHlvdXIgY2hhcmFjdGVyXCIsIHtcbiAgICAgICAgc3RhdHVzOiA0MDEsXG4gICAgICB9KTtcbiAgICB9XG4gICAgYXdhaXQgaHlwZXIuZGF0YS5yZW1vdmUocGFyYW1zLmNoYXJhY3RlcklkKTtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvY2hhcmFjdGVyc1wiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nbGVDaGFyYWN0ZXJSb3V0ZSgpIHtcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgbG9hZGVyIGRhdGFcIiwgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPk5hbWU6IHtkYXRhLmNoYXJhY3Rlci5uYW1lfTwvaDI+XG4gICAgICA8aDQ+RGVidXQ6IHtkYXRhLmNoYXJhY3Rlci5kZWJ1dH08L2g0PlxuICAgICAge2RhdGEuaXNPd25lciA/IChcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPlxuICAgICAgICBIdWg/IFdobyB0aGUgaGVjayBpcyBcIntwYXJhbXMuY2hhcmFjdGVySWR9XCJcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgZXJyb3I6ICR7Y2F1Z2h0LnN0YXR1c31gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIGxldCB7IGNoYXJhY3RlcklkIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc29sZS5sb2coXCJ0aGUgY2hhcmFjdGVyIGlkIGZyb20gdGhlIHBhcmFtc1wiLCBjaGFyYWN0ZXJJZCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj57YFRoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIGNoYXJhY3RlciBieSB0aGUgaWQgJHtjaGFyYWN0ZXJJZH0uIFNvcnJ5LmB9PC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluaywgdXNlQ2F0Y2ggfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGh5cGVyIH0gZnJvbSBcIn4vZGIuc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJjdGVyc0luZGV4Um91dGUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoND5IZXJlIGlzIHdoZXJlIHRoZSBDaGFyYWN0ZXIgaW5mb3JtYXRpb24gd2lsbCBiZS48L2g0PlxuICAgICAgPHA+Q2xpY2sgb24gYSBjaGFyYWN0ZXIgYW5kIHRoZWlyIGluZm9ybWF0aW9uIHdpbGwgYXBwZWFyLjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPlRoZXJlIGFyZSBubyBjaGFyYWN0ZXJzIHRvIGRpc3BsYXk8L2Rpdj5cbiAgICApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjYXVnaHQgcmVzcG9uc2Ugd2l0aCBzdGF0dXM6ICR7Y2F1Z2h0LnN0YXR1c31gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPkkgZGlkIGEgd2hvb3BzaWVzPC9kaXY+O1xufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0LCB1c2VBY3Rpb25EYXRhLCBqc29uLCB1c2VDYXRjaCwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIjtcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQsIGdldFVzZXJJZCB9IGZyb20gXCIuLi8uLi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHsgYWRkQ2hhcmFjdGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2h5cGVyL21vZGVscy9jaGFyYWN0ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGNvbnNvbGUubG9nKHVzZXJJZCk7XG4gIGlmICghdXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoYXJhY3RlckNvbnRlbnQoZGVidXQpIHtcbiAgaWYgKGRlYnV0Lmxlbmd0aCAhPT0gNCkge1xuICAgIHJldHVybiBgRGVidXQgbXVzdCBiZSBhIGZvdXIgZGlnaXQgeWVhcmA7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGFyYWN0ZXJOYW1lKG5hbWUpIHtcbiAgaWYgKG5hbWUubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBgVGhhdCBjaGFyYWN0ZXIgbmFtZSBpcyB0b28gc2hvcnRgO1xuICB9XG59XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IG5hbWUgPSBmb3JtLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlYnV0ID0gZm9ybS5nZXQoXCJkZWJ1dFwiKTtcblxuICAvLyB3ZSBkbyB0aGlzIHR5cGUgY2hlY2sgdG8gYmUgZXh0cmEgc3VyZSBhbmQgdG8gbWFrZSBUeXBlU2NyaXB0IGhhcHB5XG4gIC8vIHdlJ2xsIGV4cGxvcmUgdmFsaWRhdGlvbiBuZXh0IVxuXG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVidXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCk7XG4gIH1cblxuICBsZXQgY2hhcmFjdGVyID0gYXdhaXQgYWRkQ2hhcmFjdGVyKHtcbiAgICBpZDogXCJjaGFyYWN0ZXItIFwiICsgY3VpZCgpLFxuICAgIHR5cGU6IFwiY2hhcmFjdGVyXCIsXG4gICAgbmFtZSxcbiAgICBkZWJ1dCxcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIGluZGl2aWR1YWwgY2hhcmFjdGVyIGluZm9ybWF0aW9uXCIsIGNoYXJhY3Rlci5pZCk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KGAvY2hhcmFjdGVycy8ke2NoYXJhY3Rlci5pZH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3Q2hhcmFjdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+QWRkIFlvdXIgT3duIENoYXJhY3RlciE8L2gzPlxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRGVidXQ6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVidXRcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgPHA+WW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIGNyZWF0ZSBhIGNoYXJhY3Rlci48L3A+XG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICBTb21ldGhpbmcgdW5leHBlY3RlZCB3ZW50IHdyb25nLiBTb3JyeSBhYm91dCB0aGF0LlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgTWFyaW8gPHNwYW4+V2lraSE8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cImNoYXJhY3RlcnNcIj5WaWV3IENoYXJhY3RlcnM8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwgTGluaywgdXNlU2VhcmNoUGFyYW1zLCBqc29uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBoeXBlciB9IGZyb20gXCJ+L2RiLnNlcnZlclwiO1xuaW1wb3J0IHsgYWRkVXNlciwgcmV0cmlldmVVc2VyIH0gZnJvbSBcIn4vdXRpbHMvaHlwZXIvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiwgcmVnaXN0ZXIgfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwiLi4vc3R5bGVzL2xvZ2luLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59XG5cbi8vIGZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpIHtcbi8vICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4vLyAgICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJjYXRlcnMgbG9uZ2A7XG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkge1xuLy8gICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbi8vICAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbi8vICAgfVxuLy8gfVxuXG4vLyB0eXBlIEFjdGlvbkRhdGEgPSB7XG4vLyAgIGZvcm1FcnJvcj86IHN0cmluZztcbi8vICAgZmllbGRFcnJvcnM/OiB7XG4vLyAgICAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbi8vICAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuLy8gICB9O1xuLy8gICBmaWVsZHM/OiB7XG4vLyAgICAgbG9naW5UeXBlOiBzdHJpbmc7XG4vLyAgICAgdXNlcm5hbWU6IHN0cmluZztcbi8vICAgICBwYXNzd29yZDogc3RyaW5nO1xuLy8gICB9O1xuLy8gfTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgbG9naW5UeXBlID0gZm9ybS5nZXQoXCJsb2dpblR5cGVcIik7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL2NoYXJhY3RlcnNcIjtcblxuICBpZiAoXG4gICAgdHlwZW9mIGxvZ2luVHlwZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiByZWRpcmVjdFRvICE9PSBcInN0cmluZ1wiXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIG1lc3NhZ2U6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5YCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnN0IGZpZWxkcyA9IHsgbG9naW5UeXBlLCB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgLy8gY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gIC8vICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICAvLyAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcbiAgLy8gfTtcbiAgLy8gaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gIC8vICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgbG9naW50eXBlXCIsIGxvZ2luVHlwZSk7XG4gIGNvbnNvbGUubG9nKFwiVGhlc2UgaXMgdGhlIHVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcbiAgY29uc29sZS5sb2coXCJUaGVzZSBpcyB0aGUgcGFzc3dvcmRcIiwgcGFzc3dvcmQpO1xuICBjb25zb2xlLmxvZyhcIlRoZXNlIGlzIHRoZSByZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG8pO1xuXG4gIHN3aXRjaCAobG9naW5UeXBlKSB7XG4gICAgY2FzZSBcImxvZ2luXCI6IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGxvZ2dpbiBjYXNlIHVzZXIgbG9nXCIsIHVzZXIpO1xuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZTogXCJVc2VybmFtZS9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RcIixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCByZWRpcmVjdFRvKTtcbiAgICB9XG4gICAgY2FzZSBcInJlZ2lzdGVyXCI6IHtcbiAgICAgIC8vIGNvbnN0IHVzZXJFeGlzdHMgPSBhd2FpdCBoeXBlci5kYXRhLmdldCh1c2VybmFtZSk7XG4gICAgICAvLyBpZiAodXNlckV4aXN0cykge1xuICAgICAgLy8gICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAvLyAgICAgbWVzc2FnZTogYFVzZXIgd2l0aCAke3VzZXJuYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICAgICAgY29uc29sZS5sb2coeyB1c2VyIH0pO1xuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcIk5vdCBpbXBsZW1lbnRlZFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCByZWRpcmVjdFRvKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgICBtZXNzYWdlOiBgTG9naW4gdHlwZSBpbnZhbGlkYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc29sZS5sb2coXCJUaGVzZSBhcmUgdGhlIHNlYXJjaCBwYXJhbXNcIiwgc2VhcmNoUGFyYW1zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8ubWVzc2FnZSA/IFwiZm9ybS1lcnJvci1tZXNzYWdlXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHVuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkxvZ2luIG9yIFJlZ2lzdGVyPzwvbGVnZW5kPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpblR5cGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwibG9naW5cIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICFhY3Rpb25EYXRhPy5sb2dpblR5cGUgfHwgYWN0aW9uRGF0YT8ubG9naW5UeXBlID09PSBcImxvZ2luXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInJlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17YWN0aW9uRGF0YT8ubG9naW5UeXBlID09PSBcInJlZ2lzdGVyXCJ9XG4gICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXthY3Rpb25EYXRhPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8udXNlcm5hbWUgPyBcInVzZXJuYW1lLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy51c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1lcnJvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8udXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e0Jvb2xlYW4oYWN0aW9uRGF0YT8ucGFzc3dvcmQpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8ucGFzc3dvcmQgPyBcInBhc3N3b3JkLWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5tZXNzYWdlID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2hhcmFjdGVyc1wiPkNoYXJhY3RlcnM8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7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

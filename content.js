"use strict";

const proxyDomainLink = 'https://proxy.duckduckgo.com/iu/?u=';
const aLinks = document.querySelectorAll("a[href^='https://i.imgur.com'], a[href^='https://i.ibb.co'");
const imgLinks = document.querySelectorAll("img[src^='https://i.imgur.com'], img[src^='https://i.ibb.co'");

for (const link of aLinks) {
    link.href = proxyDomainLink + link.href;
};

for (const link of imgLinks) {
    link.src = proxyDomainLink + link.src;
};

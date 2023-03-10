"use strict";

const proxyDomainLink = 'https://proxy.duckduckgo.com/iu/?u=';
const targetDomains = ['https://i.imgur.com', 'https://i.ibb.co'];
const cssSelectors = targetDomains.map(domain => `a[href^='${domain}'],img[src^='${domain}']`);
const links = document.querySelectorAll(cssSelectors.join(','));


for (const link of links) {
    if (link.tagName === 'A') {
        link.href = proxyDomainLink + link.href;
    }
    if (link.tagName === 'IMG') {
        link.src = proxyDomainLink + link.src;
    }
};

try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9a515599-e050-44e3-b318-73c227abe6b6",e._sentryDebugIdIdentifier="sentry-dbid-9a515599-e050-44e3-b318-73c227abe6b6")}catch(e){}"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8844],{767:(e,t,n)=>{n.d(t,{A:()=>g});var o=n(6029),i=n(77646),r=n(95669),a=n.n(r),s=n(55729),l=n(66084),c=n(83290),d=n(54758),u=function(e){return e.match(/^https?:\/\//i)?e:"".concat(l.A.get("web.base-url")).concat(e)};let g=function(e){var t,n,r=e.metaData,g=e.integrations,p=e.useEmbedWidgetScript,f=(0,i.GA)(),m=r.imageUrl||"/images/og.jpg",w=null==g?void 0:null===(t=g.find(function(e){return e.type===d.pq.GoogleAnalytics}))||void 0===t?void 0:t.data,h=null==g?void 0:null===(n=g.find(function(e){return e.type===d.pq.FacebookPixel}))||void 0===n?void 0:n.data;return(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:r.title}),r.description&&(0,o.jsx)("meta",{name:"description",content:r.description}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0"},"viewport"),r.allowIndexing?(0,o.jsx)("meta",{content:"index,nofollow",name:"robots"}):(0,o.jsx)("meta",{content:"noindex,nofollow",name:"robots"}),r.faviconUrl?(0,o.jsx)("link",{rel:"icon",href:r.faviconUrl,type:r.faviconType||"image/x-icon"}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("link",{rel:"shortcut icon",type:"image/png",href:new URL("/tally-square.png",l.A.get("web.base-url")).toString()}),(0,o.jsx)("link",{rel:"alternate icon",type:"image/png",href:new URL(f===i.J2.Dark?"/favicon-light.png":"/favicon.png",l.A.get("web.base-url")).toString()}),(0,o.jsx)("link",{rel:"icon",type:"image/svg+xml",href:new URL(f===i.J2.Dark?"/favicon-light.svg":"/favicon.svg",l.A.get("web.base-url")).toString()}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:new URL(f===i.J2.Dark?"/favicon-light.ico":"/favicon.ico",l.A.get("web.base-url")).toString()})]}),r.font&&(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(r.font.family.replace(/\s/g,"+"),":400,500,800,900&display=swap"),rel:"stylesheet"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:site_name",content:r.siteName}),(0,o.jsx)("meta",{property:"og:url",content:r.url}),(0,o.jsx)("meta",{name:"title",property:"og:title",content:r.title}),r.description&&(0,o.jsx)("meta",{property:"og:description",content:r.description}),(0,o.jsx)("meta",{name:"image",property:"og:image",content:u(m)}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:l.A.get("community.twitter-username")}),(0,o.jsx)("meta",{name:"twitter:title",content:r.title}),r.description&&(0,o.jsx)("meta",{name:"twitter:description",content:r.description}),(0,o.jsx)("meta",{name:"twitter:image",content:u(m)}),r.oembedUrl&&!r.isCustomDomain&&(0,o.jsx)("link",{rel:"alternate",type:"application/json+oembed",href:"".concat(l.A.get("api.base-url"),"/oembed?url=").concat(encodeURIComponent(r.oembedUrl),"&format=json"),title:r.title}),(0,o.jsx)("script",{noModule:!0,dangerouslySetInnerHTML:{__html:'window.location.href = "'.concat(l.A.get("web.base-url"),'/browser-not-supported.html";')}}),!r.doNotTrack&&w&&(0,o.jsxs)(s.Fragment,{children:[w.askForCookieConsent&&(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:'\n             var _iub = _iub || [];\n            _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"cookiePolicyInOtherWindow":true,"floatingPreferencesButtonDisplay":"bottom-left","lang":"'.concat((0,c.yH)(r.language),'","perPurposeConsent":true,"purposes":"1,4,5","siteId":3514643,"whitelabel":false,"cookiePolicyId":11696253,"cookiePolicyUrl":"https://tally.so/help/cookie-policy", "banner":{ "acceptButtonColor":"#0070D7","acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonColor":"#0070D7","rejectButtonDisplay":true,"showPurposesToggles":true,"showTitle":false }};\n           ')}}),(0,o.jsx)("script",{type:"text/javascript",src:"https://cs.iubenda.com/autoblocking/3514643.js"}),(0,o.jsx)("script",{type:"text/javascript",src:"//cdn.iubenda.com/cs/iubenda_cs.js",async:!0})]}),(0,o.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(w.trackingId)}),(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n             window.dataLayer = window.dataLayer || [];\n             function gtag(){dataLayer.push(arguments);}\n             gtag('js', new Date());\n            ".concat(!1===w.askForCookieConsent&&"\n              gtag('consent', 'default', {\n                'ad_storage': 'granted',\n                'ad_user_data': 'granted',\n                'ad_personalization': 'granted',\n                'analytics_storage': 'granted'\n              });\n            ","\n             gtag('config', '").concat(w.trackingId,"', {\n               page_path: window.location.pathname,\n               cookie_flags: 'secure;samesite=none'\n             });\n           ")}})]}),!r.doNotTrack&&h&&(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)("script",{type:(null==w?void 0:w.askForCookieConsent)?"text/plain":"text/javascript",className:(null==w?void 0:w.askForCookieConsent)?"_iub_cs_activate":"",dangerouslySetInnerHTML:{__html:"\n              !function(f,b,e,v,n,t,s)\n              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n              n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n              n.queue=[];t=b.createElement(e);t.async=!0;\n              t.src=v;s=b.getElementsByTagName(e)[0];\n              s.parentNode.insertBefore(t,s)}(window, document,'script',\n              'https://connect.facebook.net/en_US/fbevents.js');\n              fbq('init', '".concat(h.pixelId,"');\n              fbq('track', 'PageView');\n           ")}}),(0,o.jsx)("noscript",{type:(null==w?void 0:w.askForCookieConsent)?"text/plain":"text/javascript",className:(null==w?void 0:w.askForCookieConsent)?"_iub_cs_activate":"",dangerouslySetInnerHTML:{__html:'\n              <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id='.concat(h.pixelId,'&ev=PageView&noscript=1" />\n            ')}})]}),void 0!==p&&p&&(0,o.jsx)("script",{async:!0,src:"".concat(l.A.get("web.base-url"),"/widgets/embed.js")}),r.isFormEmbedded&&(0,o.jsx)("script",{dangerouslySetInnerHTML:{__html:"window.iFrameResizer = { heightCalculationMethod: function () { return document.body.clientHeight; } }"}})]})}},17808:(e,t,n)=>{n.d(t,{IS:()=>a,Q1:()=>i,jK:()=>o,oO:()=>r});var o=function(){return window.pageYOffset>0?window.pageYOffset:document.body.style.top?-1*parseFloat(document.body.style.top):0},i=function(e){return{top:e.getBoundingClientRect().bottom+5+o(),bottom:window.innerHeight-e.getBoundingClientRect().top-o()+5,left:e.getBoundingClientRect().left+window.pageXOffset,right:window.innerWidth-e.getBoundingClientRect().right-window.pageXOffset}},r=function(){var e,t=null===(e=window.getSelection())||void 0===e?void 0:e.getRangeAt(0);if(!t)return{top:0,bottom:0,left:0,right:0};var n=t;t.startContainer.nodeType===Node.ELEMENT_NODE&&(n=t.startContainer);var i=n.getBoundingClientRect(),r=i.top,a=i.bottom,s=i.left,l=i.right;return{top:a+5+o(),bottom:window.innerHeight-r-o()+5,left:s+window.pageXOffset,right:window.innerWidth-l-window.pageXOffset}},a=function(e){var t=document.createRange();t.selectNode(e);var n=t.getClientRects();if(0===n.length)return null;for(var o=n[n.length-1].y,i=0,r=0;r<n.length;r++)n[r].y===o&&(i+=n[r].width);var a=Array.from(e.childNodes).filter(function(e){return"SPAN"===e.nodeName&&e.classList.contains("mention")&&""===e.textContent});if(a.length>0){var s=!0,l=!1,c=void 0;try{for(var d,u=a[Symbol.iterator]();!(s=(d=u.next()).done);s=!0){var g=d.value;t.selectNode(g);var p=t.getClientRects();p[0].y===o&&(i+=p[0].width)}}catch(e){l=!0,c=e}finally{try{s||null==u.return||u.return()}finally{if(l)throw c}}}return t.detach(),i}},30602:(e,t,n)=>{n.d(t,{$Y:()=>h,CN:()=>c,Ce:()=>l,Fr:()=>s,L5:()=>w,XI:()=>a,YG:()=>p,ZH:()=>y,al:()=>f,cR:()=>m,cX:()=>u,gb:()=>g,nr:()=>d});var o=n(97393),i=n(33914),r=n(17808),a="IntersectionObserver"in window,s=function(){return window.innerWidth<576},l=function(){return window.innerWidth<758},c=function(){return"touchOnly"===i.RX},d=function(){return"undefined"!=typeof navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},u=function(){var e,t;return"undefined"!=typeof navigator&&(null!==(t=null===(e=navigator.userAgentData)||void 0===e?void 0:e.platform)&&void 0!==t?t:navigator.platform).toUpperCase().indexOf("MAC")>=0},g=function(e){return{top:e.clientY+(0,r.jK)(),bottom:window.innerHeight-e.clientY-(0,r.jK)(),left:e.clientX+window.pageXOffset,right:window.innerWidth-e.clientX-window.pageXOffset}},p=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},f=function(){try{return window.self!==window.top}catch(e){return!0}},m=function(e,t,n){if(e){var o=e.querySelector('[id="'.concat(t,'"]'));if(o){var i=o.getBoundingClientRect(),r=i.y,a=i.height,s=e.getBoundingClientRect(),l=s.y,c=s.height;l<=r&&r+a<=l+c||o.scrollIntoView(null!=n?n:{behavior:"smooth",block:"nearest"})}}},w=function(e){return o.YI.includes(e.key)?e.key.toLowerCase():e.key},h=function(e){var t,n,o;void 0!==(null===(t=window)||void 0===t?void 0:t.parent)&&"function"==typeof(null===(o=window)||void 0===o?void 0:null===(n=o.parent)||void 0===n?void 0:n.postMessage)&&window.parent.postMessage(JSON.stringify(e),"*")},y=function(){return u()?"⌘":"Ctrl"}},42325:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(99649),i=n(6029),r=n(71024),a=n.n(r),s=n(7099),l=a()(function(){return n.e(8440).then(n.bind(n,78440))},{loadableGenerated:{webpack:function(){return[78440]}},ssr:!1}),c=function(e){return(0,i.jsx)(l,(0,o._)({},e))};c.hide=function(){(0,s.N)(s.v.TooltipHide)};let d=c},54758:(e,t,n)=>{n.d(t,{Bx:()=>i,ni:()=>r,pq:()=>o});var o=function(e){return e.GoogleSheets="GOOGLE_SHEETS",e.Notion="NOTION",e.Airtable="AIRTABLE",e.Webhooks="WEBHOOKS",e.Zapier="ZAPIER",e.Integromat="INTEGROMAT",e.Integrately="INTEGRATELY",e.Pipedream="PIPEDREAM",e.Relay="RELAY",e.Pluga="PLUGA",e.Latenode="LATENODE",e.Welcomessage="WELCOMEMESSAGE",e.Coda="CODA",e.GoogleAnalytics="GOOGLE_ANALYTICS",e.FacebookPixel="FACEBOOK_PIXEL",e.Mailchimp="MAILCHIMP",e.Slack="SLACK",e.Gmail="GMAIL",e.GoogleCalendar="GOOGLE_CALENDAR",e.Hubspot="HUBSPOT",e.Salesforce="SALESFORCE",e.PDFMonkey="PDFMONKEY",e.Trello="TRELLO",e.GoogleDrive="GOOGLE_DRIVE",e.Dropbox="DROPBOX",e.SMS="SMS",e.ActiveCampaign="ACTIVE_CAMPAIGN",e.Asana="ASANA",e.Excel="EXCEL",e.Sellsy="SELLSY",e.BoostSpace="BOOST_SPACE",e}({}),i=function(e){return e.FormResponse="FORM_RESPONSE",e}({}),r=function(e){return e.Queued="QUEUED",e.Succeeded="SUCCEEDED",e.Failed="FAILED",e.Dropped="DROPPED",e}({})}}]);
//# sourceMappingURL=8844-de80e25a4df58b28.js.map
"use strict";function createExpArray(r){if(r){for(var t=[],e=0,n="",u=0,s=r.length;s>u;++u){if(n=r[u],"*"===n){var a=r.substr(e,u-e);""!==a&&(t.push(a),e=u),t.push("*"),e=u+1}else if("?"===n){var a=r.substr(e,u-e);""!==a&&(t.push(a),e=u),t.push("?"),e=u+1}u===s-1&&""!==r.substr(e,u-e+1)&&t.push(r.substr(e,u-e+1))}return{arraylength:t.length,joinlength:t.join("").length,arr:t}}return!1}function chooseFunc(r){if(r===!1)return alwaysTrue;var t=!1,e=!1,n=r.arraylength;if(1===n&&"*"===r.arr[0])return alwaysTrue;for(var u=0,s=n;s>=u;++u)"*"===r.arr[u]&&(t=!0),"?"===r.arr[u]&&(e=!0);return t||e?t&&!e?testOnlyStart:!t&&e?testOnlyQuest:t&&e?testAll:null:testNoSymbol}function alwaysTrue(){return!0}function alwaysFalse(){return!1}function testNoSymbol(r,t){return r===t.arr[0]?!0:!1}function testOnlyStart(r,t){for(var e=0,n=!1,u="",s=r.length,a="",f=0,l="",i="",o=0,h=t.arraylength;h>o;++o)if(i=t.arr[o],"*"!==i)if(f=i.length,l=r.substr(e,f),n===!0){if(e>=s)return!1;for(var c=e,g=s;g>c;++c){if(r[c]===i[0]&&(a=r.substr(c,f),a===i)){if(n=!1,e=c+f,o===h-1&&void 0!==r[e])return u=r.substr(s-f,f),u===i?!0:!1;break}if(c==g-1)return n=!1,!1}}else{if(l!==i)return!1;e+=l.length}else n=!0;return!0}function testOnlyQuest(r,t){var e=r.length;if(e!==t.joinlength)return!1;for(var n=0,u="",s=0,a="",f=0,l=t.arraylength;l>f;++f){var i=t.arr[f];if("?"===i){if(u=r[n],n+=1,!u)return!1}else{if(s=i.length,a=r.substr(n,s),a!==i)return!1;n+=a.length}}return!0}function testAll(r,t){for(var e=0,n=!1,u="",s=r.length,a=0,f="",l="",i=0,o=t.arraylength;o>i;++i)if(l=t.arr[i],"*"!==l)if("?"===l){var h=r[e];if(e+=1,!h)return!1;if(i===o-1&&void 0!==r[e]&&!n)return!1}else if(a=l.length,f=r.substr(e,a),n===!0){if(e>=s)return!1;for(var c=e,g=s;g>c;++c){if(r[c]===l[0]){var v=r.substr(c,a);if(v===l){if(n=!1,e=c+a,i===o-1&&void 0!==r[e])return u=r.substr(s-a,a),u===l?!0:!1;break}}if(c==g-1)return n=!1,!1}}else{if(f!==l)return!1;e+=f.length}else n=!0;return!0}module.exports=function(r,t){for(var e={},n=Object.keys(r),u=Object.keys(r).length,s="",a={},f={},l=function(){},i=function(){},o=0;u>o;++o)s=n[o],void 0===e[s]?e[s]=[]:null;for(var h=0,c=t.length;c>h;++h){a=createExpArray(t[h].from),f=createExpArray(t[h].to),l=chooseFunc(a),i=chooseFunc(f);for(var g=0;u>g;++g)s=n[g],l(r[s].from,a)&&i(r[s].to,f)&&e[s].push(t[h].action)}return e};

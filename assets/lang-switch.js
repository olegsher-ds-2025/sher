// lang-switch.js
// Replace lang-switch anchors' hrefs with translated equivalents when available.
(function(){
  function getLangFromPath(path){
    var m = path.match(/^\/(en|ru|he)(\/|$)/);
    return m?m[1]:null;
  }
  function getSlugFromPath(path, lang){
    if(!lang) return path.replace(/^\/+|\/+$/g,'');
    return path.replace(new RegExp('^/' + lang + '/?'), '').replace(/^\/+|\/+$/g,'');
  }
  fetch('/content-map.json').then(r=>r.json()).then(map=>{
    var cur = window.location.pathname;
    var curLang = getLangFromPath(cur) || 'en';
    var curSlug = getSlugFromPath(cur, curLang);
    // find entry with matching slug
    var targetKey = null;
    Object.keys(map).forEach(k=>{ if(map[k].slug===curSlug) targetKey=k; });
    // update all anchors with class lang-switch
    document.querySelectorAll('a.lang-switch').forEach(a=>{
      var targetLang = a.dataset.lang || a.getAttribute('data-lang') || a.textContent.toLowerCase();
      if(targetKey && map[targetKey] && map[targetKey].slug !== undefined){
        var newSlug = map[targetKey].slug;
        var href = '/' + targetLang + '/' + (newSlug? newSlug + '/' : '');
        a.href = href;
      } else {
        // fallback to language root
        a.href = '/' + targetLang + '/';
      }
    });
  }).catch(()=>{
    // On failure, ensure lang links point to roots
    document.querySelectorAll('a.lang-switch').forEach(a=>{var lang=a.dataset.lang||a.getAttribute('data-lang')||a.textContent.toLowerCase();a.href='/' + lang + '/';});
  });
})();

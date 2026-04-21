// linkifier.js
// Append referral code to iHerb links on the page.
(function(){
  var code = 'CIV758';
  function appendRcode(url){
    try{
      var u = new URL(url, window.location.origin);
      if(u.hostname.indexOf('iherb.com')!==-1){
        if(u.search){ u.search += '&rcode=' + code; }
        else { u.search = '?rcode=' + code; }
        return u.toString();
      }
    }catch(e){ }
    return url;
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('a[href*="iherb.com"]').forEach(a=>{
      a.href = appendRcode(a.href);
    });
  });
})();

const u=r=>r.reduce((t,o)=>Array.isArray(o.playlistData)?t+o.playlistData.length:t,0),e=r=>{if(!r||typeof r!="string"||!r.includes(":"))return console.warn(`Formato incorrecto de trackTime: ${r}`),0;const[t,o]=r.split(":").map(Number);return isNaN(t)||isNaN(o)?(console.warn(`trackTime contiene valores no numéricos: ${r}`),0):t*60+o},i=r=>{const t=r.reduce((a,n)=>Array.isArray(n.playlistData)?a+n.playlistData.reduce((s,c)=>s+e(c.trackTime),0):a,0);return`${Math.floor(t/60)} min`},l=r=>{const t=r.reduce((a,n)=>a+e(n.trackTime),0);return`${Math.floor(t/60)} min`};export{i as a,l as b,u as c};
//# sourceMappingURL=utils-Brx_oJzQ.js.map

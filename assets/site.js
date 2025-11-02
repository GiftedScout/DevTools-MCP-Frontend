// site-wide JS: mobile nav toggle and small decorations
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if(btn && nav){
    btn.addEventListener('click', function(){
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    // close on link click
    nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }); });
  }

  // subtle mouse parallax for crystals
  var left = document.querySelector('.crystal-deco.cr-left');
  var right = document.querySelector('.crystal-deco.cr-right');
  if(left || right){
    // disable mouse parallax on touch devices for performance & UX
    if(!('ontouchstart' in window)){
      document.addEventListener('mousemove', function(e){
        var w = window.innerWidth, h = window.innerHeight;
        var nx = (e.clientX / w - 0.5) * 12;
        var ny = (e.clientY / h - 0.5) * 8;
        if(left) left.style.transform = 'translate3d(' + (nx* -1) + 'px,' + (ny* -1) + 'px,0) rotate(-18deg)';
        if(right) right.style.transform = 'translate3d(' + (nx* 1) + 'px,' + (ny* 1) + 'px,0) rotate(12deg)';
      });
    } else {
      // on touch devices, give a subtle resting transform so crystals don't overlap content
      if(left) left.style.transform = 'rotate(-18deg)';
      if(right) right.style.transform = 'rotate(12deg)';
    }
  }

  // crystal click opens a side panel with workshop highlights
  function createSidePanel(){
    var p = document.createElement('div');
    p.className = 'side-panel';
    p.id = 'crystalSidePanel';
    p.innerHTML = '<div class="panel-inner">' +
      '<button class="close-btn" aria-label="关闭">✕</button>' +
      '<h3>Workshop 精华</h3>' +
      '<p>以下为本次 Workshop 的快速入口与示例：</p>' +
      '<ul>' +
      '<li><a href="devtools.html">DevTools MCP 深入阅读</a></li>' +
      '<li><a href="gdg.html">关于 GDG / DevFest</a></li>' +
      '<li><a href="#" id="openExample">示例：运行本地 MCP Server</a></li>' +
      '</ul>' +
      '<hr style="opacity:.06;margin:12px 0">' +
      '<h4>小贴士</h4>' +
      '<p>在 DevTools 中打开 Console，观察 MCP 与 DevTools 的交互日志；对危险操作启用人工确认。</p>' +
      '</div>';
    document.body.appendChild(p);
    // close handler
    p.querySelector('.close-btn').addEventListener('click', function(){ p.classList.remove('open'); });
    // example handler
    var ex = p.querySelector('#openExample');
    ex.addEventListener('click', function(e){ e.preventDefault(); alert('示例说明：请参阅 devtools.html 中的部署与本地调试章节。'); });
    return p;
  }
  var sidePanel = document.getElementById('crystalSidePanel') || createSidePanel();
  [left, right].forEach(function(el){
    if(!el) return;
    el.style.cursor = 'pointer';
    el.addEventListener('click', function(e){
      sidePanel.classList.toggle('open');
    });
  });

  // avatar expand panel
  var avatar = document.querySelector('.avatar');
  if(avatar){
    var panel = document.createElement('div');
    panel.className = 'profile-expanded';
    panel.innerHTML = '<h4>千里伯乐</h4><p>本科 · 计算机科学与技术</p><p style="margin-top:8px">爱好：天文摄影 · 羽毛球 · 调教 AI</p><p style="margin-top:8px">联系方式：+86 15267190283</p>';
    document.body.appendChild(panel);
    avatar.style.cursor = 'pointer';
    avatar.addEventListener('click', function(){ panel.classList.toggle('open'); });
  }

  // background settings control (floating button + modal)
  var settings = document.createElement('button');
  settings.className = 'bg-settings';
  settings.title = '背景设置';
  settings.innerHTML = '⚙';
  document.body.appendChild(settings);

  var modal = document.createElement('div');
  modal.className = 'bg-modal';
  modal.innerHTML = '<div class="bg-modal-backdrop"></div><div class="bg-modal-panel"><h4 style="margin-top:0">自定义背景图片（NASA）</h4><p style="margin:0 0 8px;color:#dff7ff">在下面粘贴图片 URL（支持 PNG/JPG），应用后会保存到本地浏览器。</p><input id="bgUrlInput" type="text" placeholder="https://.../image.png"/><div class="btn-row"><button id="applyBgBtn" class="btn">应用</button><button id="closeBgBtn" class="btn secondary">取消</button></div></div>';
  document.body.appendChild(modal);

  settings.addEventListener('click', function(){ modal.style.display = 'flex'; });
  modal.querySelector('.bg-modal-backdrop').addEventListener('click', function(){ modal.style.display = 'none'; });
  modal.querySelector('#closeBgBtn').addEventListener('click', function(){ modal.style.display = 'none'; });
  modal.querySelector('#applyBgBtn').addEventListener('click', function(){
    var v = document.getElementById('bgUrlInput').value.trim();
    if(!v) return;
    try{
      document.documentElement.style.setProperty('--nasa-hero', 'url("' + v + '")');
      localStorage.setItem('mcp_nasa_hero', v);
      modal.style.display = 'none';
    }catch(e){ console.warn('背景设置失败', e); }
  });

  // load saved background if exists
  var saved = localStorage.getItem('mcp_nasa_hero');
  if(saved){ document.documentElement.style.setProperty('--nasa-hero', 'url("' + saved + '")'); }

  // detect local assets and add quick buttons in modal
  (function addLocalButtons(){
    var panel = modal.querySelector('.bg-modal-panel');
    if(!panel) return;
    var holder = document.createElement('div');
    holder.style.marginTop = '12px';
    holder.innerHTML = '<div style="margin-bottom:8px;color:#dff7ff">或使用本地图片：</div>';
    var btns = document.createElement('div');
    btns.style.display = 'flex'; btns.style.gap = '8px';
    var images = [
      {name:'Tarntula Nebula', path:'assets/nasa_tarantula.png'},
      {name:'Pillars', path:'assets/nasa_pillars.jpg'}
    ];
    images.forEach(function(it){
      var img = new Image();
      img.onload = function(){
        var b = document.createElement('button');
        b.className = 'btn secondary';
        b.textContent = it.name;
        b.addEventListener('click', function(){
          document.documentElement.style.setProperty('--nasa-hero', 'url("' + it.path + '")');
          localStorage.setItem('mcp_nasa_hero', it.path);
          modal.style.display = 'none';
        });
        btns.appendChild(b);
      };
      img.onerror = function(){ /* ignore missing local image */ };
      img.src = it.path + '?_=' + Date.now();
    });
    holder.appendChild(btns);
    panel.appendChild(holder);
  })();
});

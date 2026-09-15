/* Professional Solutions — lightweight Structure Flow background */
(function(){
  'use strict';
  var host=document.querySelector('.hero-threeui-flow');
  if(!host || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var canvas=document.createElement('canvas');
  canvas.setAttribute('aria-hidden','true');
  host.appendChild(canvas);
  var ctx=canvas.getContext('2d',{alpha:true});
  if(!ctx) return;
  var width=0,height=0,raf=0,visible=true,points=[];
  var blue={r:65,g:126,b:181}, light={r:225,g:232,b:239};
  function resize(){
    var r=host.getBoundingClientRect();
    width=Math.max(1,r.width); height=Math.max(1,r.height);
    var dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr); canvas.height=Math.round(height*dpr);
    canvas.style.width=width+'px'; canvas.style.height=height+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    var count=window.innerWidth<768?70:150;
    points=[];
    for(var i=0;i<count;i++) points.push({
      x:Math.random()*width,y:height*(.12+Math.random()*.76),
      depth:.35+Math.random()*.65,size:.7+Math.random()*1.4,
      phase:Math.random()*Math.PI*2,speed:.00018+Math.random()*.00022
    });
  }
  function rgba(c,a){return 'rgba('+c.r+','+c.g+','+c.b+','+a+')';}
  function draw(t){
    if(!visible||document.hidden){raf=0;return;}
    ctx.clearRect(0,0,width,height);
    for(var i=0;i<points.length;i++){
      var p=points[i];
      p.cx=p.x+Math.sin(t*p.speed+p.phase)*(10+24*p.depth);
      p.cy=p.y+Math.cos(t*p.speed*.78+p.phase)*(5+12*p.depth);
    }
    ctx.lineWidth=.8;
    for(var j=0;j<points.length;j++){
      var a=points[j];
      for(var k=j+1;k<points.length;k++){
        var b=points[k],dx=a.cx-b.cx,dy=a.cy-b.cy,d2=dx*dx+dy*dy;
        if(d2>13500) continue;
        var alpha=.11*(1-d2/13500)*Math.min(a.depth,b.depth);
        if(alpha<=.008) continue;
        ctx.strokeStyle=rgba(blue,alpha);
        ctx.beginPath();ctx.moveTo(a.cx,a.cy);ctx.lineTo(b.cx,b.cy);ctx.stroke();
      }
    }
    for(var n=0;n<points.length;n++){
      var q=points[n],pulse=.55+.45*Math.sin(t*.0011+q.phase);
      ctx.fillStyle=n%4===0?rgba(blue,.18+.12*q.depth* pulse):rgba(light,.08+.06*q.depth);
      ctx.beginPath();ctx.arc(q.cx,q.cy,q.size*(.85+.2*pulse),0,Math.PI*2);ctx.fill();
    }
    raf=requestAnimationFrame(draw);
  }
  function start(){if(visible&&!raf&&!document.hidden) raf=requestAnimationFrame(draw);}
  function stop(){if(raf) cancelAnimationFrame(raf);raf=0;}
  window.addEventListener('resize',resize,{passive:true});
  document.addEventListener('visibilitychange',function(){if(document.hidden) stop(); else start();});
  if(window.IntersectionObserver){
    var io=new IntersectionObserver(function(e){visible=e[0]?e[0].isIntersecting:true;if(visible)start();else stop();},{threshold:.01});
    io.observe(host);
  }
  resize(); start();
}());

function calc(){
 const t=+total.value;
 const r=+read.value;
 const s=+speed.value;

 const p=(r/t)*100;
 bar.style.width=p+"%";

 result.textContent=`${p.toFixed(1)}% | ${(t-r)/s} days left`;

 save("progress",p);
}

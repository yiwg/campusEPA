(function(){
	var oWrap=document.getElementById("wrap");
	var oUl=document.getElementById("pics").children[0];
	var aLi=oUl.getElementsByTagName("li");
	var oScroll=new MScroll(oWrap,"y",true);
	var oMore=document.getElementById("more");
	var oMoreIco=oMore.children[0];
	var iNow=0;
	var iNub=8;
	var bEnd=true;
	oScroll.onscrollstart=function()
	{
		if(bEnd&&(this.iScroll<=-this.iMaxT))
		{
			this.bLoad=true;
			oMore.style.opacity=1;
		}
		else
		{
			this.bLoad=false;
			oMore.style.opacity=0;
		}
	};
	oScroll.onscroll=function()
	{
		loadImg();
		if(this.bLoad&&this.iScroll>-this.iMaxT)
		{
			this.bLoad=false;
		}
	};
	oScroll.onscrollend=function()
	{
		if(this.bLoad)
		{
			clearInterval(this.timer);
			oMore.style.opacity=0;
			this.tweenMove(30,"easeOut",function(){
				iNow++;
				cearteImg();
			});
		}
	};
	cearteImg();
	function cearteImg()
	{
		var sHtml="";
		var iStart=iNow*iNub;
		var iEnd=iStart+iNub;
		if(iEnd>aDate.length)iEnd=aDate.length;
		if(iStart>=iEnd)return;
		for(var i=iStart;i<iEnd;i++)
		{
			var oLi=document.createElement("li");
			oLi.innerHTML='<img src="" />';
			oUl.appendChild(oLi);
		}
		if(iEnd==aDate.length)
		{
			var oLi=document.createElement("li");
			oLi.innerHTML='亲,木有了';
			oLi.style.cssText="width:15rem;background:none; text-align:center; box-sizing:border-box;";
			oUl.appendChild(oLi);
			bEnd=false;
		}
		oScroll.resize();
		loadImg();
		oMore.style.opacity=0;
	}	
	function loadImg()
	{
		for(var i=0;i<aLi.length;i++)
		{
			var oImg=aLi[i].getElementsByTagName("img")[0];
			if(oImg&&(aLi[i].offsetTop<Math.abs(oScroll.iScroll)+oWrap.clientHeight)&&oImg.getAttribute("src")=="")
			{
				fn(oImg,i);
			}
		}
	}
	function fn(obj,nub)
	{
		var oImg=new Image();
		oImg.src=aDate[nub];
		oImg.onload=function()
		{
			obj.src=aDate[nub];
			setTimeout(function(){
				obj.style.opacity=1;
			},30);	
		}
	}
})();
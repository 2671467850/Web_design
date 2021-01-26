
var aDatas=[
	"元旦快乐!新年快乐!",
	"元宵节快乐!情人节快乐",
	"妇女节!植树节!没有假期的一个月",
	"愚人节!还有清明节的假期!",
	"劳动节!青年节!还有母亲节~",
	"^-^儿童节快乐!父亲节!端午假期!",
	"emmm...是没有假期的一个月~",
	"七夕节快乐!",
	"教师节快乐!",
	"国庆节快乐!万圣节快乐!",
	"感恩节应该有名字~",
	"平安夜圣诞快乐!"
];
/*年历*/
function rili()
{
	var oDiv=document.getElementById('rili');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aBtn=oUl.getElementsByTagName('li');
	var oTxt=document.getElementById('action');
	
	var i=0;
	
	for(i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i;
		aBtn[i].onmouseover=function ()
		{
			for(i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			this.className='move';
			oTxt.innerText=aDatas[this.index];
		};
	}
};





window.onload=function ()
{
	var oDiv=document.getElementById('left');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aBtn=oUl.getElementsByTagName('li');
	var aTxt=document.getElementById('right')
	var aDiv=aTxt.getElementsByTagName('div')
	
	var i=0;
	
	for(i=0;i<aBtn.length;i++)
	{
		aBtn[i].index=i;
		
		aBtn[i].onmouseover=function()
		{
			aBtn[this.index].style.width="100%";
		}
		aBtn[i].onmouseout=function()
		{		
			for(i=0;i<aBtn.length;i++)
			{
				if (aBtn[i].className!='active')
					aBtn[i].style.width="70%"
				else
					aBtn[i].style.width="100%"
			}
			
		}
		
		
		aBtn[i].onclick=function ()
		{
			for(i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			for(i=0;i<aDiv.length;i++)
			{
				aDiv[i].style.display="none";
			}
			this.className='active';
			aDiv[this.index].style.display="block";
		};
	}
	
	/*时钟*/
	
	function toDou(n)
		{
			if(n<10)
			{
				return '0'+n;
			}
			else
			{
				return ''+n;
			}
		};
	
	var oDiv=document.getElementById('clock');
	var aImg=oDiv.getElementsByTagName('img')
				
				function tick()
				{
				
					var oDate=new Date();
					var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
					
					
					for(var i=0;i<aImg.length;i++)
					{
							aImg[i].src='img/'+str.charAt(i)+'.png';
					}
				}
				setInterval(tick, 1000);
				tick();	
				
	rili();
};



		
				
			
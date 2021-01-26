<script>
    function setCookie(name, value, day){
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+day);

        document.cookie=name+'='+value+';expires='+oDate;
    }

    function getCookie(name){
        var arr=document.cookie.split('; ');

        for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split('=');

            if(arr2[0]==name){
                return arr2[1];
            }
        }
        return '';
    }

    function removeCookie(name){
        setCookie(name, 1, -1);
    }

    /*setCookie('Name', 'aaa', 14);
    setCookie('Value', '123', 7);
    removeCookie('Name');
    alert(document.cookie);*/
    /*window.onload=function(){
        var oForm=document.getElementByClass('col');
        var oUser=document.getElementsByName('username');

        oForm.onsubmit=function(){
            setCookie('username', oUser.value, 14);
        }
    }*/

</script>
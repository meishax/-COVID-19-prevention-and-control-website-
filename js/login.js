
function check()
{
    var name = $("#accountName").val();
    var password = $("#password").val();
    if(!name || name == ""){
        alert("请输入用户名");
        //$("accountName").focus();
        return false;
        }
    if(!password || password == ""){
        alert("请输入密码");
        //$("password").focus();
        return false;
		}
	else
	{
		$.ajaxSetup({cache:false});
		var urlstr="";
		$.ajax({
			async: false,
			url:urlstr,
			type:"POST",
			data:{
				"adminId":name,"adminPwd":password
			},
			dataType:"JSON",
			success:function(msg)
			{
				if(msg.code==-1)
				{
					alert(msg.message);
				}
				
				if(msg.code==0)
				{
					setTimeout(function () {//做延时以便显示登录状态值
						alert(msg.message);
						window.location.href =""+"?"+"adminId="+msg.admin.adminId;//指向登录的页面地址
					},10)
				}
				
			}
			
		})
	}
}

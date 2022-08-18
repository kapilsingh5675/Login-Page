function App()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="kapil" && password=="kapil")
{

    alert("Login succesfully");
    return true;
}
else
{
    alert("login failed");
    return false;
}
}
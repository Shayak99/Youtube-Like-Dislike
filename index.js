let count =0;
function liking()
{
    count++;
    document.getElementById("counter").innerText= count;
}
function disliking()
{
    if(count>0){
    count--;
    document.getElementById("counter").innerText=count;
    }
    
}

dogImage=document.getElementById('dogImage')
btn=document.getElementById('btn')

function fun(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(json=>{
    dogImage.innerHTML=`<img src='${json.message}' height=100px width=300px/>`
})
}
function refresh()
{
    fun()
}



$(function(){
    $.ajax({
        url:'/h5/mall/fetchShopById',
        type:'get',
        data:{
            id:id,
            intro:intro,
            license:license,
            name:name,
            textContent:textContent
        }
    })
})
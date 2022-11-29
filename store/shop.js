
  $(document).ready(function(){

    function genderUpdate(){
        $("#product_box").html("");
    
        var n = $("#gender-select").val();
        console.log(n);
        console.log("we tried");
    
        axios.get(getBaseUrl('Products/category'), {
            params: {
                category: n
              }
        })
            .then(function (response) {
                console.log("hi");
    
                console.log(response.data[1].Price);
                for (a = 0; a < response.data.length; a++){
                    var i = response.data[a];
    
                    console.log(i.Image);
    
                    $("#product_box").append(`
                    <div class="product" onclick="window.location.href='item.html?id=${i.ProductID}';">
                        <img src="img/${i.Image}.jpg" alt="${i.Title}">
                        <div class="description" onclick="window.location.href='item.html?id=${i.ProductID}';">
                            <h5>${i.Title}</h5>
                            <h4>$${i.Price}</h4>
                        </div>
                    </div>    
                    `);
                }
        });
    
    }
    genderUpdate();
    
    $("#gender-select").on("change", genderUpdate);
    
});


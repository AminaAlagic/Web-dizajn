const BASE_URL ="https://ptf-web-dizajn-2022.azurewebsites.net/"

fetch (`${BASE_URL}/api/Food`)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        console.log(data)
    })

    const renderFoods = (foods) => {
        const foodsRow = document.getElementById('foods-row');

        let resultFoodsHtml = '';

        foods.forEach(food => {
            resultFoodsHtml += ` 
        <div class="card mx - my-2" style="width: 18rem;">
            <img src="${food.imageUrl}https://bascarsija.ba/media/com_mtree/images/listings/m/676.jpg" class="card img top" alt="">
            <div class="card-body">
                <h5 class="card title">${food.name}</h5>
                <p class="card-text"> ${food.price}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
        </div>
            `;
        })
    }
console.log("connected");

const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories ");

    const data = await response.json();

    const btnContainer = document.getElementById("btn-container");

    //forEach start

    data.data.slice(0, 4).forEach((catergory) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <button onclick="handleLoadNews('${catergory.category_id}')" class="btn btn-secondary">${catergory.category}</button>
            `;
        btnContainer.appendChild(div);
    });



};


const handleLoadNews =async (categoryId) => {
    //console.log(categoryId);
    const response = await fetch(
        ` https://openapi.programming-hero.com/api/videos/category/${categoryId} `
     );

    const data = await response.json();

    const cardContainer = document.getElementById("card-container");


    data.data?.forEach((news) => {
        console.log(news);
        const div= document.createElement('div');

        div.innerHTML = `

        <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                <div ">
                <img class="w-full h-48" src=${news?.thumbnail} />
                </div>
                
                </figure>
                <div class="card-body">
                        <div class="avatar w-10">
                            <div class="w-10 rounded-full  ring-offset-base-100 ring-offset-2">
                                <img src=${news?.authors[0].profile_picture} />
                            </div>
                        </div>
                    <div class="">
                        <h2 class="card-title">
                        ${news.title}
                        </h2>
                        <p>${news?.authors[0].profile_name}</p>
                    </div>

                    <p>91k views</p>
                    
                </div>
            </div>
        `;

        cardContainer.appendChild(div);
    });

    

    
  

};

handleCategory();

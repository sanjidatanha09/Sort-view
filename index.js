console.log("connected");

const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories ");

    const data = await response.json();

    const btnContainer = document.getElementById("btn-container");
    //console.log(data);

    data.data.slice(0, 4).forEach((catergory) => {

        const div = document.createElement("div");
        
        

        div.innerHTML = `
            
            <button onclick="handleLoadNews('${catergory.category_id}') " class="btn btn-secondary text-sm md:text-xl lg:text-xl">${catergory.category}</button>
            `;
        btnContainer.appendChild(div);
    });

};


let all

const handleLoadNews = async (categoryId = "1000") => {
    all = categoryId
    //console.log(categoryId);
    
    const response = await fetch(
        ` https://openapi.programming-hero.com/api/videos/category/${categoryId} `
    );

    const data = await response.json();
    const mainData = data.data;

    showData(mainData);





};
const showData = (mainData) =>{


    if (mainData.length === 0) {
        toggleLoadingSpinner(true);

    }
    else {
        toggleLoadingSpinner(false);
    }

    const cardContainer = document.getElementById("card-container");
    //console.log(cardContainer)

    cardContainer.innerHTML = " ";



    mainData?.forEach((news) => {
        //console.log(news);

        const seconds = news?.others?.posted_date ? news?.others?.posted_date : " ";
        const hour = Math.floor(seconds / 3600);
        const remainingminutes = seconds % 60;


        //console.log(`${hour} hour ${remainingminutes} minutes`);
        const time = document.getElementById('seconds');

        const div = document.createElement('div');

        div.innerHTML = `

        <div class="card card-compact bg-base-100 shadow-xl">
                <figure>
                <div class="retalive ">
                <img class="retalive w-full lg:h-48" src=${news?.thumbnail} />

                <p id="seconds" class="bg-gray-400 p-1 w-2/5 lg:w-2/4 text-center absolute top-40  md:top-64 lg:top-36 right-3 rounded-lg">
                ${hour} hour ${remainingminutes} min ago </p>
                </div>
                
                </figure>
                <div class="card-body mt-6">

                    <div class="flex ">
                        <div class="avatar ">
                            <div class=" lg:mr-3  lg:mt-1 w-16 h-16 md:w-20 lg:w-8 md:h-20 lg:h-8 rounded-full  ring-offset-base-100 ring-offset-2">
                                <img class="w-full" src=${news?.authors[0].profile_picture} />
                            </div>
                        </div>
                    
                        <div class="pl-5 md:pl-10 lg:pl-0">
                            <h2 class="card-title md:text-3xl lg:text-xl pb-2 lg:pb-0 ">
                            ${news.title}
                            </h2>
                            <div class="">
                                 <p class="flex gap-1">${news?.authors[0].profile_name}<img src="${news?.authors[0].verified ? "images/check.jpg" : " "}" />
                                 </p>
     

                            </div>
                        
                            <h3 class="md:text-3xl lg:text-sm font-bold mb-5"> ${news?.others?.views}</h3>
                        </div>

                    </div>
                    

                    
                </div>
            </div>
        `;

        cardContainer.appendChild(div);
    });
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('drawing');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

const sortingData = async () => {
    const response = await fetch(
        ` https://openapi.programming-hero.com/api/videos/category/${all} `
    );

    const data = await response.json();
    const mainData = data.data;

    const sortData = mainData.sort((a, b) => {
        let first = a.others.views.slice(0, -1)
        let second = b.others?.views.slice(0, -1)
        console.log(first, second)
        return second - first

    });

    showData(mainData);


};

handleCategory();
handleLoadNews("1000")




//new window open

function goHome() {
    window.open("http://127.0.0.1:5500/index2.html");


}
document.getElementById('gohome-button').addEventListener('click', goHome);
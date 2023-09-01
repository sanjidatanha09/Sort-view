console.log("connected");

const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories ");

    const data = await response.json();

    const btnContainer = document.getElementById("btn-container");
    //console.log(data);

    //forEach start

    data.data.slice(0, 4).forEach((catergory) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <button onclick="handleLoadNews('${catergory.category_id}')" class="btn btn-secondary text-sm md:text-xl lg:text-xl">${catergory.category}</button>
            `;
        btnContainer.appendChild(div);
    });






};


const handleLoadNews = async (categoryId) => {
    //console.log(categoryId);
    const response = await fetch(
        ` https://openapi.programming-hero.com/api/videos/category/${categoryId} `
    );

    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    //console.log(cardContainer)

    cardContainer.innerHTML = " ";
    


    data.data?.forEach((news) => {
        //console.log(news);

        const seconds = news?.others?.posted_date
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
                ${ hour } hour ${ remainingminutes } min ago </p>
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






};

handleCategory();
handleLoadNews("1001")


// const sortDate = async () => {
//     const response = await fetch('https://openapi.programming-hero.com/api/ai/tools')
//     const data = await response.json()
//     const finalData = data.data.tools
//     const sortThedata = finalData.sort((a, b) => {
//         return new Date(a.published_in) - new Date(b.published_in)
//     })
//     console.log(sortThedata)
//     viewData(sortThedata, true)
// }

// const ShowDetails = async (id) => {

//     const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
//     const data = await response.json()
//     console.log(data)

// }
// const isShowAll = () => {
//     loaddata(true);
// }

// const isShowLess = () => {
//     loaddata(false)
// }





// loaddata()



//new window open

function goHome() {
    window.open("http://127.0.0.1:5500/index2.html");


}
document.getElementById('gohome-button').addEventListener('click', goHome);
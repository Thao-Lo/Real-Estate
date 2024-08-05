$(window).ready(function () {

    const propertyNewsData = [{
        "id": "1",
        "image": "https://picsum.photos/seed/9BJu1O/640/480",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "website": "https://early-validity.info",
        "readTime": 2
    },
    {
        "id": "2",
        "image": "https://loremflickr.com/640/480?lock=6665796413554688",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "website": "https://odd-litmus.biz/",
        "readTime": 3
    },
    {
        "id": "3",
        "image": "https://loremflickr.com/640/480?lock=2603606526132224",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "website": "https://scary-reclamation.info/",
        "readTime": 3
    },
    {
        "id": "4",
        "image": "https://loremflickr.com/640/480?lock=3693905342103552",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "website": "https://acidic-refuge.org",
        "readTime": 3
    },
    {
        "id": "5",
        "image": "https://picsum.photos/seed/MxNOlubfzE/640/480",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "website": "https://creamy-nicety.com",
        "readTime": 4
    },
    {
        "id": "6",
        "image": "https://picsum.photos/seed/WxLy1z0/640/480",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "website": "https://rotten-limestone.net/",
        "readTime": 2
    }]


    let propertyNewsCard = $('.property-new-card');

    function renderPropertyNews(data) {
        data.forEach(
            ({ id, image, description, website, readTime }) => propertyNewsCard.append(`
              <a href="${website}" class="card" targer="_blank">
                        <img src="${image}" class="card-img-top rounded-0" alt="${description}">
                        <div class="card-body p-0 mt-075">
                            <p class="card-text mb-0 fw-medium">${description}</p>
                            <span class="fs-075">${readTime} mins read</span>
                        </div>
                    </a>` ))
    }
    renderPropertyNews(propertyNewsData);

    const propertyOptions = [{
        id: 1,
        title: "Real estate",
        description: "Real estate in Australia",
        link: [{
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate WA",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }
        ]
    },
    {
        id: 2,
        title: "New homes",
        description: "Build new homes in Australia",
        link: [{
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }
        ]
    },
    {
        id: 3,
        title: "Popular areas",
        description: "Browse popular areas in Australia",
        link: [{
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }
        ]
    },
    {
        id: 4,
        title: "Popular searches",
        description: "Browse popular property searches",
        link: [{
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }
        ]
    }]

    let realestateSectionList = $('.real-estate-area-list');
    let realestateSectionListDetails = $('.real-estate-area-details');
    let detailList = $('.detail-list');
    function renderFooterEstateList(data) {
        data.forEach(({ id, title, description, link }) => realestateSectionList.append(
            `  <li class="nav-item" role="presentation">
                    <button class="nav-link " id="${id}-tab" data-bs-toggle="tab"
                        data-bs-target="#${id}-tab-pane" type="button" role="tab"
                        aria-controls="${id}-tab-pane" aria-selected="true">${title}</button>
                </li>`
        ))
    }
    function renderFooterEstateListDetails(data) {
        data.forEach(({ id, description, link }) => {
            let detailList = link.map(({ name, url }) =>
                `<li class="col-12 col-sm-6 col-md-4"><a href="${url}" class="">${name}</a></li>`).join('');
            realestateSectionListDetails.append(
                `   <div class="tab-pane fade" id="${id}-tab-pane" role="tabpanel"
                        aria-labelledby="${id}-tab" tabindex="0">
                        <div class="row my-3">
                            <div class="col-12 tab-introduction"> ${description}</div>
                        </div> 
                        <div class="row tab-list">
                            <div class="col-12">
                                <ul class="d-flex flex-wrap detail-list">
                                    ${detailList}   
                                </ul>
                            </div>
                        </div>
    
                    </div>         
                    `
            )
        }
        )
    }
    renderFooterEstateList(propertyOptions),
        renderFooterEstateListDetails(propertyOptions);

})
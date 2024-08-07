$(window).ready(function () {

    const searchBoxData = [
        //     {
        //     id: 1,
        //     type: "buy",
        //     placeholder: "Search suburb, postcode or state",
        //     filterBtn: true,
        //     searchBtn: true
        // },
        {
            id: 2,
            type: "rent",
            placeholder: "Search suburb, postcode or state",
            filterBtn: true,
            searchBtn: true
        },
        {
            id: 3,
            type: "sold",
            placeholder: "Search suburb, postcode or state",
            filterBtn: true,
            searchBtn: true
        },
        {
            id: 4,
            type: "address",
            placeholder: "Search by address",
            filterBtn: false,
            searchBtn: false
        },
        {
            id: 5,
            type: "agents",
            placeholder: "Agents",
            filterBtn: false,
            searchBtn: false
        }
    ]
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
    const localBorkers = [
        {
            "id": "1",
            "img": "https://picsum.photos/seed/JCkYUja/640/480",
            "name": {
                "firstName": "Reggie",
                "lastName": "Bergnaum"
            },
            "title": "Corporate Applications Agent",
            "location": "Torpton",
            "website": "https://adolescent-spokeswoman.biz/"
        },
        {
            "id": "2",
            "img": "https://loremflickr.com/640/480?lock=3662912071663616",
            "name": {
                "firstName": "Elijah",
                "lastName": "Frami"
            },
            "title": "Principal Research Manager",
            "location": "West Devan",
            "website": "https://athletic-stool.net"
        },
        {
            "id": "3",
            "img": "https://loremflickr.com/640/480?lock=5805819861925888",
            "name": {
                "firstName": "Fernando",
                "lastName": "Satterfield"
            },
            "title": "District Accounts Architect",
            "location": "Oklahoma City",
            "website": "https://crisp-hour.name/"
        },
        {
            "id": "4",
            "img": "https://picsum.photos/seed/BXkNM7SuE/640/480",
            "name": {
                "firstName": "Fannie",
                "lastName": "Robel"
            },
            "title": "Legacy Tactics Administrator",
            "location": "Gavinmouth",
            "website": "https://mean-burning.name/"
        }
    ]
    const propertyOptions = [{
        id: 1,
        title: "Real estate",
        description: "Real estate in Australia",
        link: [{
            name: "Real estate NSW",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate VIC",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate QLD",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate WA",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate SA",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate TAS",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate ACT",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate NT",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Sydney",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Melbourne",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Brisbane",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Perth",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Adelaide",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Hobart",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Canberra",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "Real estate Darwin",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }

        ]
    },
    {
        id: 2,
        title: "New homes",
        description: "Build new homes in Australia",
        link: [{
            name: "Home builders",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "House designs",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "New apartments",
            url: "https://www.realestate.com.au/buy/in-nsw/list-1"
        }, {
            name: "House and land",
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

    let searchHeaderList = $('.search-header-list');
    let searchHeaderChild = searchHeaderList.children();
    let firstSearchHeader = searchHeaderChild[0];

    let searchContent = $('.search-content');
    let firstSearchContent = searchContent.children()[0];

    let propertyNewsCard = $('.property-new-card');

    let localMortageBorker = $(".local-mortage-broker")
    let borkerCard = localMortageBorker.children();
    let firstBorkerCard = borkerCard[0];
    //ES6
    const borkerCardArray = Array.from(borkerCard);
    console.log(borkerCardArray);

    let realestateSectionList = $('.real-estate-area-list');
    let realestateSectionListDetails = $('.real-estate-area-details');
    let detailList = $('.detail-list');

    function renderSearchSection(data) {

        let newSearchList = data.map(({ id, type }) => ` <li class="nav-item" role="presentation">
                           <button class="nav-link text-capitalize" id="${id}-tab" data-bs-toggle="tab" data-bs-target="#${id}"
                               type="button" role="tab" aria-controls="${id}" aria-selected="false">${type}</button>
                       </li>`).join('');
        let filterBtnTemplate = `  <button
                       class="btn btn-outline-secondary fw-bold rounded-pill flex-1 d-none d-md-flex align-items-center align-self-start gap-1 py-11 px-23"
                       type="button" data-bs-toggle="modal" data-bs-target="#filter">
                       <svg class="CK__Icon--medium" viewBox="0 0 16 16" fill="none" width="1rem"
                           height="1rem" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M1.5 6h2.563a2 2 0 0 0 3.874 0H14.5a.5.5 0 0 0 0-1H7.937a2 2 0 0 0-3.874 0H1.5a.5.5 0 0 0 0 1ZM6 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM1.5 10a.5.5 0 0 0 0 1h6.563a2 2 0 0 0 3.874 0H14.5a.5.5 0 0 0 0-1h-2.563a2 2 0 0 0-3.874 0H1.5Zm9.5.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                               fill="currentColor"></path>
                       </svg>
                       <span>Filter</span>
                   </button>`;
        let searchBtnTemplate = ` <button
                       class="btn btn-primary d-none d-md-block rounded-pill align-self-start flex-1 py-11 px-23"
                       type="submit">Search</button>`;

        let newSearchContent = data.map(({ id, type, placeholder, filterBtn, searchBtn }) =>
            `<div class="tab-pane fade " id="${id}" role="tabpanel" aria-labelledby="${id}-tab">
        <!-- Search container and button Filter + Search -->
        <div class="search-section d-flex align-items-center gap-2 px-3 py-3" role="search">
            <div class="search-box">
                <div>
                    <svg class="CK__Icon--medium flex-1 align-self-start" viewBox="0 0 16 16"
                        fill="none" width="2rem" height="1rem" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7 1a6 6 0 1 0 3.874 10.582l3.272 3.272a.5.5 0 0 0 .708-.708l-3.272-3.272A6 6 0 0 0 7 1ZM2 7a5 5 0 1 1 10 0A5 5 0 0 1 2 7Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <!-- autocomplete -->
                <div id="${type}-search">
                </div>
            </div>
           ${filterBtn ? filterBtnTemplate : ''}
           ${searchBtn ? searchBtnTemplate : ''}
        </div>
        <!-- Modal -->
       
        <!-- End modal -->
        <div class="recent-search">
            <h5>
                Suggested location
            </h5>
            <div>
                <ul>
                    <li>Recent Search</li>
                    <li>Recent Search</li>
                    <li>Recent Search</li>
                </ul>
            </div>
        </div>
    </div>`).join('');

        $(newSearchList).insertAfter(firstSearchHeader);
        searchContent.append(newSearchContent);
    };

    renderSearchSection(searchBoxData);

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

    function renderBrokerCard(data) {
        data.map(({ img, name, title, location, website }) => {
            let newBorkerCard = `
                        <div class="card border border-light-subtle shadow-sm">
                        <div class="card-header d-flex align-items-center gap-1">
                            <img src="/assets/image/mortage-logo.JPG" class="" alt="Mortage-logo">
                            <p class="mb-0">Mortage Choice</p>
                        </div>
                        <div class="card-body">
                            <img src="${img}" class="broker-avatar mb-1" alt="${img}-avatar">
                            <p class="fw-semibold mb-1">${name.firstName} ${name.lastName}</p>
                            <p class="mb-075">${title}</p>
                            <p class="card-description ">Based in ${location}.</p>

                        </div>
                        <div class="card-footer">
                            <a href="${website}" class="fs-0875 mb-2">See more details</a>
                            <button type="button" class="btn btn-outline-dark w-100 fs-0875">Find a broker</button>
                        </div>
                    </div>
                    `;
            $(newBorkerCard).insertAfter(firstBorkerCard)
        })
    }

    function renderFooterEstateList(data) {
        let tabHeader = '';
        let tabDetail = '';
        data.forEach(({ id, title, description, link }) => {
            tabHeader +=
                `  <li class="nav-item" role="presentation">
                        <button class="nav-link footer-nav-btn ${id == 1 ? "active show" : ""}" id="${id}-tab" data-bs-toggle="tab"
                            data-bs-target="#${id}-tab-pane" type="button" role="tab"
                            aria-controls="${id}-tab-pane" aria-selected="true">${title}</button>
                    </li>`
                ;

            let detailList = link.map(({ name, url }) =>
                `<li class="col-12 col-sm-6 col-md-4"><a href="${url}" class="">${name}</a></li>`).join('');

            tabDetail += `<div class="tab-pane fade" id="${id}-tab-pane" role="tabpanel"
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

        })
        realestateSectionList.html(tabHeader);
        realestateSectionListDetails.html(tabDetail);

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
    renderPropertyNews(propertyNewsData);
    renderBrokerCard(localBorkers);
    renderFooterEstateList(propertyOptions);

})
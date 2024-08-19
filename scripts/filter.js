$(window).ready(function () {
    const containerData = [
        {
            sectionName: "property type",
            sectionClass: "property-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "price",
            sectionClass: "price-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "sold date",
            sectionClass: "sold-date-type",
            description: null,
            applicableTo: ["sold"]
        },
        {
            sectionName: "bedrooms",
            sectionClass: "bedrooms-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "bathrooms",
            sectionClass: "bathrooms-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "car spaces",
            sectionClass: "carspaces-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "land size",
            sectionClass: "landsize-type",
            description: null,
            applicableTo: ["buy", "sold"]
        },
        {
            sectionName: "available date",
            sectionClass: "available-date-type",
            description: null,
            applicableTo: ["rent"]
        },
        {
            sectionName: "property requirements",
            sectionClass: "property-requirements-type",
            description: null,
            applicableTo: ["rent"]
        },
        {
            sectionName: "affordable housing",
            sectionClass: "affordable-housing-type",
            description: "This filter finds properties that are offered under rental affordability schemes.",
            applicableTo: ["rent"]
        },
        {
            sectionName: "new or established property",
            sectionClass: "established-property-type",
            description: null,
            applicableTo: ["buy"]
        },
        {
            sectionName: "outdoor features",
            sectionClass: "outdoor-features-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "indoor features",
            sectionClass: "indoor-features-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "Climate control & energy",
            sectionClass: "climate-control-features-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "accessibility features",
            sectionClass: "accessibility-features-type",
            description: "These filters find properties with accessibility features in their descriptions. We're working to improve their accuracy.",
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "keywords",
            sectionClass: "keywords-type",
            description: null,
            applicableTo: ["buy", "rent", "sold"]
        },
        {
            sectionName: "Sale method",
            sectionClass: "sale-method-type",
            description: null,
            applicableTo: ["buy"]
        },
        {
            sectionName: "exclude-checkbox",
            sectionClass: "exclude-checkbox-type",
            description: null,
            applicableTo: ["buy", "rent"]
        }

    ]

    const propertyTypeData = [
        {
            id: "1",
            type: "all types",
            value: "all",
            availableTo: ['buy', 'rent', 'sold'],
        }, {
            id: "2",
            type: "house",
            value: "house",
            availableTo: ['buy', 'rent', 'sold'],
        },
        {
            id: "3",
            type: "townhouse",
            value: "townhouse",
            availableTo: ['buy', 'rent', 'sold'],
        },
        {
            id: "4",
            type: "apartment & unit",
            value: "apartmentUnit",
            availableTo: ['buy', 'rent', 'sold'],
        },
        {
            id: "5",
            type: "Villa",
            value: "villa",
            availableTo: ['buy', 'rent', 'sold'],
        },
        {
            id: "6",
            type: "retirement living",
            value: "retire",
            availableTo: ['buy', 'sold'],
        },
        {
            id: "7",
            type: "land",
            value: "land",
            availableTo: ['buy', 'sold'],
        },
        {
            id: "8",
            type: "aceage",
            value: "aceage",
            availableTo: ['buy', 'sold'],
        }, {
            id: "9",
            type: "rural",
            value: "rural",
            availableTo: ['buy', 'sold'],
        },
        {
            id: "10",
            type: "block of units",
            value: "blockUnit",
            availableTo: ['buy', 'sold'],
        }
    ]

    const rentdPriceData = [{
        name: "Min",
        price: [
            50, 75, 100, 125, 150, 175, 200, 225,
            250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500,
            550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100,
            1200, 1300, 14000, 1500

        ]
    }, {
        name: "Max",
        price: [50, 75, 100, 125, 150, 175, 200, 225,
            250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500,
            550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1100,
            1200, 1300, 14000, 1500]
    }]
    const buyOrSoldPriceData = [{
        name: "Min",
        price: [
            50000, 75000, 100000, 125000, 150000, 175000, 200000, 225000,
            250000, 275000, 300000, 325000, 350000, 375000, 400000, 425000, 450000, 475000, 500000,
            550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1100000,
            1200000, 1300000, 14000000, 1500000

        ]
    }, {
        name: "Max",
        price: [50000, 75000, 100000, 125000, 150000, 175000, 200000, 225000,
            250000, 275000, 300000, 325000, 350000, 375000, 400000, 425000, 450000, 475000, 500000,
            550000, 600000, 650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1100000,
            1200000, 1300000, 14000000, 1500000]
    }]
    const landSizeData = [{
        name: "Min",
        size: [200, 300, 400, 500, 600, 700, 800, 900, 10000, 1200, 1500, 1750, 2000, 3000, 4000, 5000]
    }, {
        name: "Max",
        size: [200, 300, 400, 500, 600, 700, 800, 900, 10000, 1200, 1500, 1750, 2000, 3000, 4000, 5000]
    }
    ]

    const bedroomData = [{
        name: "Min",
        type: [1, 2, 3, 4, 5
        ]
    }, {
        name: "Max",
        type: [1, 2, 3, 4, 5
        ]
    }

    ]
    const bathroomCarSpace = [{
        type: 'bathroom',
        name: 'bath room',
        space: [1, 2, 3, 4, 5]
    },
    {
        type: 'carspace',
        name: 'car space',
        space: [1, 2, 3, 4, 5]
    }]
    const availableDateData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const soldDateData = [30, 90, 180, 365];

    const accessibilityFeatureData = [
        {
            type: "single storey",
            value: "singleStorey",
        },
        {
            type: "wide doorways",
            value: "wideDoorways",
        },
        {
            type: "Step free entry",
            value: "stepFreeEntry",
        },
        {
            type: "elevator",
            value: "elevator",
        },
        {
            type: "roll in shower",
            value: "rollInShower",
        },
        {
            type: "accessible parking",
            value: "accessibleParking",
        },
        {
            type: "bathroom grab rails",
            value: "BathroomGrabRails",
        }

    ]
    const outdoorFeaturesData = [
        {
            type: "swimming pool",
            value: "swimmingPool",
        },
        {
            type: "balcony",
            value: "balcony",
        },
        {
            type: "garage",
            value: "garage",
        },
        {
            type: "outdoor area",
            value: "outdoorArea",
        },
        {
            type: "undercover parking",
            value: "undercoverParking",
        },
        {
            type: "shed",
            value: "shed",
        },
        {
            type: "fully fenced",
            value: "fullyFenced",
        },
        {
            type: "outdoor spa",
            value: "outdoorSpa",
        },
        {
            type: "tennis court",
            value: "tennisCourt",
        }
    ]
    const indoorFeaturesData = [
        {
            type: "ensuite",
            value: "ensuite",
        },
        {
            type: "study",
            value: "study",
        },
        {
            type: "dishwasher",
            value: "dishwasher",
        },
        {
            type: "built in robes",
            value: "builtInRobes",
        },
        {
            type: "alarm system",
            value: "alarmSystem",
        },
        {
            type: "broadband",
            value: "broadband",
        },
        {
            type: "floorboards",
            value: "floorboards",
        },
        {
            type: "gym",
            value: "gym",
        },
        {
            type: "rumpus room",
            value: "rumpusRoom",
        },
        {
            type: "workshop",
            value: "workshop",
        }
    ]
    const climateControlFeaturesData = [
        {
            type: "air conditioning",
            value: "airConditioning",
        },
        {
            type: "solar panels",
            value: "solarPanels",
        },
        {
            type: "heating",
            value: "heating",
        },
        {
            type: "fireplace",
            value: "fireplace",
        },
        {
            type: "high energy efficiency",
            value: "highEnergyEfficiency",
        },
        {
            type: "Water tank",
            value: "waterTank",
        },
        {
            type: "solar hot water",
            value: "solarHotWater",
        },
    ]
    const newPropertyAndSaleMethodData = [
        {
            type: 'established-property',
            name: 'established property',
            space: ['All types', 'New', 'Established']
        },
        {
            type: 'sale-method',
            name: 'sale method',
            space: ['All types', 'Private treaty sale', 'Auction']
        }
    ]

    let buyContainer = $("#pills-filter-buy");
    let rentContainer = $("#pills-filter-rent");
    let soldContainer = $("#pills-filter-sold");
    let buy = 'buy';
    let rent = 'rent';
    let sold = 'sold';

    //generate type container
    function generateTypeContainer(tabContainer, data, tabName) {
        const htmlContent = data
            .filter(({ applicableTo }) => applicableTo.includes(tabName))
            .map(({ sectionName, sectionClass, description }) => `
                <div class="${sectionClass}">               
                   <div class="fw-semibold fs-5 mb-2 lh-base text-capitalize">${sectionName}</div>
                    <span class="small ${description == null ? "d-none" : ""}">${description}</span>
                   <div class="row ps-3 ${sectionClass}-container">
                   </div>
               </div>
               <hr>
                `)
            .join('');

        tabContainer.append(htmlContent);
    }

    //generate each component
    function generatePropertyType(tabContainer, data, tabName) {
        data.filter(({ availableTo }) => availableTo.includes(tabName))
            .forEach(({ id, type, value }) => {
                let isAllTypes = type === "all types";
                let htmlTemplate = `
              <div class="form-check py-2 lh-base  col-6">
                    <input class="form-check-input cursor-pointer" type="checkbox" value="${value}" id="${value}" 
                    ${isAllTypes ? 'data-all-type="true"' : ''}>
                    <label class="form-check-label cursor-pointer text-capitalize" for="${value}"> ${type}
                    </label>
                </div>
            `
                tabContainer.find('.property-type-container').append(htmlTemplate);
            })
        let inputCheckbox = $('.property-type-container').find('input[type="checkbox"]');
        inputCheckbox.on('change', (event) => {
            let isAllTypesCheck = $(event.currentTarget).data('all-type');

            if (isAllTypesCheck) {
                if ($(this).is(':checked')) {
                    inputCheckbox.not(this).prop('checked', false);
                }
            } else {
                if ($(this).is(':checked')) {
                    $('.property-type-container').find('input[type="checkbox"][data-all-type="true"]').prop('checked', false)
                }
            }
        })

    }

    function generatePriceType(tabContainer, data) {
        let checkbocShowPropertyWithPrice = '';
        if (tabContainer.is(buyContainer)) {
            checkbocShowPropertyWithPrice = `<div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value="" id="price-check-box">
            <label class="form-check-label" for="price-check-box">
                Only show properties with a price
            </label>
        </div>`;
        } else if (tabContainer.is(soldContainer)) {
            checkbocShowPropertyWithPrice = `<div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value="" id="price-check-box">
            <label class="form-check-label" for="price-check-box">
                Only show properties with a sold price
            </label>
        </div>`;
        }
        data.forEach(({ name, price }) => {
            let priceOption = price.map(price => `<option class="py-12" value="${price}">$${price.toLocaleString()}</option>`).join('');

            let containerTemplate = `
            <div class="col-6 ps-0">
               <div class="mb-1 fw-medium">${name}</div>
               <div class="input-group mb-3">
                   <select class="form-select py-12 groupSelect${name}" data-category="price">
                        <option class="mb-3" value="any" selected>Any</option>
                        ${priceOption}             
                                                  
                   </select>
               </div>
           </div>         
           `
            tabContainer.find('.price-type-container').append(containerTemplate);
        })
        tabContainer.find('.price-type-container').append(checkbocShowPropertyWithPrice);
    }
    function generateBedroomType(tabContainer, data) {
        data.forEach(({ name, type }) => {
            let bedroomOptions = type.map(type => `<option value="${type}">${type}</option>`).join('');
            let template = `
              <div class="col-6 ps-0">
                <div class="mb-1 fw-medium">${name}</div>
                <div class="input-group mb-3">
                    <select class="form-select py-12 groupSelect${name}" data-category="bedroom">
                        <option selected>Any</option>
                        <option value="0">Studio</option>                      
                       ${bedroomOptions}
                    </select>
                 </div>
            </div>
            `
            tabContainer.find('.bedrooms-type-container').append(template);
        })
    }
    function generateLandsizeType(tabContainer, data) {
        data.forEach(({ name, size }) => {
            let options = size.map(size => `<option value="${size}">${size} m&sup2</option>`).join('');
            let template = `
                  <div class="col-6 ps-0">
                    <div class="mb-1 fw-medium">${name}</div>
                    <div class="input-group mb-3">
                        <select class="form-select py-12 groupSelect${name}" data-category="landsize">
                            <option selected>Any</option>                                                
                           ${options}
                        </select>
                     </div>
                </div>
                `
            tabContainer.find('.landsize-type-container').append(template);
        })
    }
    function generateBathroomAndCarSpace(tabContainer, data) {
        data.forEach(({ type, name, space }) => {
            let bathroomOptions = space.map(space => `<option value="${space}">${space}+</option>`).join('');
            let htmlBathroomTemplate = `
                <div class="col-6 ps-0">
                    <div class="input-group mb-3">
                        <select class="form-select py-12 groupSelect${type}">
                             <option selected>Any</option>  
                             ${bathroomOptions}
                         </select>
                     </div>
                `
            if (type === 'bathroom') {
                tabContainer.find('.bathrooms-type-container').append(htmlBathroomTemplate)
            }
            if (type === 'carspace') {
                {
                    tabContainer.find('.carspaces-type-container').append(htmlBathroomTemplate)
                }


            }
        })
    }
    function generateAvailableDate(tabContainer, data) {

        // https://www.geeksforgeeks.org/javascript-date-tolocaledatestring-method/
        const today = new Date();

        const dateOptions = data.map(day => {
            //every date object will clone with exact same time (today)
            let date = new Date(today);

            //get current date and add corresponding day 1,2,3,4..
            date.setDate(today.getDate() + day);

            //namming convention 
            let options = {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric"
            }
            //date.toLocaleDateString([locale], [options])
            let formatDate = date.toLocaleDateString('en-GB', options);
            let displayTextDay = day === 0 ? 'Avail.now ' : `Before ${formatDate}`;
            return `<option value="${day}">${displayTextDay}</option>`

        }).join('');
        const htmlTemplate = `
       <div class="col-6 ps-0">
         <div class="input-group mb-3">
             <select class="form-select py-12" id="bathGroupSelect02">
                <option selected>Any</option>
                ${dateOptions}                                               
            </select>
        </div>
      `
        tabContainer.find(`.available-date-type-container`).append(htmlTemplate);
    };
    function generateSoldDate(tabContainer, data) {
        const dateOptions = data.map(day => {
            let displayTextDay;
            switch (day) {
                case 30:
                    displayTextDay = 'month'
                    break;
                case 90:
                    displayTextDay = '3 months'
                    break;
                case 180:
                    displayTextDay = '6 months'
                    break;
                case 365:
                    displayTextDay = '12 months'
            }
            return `<option value="${day}">Last ${displayTextDay}</option>`

        }).join('');
        const htmlTemplate = `
       <div class="col-6">
         <div class="input-group mb-3">
             <select class="form-select py-12" id="bathGroupSelect02">
                <option selected>Any</option>
                ${dateOptions}                                               
            </select>
        </div>
      `
        tabContainer.find(`.sold-date-type-container`).append(htmlTemplate);
    };
    function generatePropertyRequirementType(tabContainer) {
        let htmlTemplate =
            `
        <div class="col-6 form-check py-2 lh-base ">
             <input class="form-check-input cursor-pointer" type="checkbox" value="furnished"
                id="furnished">
            <label class="form-check-label cursor-pointer text-capitalize" for="furnished">
                furnished
             </label>
         </div>
           <div class="col-6 form-check py-2 lh-base ">
             <input class="form-check-input cursor-pointer" type="checkbox" value="pets-considered"
                id="pets-considered">
            <label class="form-check-label cursor-pointer text-capitalize" for="pets-considered">
                pets considered
             </label>
         </div>
             `
        tabContainer.find('.property-requirements-type-container').append(htmlTemplate)
    }
    function generateAffordableHousingType(tabContainer) {
        const htmlTemplate = `
        <div class="form-check mt-3">
         <input class="form-check-input cursor-pointer" type="checkbox" value="affordable-housing" id="affordable-housing-check">
            <label class="form-check-label cursor-pointer" for="affordable-housing-check">
               Only show eligible properties
            </label>
        </div>
        `;
        tabContainer.find('.affordable-housing-type-container').append(htmlTemplate)
    }
    function generateRadioCheckBox(tabContainer, feature, data) {
        data.filter(({ type }) => type === feature)
            .forEach(({ type, space }) => {
                let htmlTemplate = space.map((space, index) => ` 
                <div class="col-3 form-check form-check-inline pe-4 me-2">
                    <input class="form-check-input cursor-pointer" type="radio"
                        name="inlineRadioOptions" id="${type}Radio${index}" value="option${index}">
                    <label class="form-check-label cursor-pointer" for="${type}Radio${index}">${space}</label>
                </div>`).join('');
                tabContainer.find(`.${feature}-type-container`).append(htmlTemplate);
            }
            )

    }
    function generateToggleCheckBoxFeatureType(tabContainer, feature, data) {
        // let showFeatures = data.filter((item, index) => index < 4);
        // let collapseFeatures = data.filter((item, index) => index >= 4);
        const generateFeatures = (data, container) => {
            data.forEach(({ type, value }) => {
                let htmlTemplate =
                    `
               <div class="col-6 form-check py-2 lh-base ">
                     <input class="form-check-input cursor-pointer" type="checkbox" value="${value}"
                         id="${value}">
                     <label class="form-check-label cursor-pointer text-capitalize" for="${value}">
                         ${type}
                    </label>
                 </div>
              `
                tabContainer.find(container).append(htmlTemplate)
            })
        }
        let collapseContainer = `
         <div class="collapse row ps-3" id=collapse-${feature}> <div>       
      `
        let collapseLink = `
       <p class="d-inline-flex gap-1 align-items-center">
             <a class="collapse-link" data-bs-toggle="collapse" href="#collapse-${feature}" 
                     role="button" aria-expanded="false" aria-controls="collapse-${feature}">
                 Show more ${feature} features
             </a>
             <i class="fa-solid fa-chevron-down"></i>
         </p>
      `
        tabContainer.find(`.${feature}-features-type`).append(collapseContainer)
        tabContainer.find(`.${feature}-features-type`).append(collapseLink)
        generateFeatures(data.slice(0, 4), `.${feature}-features-type-container`)
        generateFeatures(data.slice(4), `#collapse-${feature}`);

        let toggleLink = $(`.${feature}-features-type`).find('.collapse-link');
        // handleCollapseToggleLink(toggleLink);
        toggleLink.on('click', function () {
            let isExpanded = $(this).attr('aria-expanded') === "true";
            if (isExpanded) {
                $(this).html(`Show less ${feature} features`);
                $(this).next('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else {
                $(this).html(`Show more ${feature} features`)
                $(this).next('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        })

    }

    function generateSearchKeyword(tabContainer) {
        const htmlTemplate = `
         <div class="col-12 ps-0">
             <input class="form-control form-control py-12 px-3" type="text"
                 placeholder="Air con, pool, garage, solar, ensuite..." aria-label=".form-control-lg example">
             </div>
        </div>
         <span class="small m-1 mb-4">Add specific property features to your search</span>
        `;
        tabContainer.find('.keywords-type-container').append(htmlTemplate)
    }

    function generateExcludeType(tabContainer) {
        const htmlTemplate = `
        <div class="form-check">
         <input class="form-check-input cursor-pointer" type="checkbox" value="" id="contract-check">
            <label class="form-check-label cursor-pointer" for="contract-check">
                Exclude properties under contract/offer
            </label>
        </div>
        `;
        tabContainer.find('.exclude-checkbox-type-container').append(htmlTemplate)
    }
    function handleCollapseToggleLink(toggleLink) {
        toggleLink.on('click', function () {
            let isExpanded = $(this).attr('aria-expanded') === "true";
            if (isExpanded) {
                $(this).html('Show less accessibility features');
                $(this).next('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else {
                $(this).html('Show more accessibility features')
                $(this).next('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        })

    }

    function updateMinMaxDropdown(tabContainer, category) {
        let minPrices = tabContainer.find(`.groupSelectMin[data-category="${category}"]`);
        let maxPrices = tabContainer.find(`.groupSelectMax[data-category="${category}"]`);
        let selectedMinPrice, selectedMaxPrice;

        minPrices.on('change', () => {
            selectedMinPrice = parseFloat(minPrices.val());
            updateMaxPriceOptions();
        });
        maxPrices.on('change', () => {
            selectedMaxPrice = parseFloat(maxPrices.val());
            updateMinPriceOptions();
        });
        const updateMinPriceOptions = () => {
            let options = minPrices.find('option');
            options.each(function () {
                let optionValue = parseFloat($(this).val());
                if (!isNaN(optionValue)) {
                    $(this).toggle(optionValue <= selectedMaxPrice)
                }
                if (isNaN(selectedMaxPrice)) {
                    $(this).show();
                }
            })
            console.log(options.length);
        }
        const updateMaxPriceOptions = () => {
            let options = maxPrices.find('option');
            options.each(function () {
                let optionValue = parseFloat($(this).val());
                if (!isNaN(optionValue)) {
                    $(this).toggle(optionValue >= selectedMinPrice)
                }
                if (isNaN(selectedMinPrice)) {
                    $(this).show();
                }
            })
            console.log(options.length);
        }
    }

    //for common type/features
    function generateCommonComponent(tabContainer, tabName, containerData, propertyTypeData, 
                                    priceData, bedroomData, bathroomCarSpace, outdoorFeaturesData, indoorFeaturesData,
                                     climateControlFeaturesData, accessibilityFeatureData, additionalFeatures = []) {
        generateTypeContainer(tabContainer, containerData, tabName);
        generatePropertyType(tabContainer, propertyTypeData, tabName);
        generatePriceType(tabContainer, priceData);
        updateMinMaxDropdown(tabContainer, "price");
        generateBedroomType(tabContainer, bedroomData);
        updateMinMaxDropdown(tabContainer, "bedroom");
        generateBathroomAndCarSpace(tabContainer, bathroomCarSpace);
        generateToggleCheckBoxFeatureType(tabContainer, 'outdoor', outdoorFeaturesData);
        generateToggleCheckBoxFeatureType(tabContainer, 'indoor', indoorFeaturesData);
        generateToggleCheckBoxFeatureType(tabContainer, 'climate-control', climateControlFeaturesData);
        generateToggleCheckBoxFeatureType(tabContainer, 'accessibility', accessibilityFeatureData);
        generateSearchKeyword(tabContainer)

        additionalFeatures.forEach(({generator, args}) => {
            generator(tabContainer, ...[].concat(args))
        })
    }
    //for each container, call certain components

    function generateBuyComponent() {
        const buyFeatures = [
            {generator:  generateLandsizeType, args: [landSizeData]},
            {generator:  updateMinMaxDropdown, args: ['landsize']},
            {generator: generateRadioCheckBox, args: ['established-property', newPropertyAndSaleMethodData]}, 
            {generator: generateRadioCheckBox, args: ['sale-method', newPropertyAndSaleMethodData]}, 
            {generator:  generateExcludeType}          
    ];  

        generateCommonComponent(buyContainer, buy, containerData, propertyTypeData, buyOrSoldPriceData, 
                                bedroomData, bathroomCarSpace, outdoorFeaturesData, indoorFeaturesData, 
                                climateControlFeaturesData, accessibilityFeatureData, buyFeatures)
       
    }

    function generateRentComponent() {      

        const rentFeatures = [
                {generator:  generateAvailableDate, args: [availableDateData]},
                {generator:  generatePropertyRequirementType},
                {generator:  generateAffordableHousingType},
                {generator:  generateExcludeType}
        ];

        generateCommonComponent(rentContainer, rent, containerData, propertyTypeData, rentdPriceData, 
                                    bedroomData, bathroomCarSpace, outdoorFeaturesData, indoorFeaturesData, 
                                    climateControlFeaturesData, accessibilityFeatureData, rentFeatures)
        
    };

    function generateSoldComponent() {
        const soldFeatures = [
            {generator:  generateLandsizeType, args: [landSizeData]},
            {generator:  updateMinMaxDropdown, args: ['landsize']},
            {generator:  generateSoldDate, args: [soldDateData]}           
    ];  

        generateCommonComponent(soldContainer, sold, containerData, propertyTypeData, buyOrSoldPriceData, 
                                bedroomData, bathroomCarSpace, outdoorFeaturesData, indoorFeaturesData, 
                                climateControlFeaturesData, accessibilityFeatureData, soldFeatures)
       
    }

   


    //call function for each container
    generateBuyComponent() ;
    generateRentComponent();
    generateSoldComponent()
})
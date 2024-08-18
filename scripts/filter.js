$(window).ready(function () {
    const containerData = [
        {
            sectionName: "property type",
            sectionClass: "property-type",
            description: null
        },
        {
            sectionName: "price",
            sectionClass: "price-type",
            description: null
        },
        {
            sectionName: "bedrooms",
            sectionClass: "bedrooms-type",
            description: null
        },
        {
            sectionName: "bathrooms",
            sectionClass: "bathrooms-type",
            description: null
        },
        {
            sectionName: "accessibility features",
            sectionClass: "accessibility-features-type",
            description: "These filters find properties with accessibility features in their descriptions. We're working to improve their accuracy."
        }
    ]

    const propertyTypeData = [
        {
            id: "1",
            type: "all types",
            value: "all",
            isBuy: true,
            isRent: true,
            isSold: true
        }, {
            id: "2",
            type: "house",
            value: "house",
            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "3",
            type: "townhouse",
            value: "townhouse",
            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "4",
            type: "apartment & unit",
            value: "apartmentUnit",
            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "5",
            type: "Villa",

            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "6",
            type: "retirement living",
            value: "retire",
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "7",
            type: "land",
            value: "land",
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "8",
            type: "aceage",
            value: "aceage",
            isBuy: true,
            isRent: false,
            isSold: true
        }, {
            id: "9",
            type: "rural",
            value: "rural",
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "10",
            type: "block of units",
            value: "blockUnit",
            isBuy: true,
            isRent: false,
            isSold: true
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

    let buyContainer = $("#pills-filter-buy");
    let rentContainer = $("#pills-filter-rent");
    let soldContainer = $("#pills-filter-sold");
    let rentPropertyTypeData = propertyTypeData.filter(({ isRent }) => isRent);
    console.log(rentPropertyTypeData);

    // <span class="small">These filters find properties with accessibility features in their
    //                              descriptions. We're working to improve their accuracy.</span>
    //generate type container
    function generateTypeContainer(data, tabContainer) {
        data.forEach(({ sectionName, sectionClass, description }) => {
            let htmlTemplate = `
             <div class="${sectionClass}">               
                <div class="fw-semibold fs-5 mb-3 lh-base text-capitalize">${sectionName}</div>
                 <span class="small ${description == null ? "d-none" : ""}">${description}</span>
                <div class="row ps-3 ${sectionClass}-container">
                </div>
            </div>
            `
            tabContainer.append(htmlTemplate);
        })
    }

    //generate each component
    function generatePropertyType(tabContainer, data) {
        data.forEach(({ id, type, value }) => {
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
            <div class="col-6">
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
              <div class="col-6">
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
    

    //for each container, call certain components
    function generateRentComponent() {
        generateTypeContainer(containerData, rentContainer);
        generatePropertyType(rentContainer, rentPropertyTypeData);
        generatePriceType(rentContainer, rentdPriceData);
        updateMinMaxDropdown(rentContainer, "price")
        generateBedroomType(rentContainer,bedroomData)
        updateMinMaxDropdown(rentContainer, "bedroom")
    };

    function generateSoldComponent() {
        generateTypeContainer(containerData, soldContainer);
        generatePropertyType(soldContainer, propertyTypeData);
        generatePriceType(soldContainer, buyOrSoldPriceData)
        updateMinMaxDropdown(soldContainer, "price")
        generateBedroomType(soldContainer,bedroomData)
        updateMinMaxDropdown(soldContainer, "bedroom")
    }
    //call function for each container
    generateRentComponent();
    generateSoldComponent()
})
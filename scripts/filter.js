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

    const propertyType = [
        {
            id: "1",
            type: "all types",
            isBuy: true,
            isRent: true,
            isSold: true
        }, {
            id: "2",
            type: "house",
            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "3",
            type: "townhouse",
            isBuy: true,
            isRent: true,
            isSold: true
        },
        {
            id: "4",
            type: "apartment & unit",
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
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "7",
            type: "land",
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "8",
            type: "aceage",
            isBuy: true,
            isRent: false,
            isSold: true
        }, {
            id: "9",
            type: "rural",
            isBuy: true,
            isRent: false,
            isSold: true
        },
        {
            id: "10",
            type: "block of units",
            isBuy: true,
            isRent: false,
            isSold: true
        }
    ]


    let buyContainer = $("#pills-filter-buy");
    let rentContainer = $("#pills-filter-rent");
    let soldContainer = $("#pills-filter-sold");
    let rentPropertyTypeData = propertyType.filter(({ isRent }) => isRent);
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
    generateTypeContainer(containerData, soldContainer);
    generatePropertyType(soldContainer, propertyType);

    //generate each component
    function generatePropertyType(tabContainer, data) {
        data.forEach(({ type }) => {
            let isAllTypes = type === "all types";
            let htmlTemplate = `
              <div class="form-check py-2 lh-base  col-6">
                    <input class="form-check-input cursor-pointer" type="checkbox" value="" id="${type} 
                    ${isAllTypes ? 'data-all-type="true"' : ''}">
                    <label class="form-check-label cursor-pointer text-capitalize" for="${type}"> ${type}
                    </label>
                </div>
            `
            tabContainer.find('.property-type-container').append(htmlTemplate);
        })


    }

    function generatePriceType(tabContainer) {
        let containerTemplate = `
         <div class="col-6">
            <div class="mb-1 fw-medium">Min</div>
            <div class="input-group mb-3">
                <select class="form-select py-12" id="priceGroupSelect01">
                     <option class="mb-3" selected>Any</option>
                                               
                </select>
            </div>
        </div>
        <div class="col-6">
            <div class="mb-1 fw-medium">Max</div>
            <div class="input-group mb-3">
                <select class="form-select py-12" id="priceGroupSelect01">
                     <option class="mb-3" selected>Any</option>
                                               
                </select>
            </div>
        </div>
        <div class="form-check py-2">
            <input class="form-check-input" type="checkbox" value="" id="price-check-box">
            <label class="form-check-label" for="price-check-box">
                Only show properties with a price
            </label>
        </div>
        `
        tabContainer.find('.price-type-container').append(containerTemplate);
    }

    //for each container, call certain components
    function generateRentComponent() {
        generateTypeContainer(containerData, rentContainer);
        generatePropertyType(rentContainer, rentPropertyTypeData);
        generatePriceType(rentContainer)
    }

    //call function for each container
    generateRentComponent();

})
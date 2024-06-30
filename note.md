{
  "result": [
    "repeat(1,60)",
    {
      "id": "guid()",
      "firstName": "firstName()",
      "lastName": "lastName()",
      "ownerAvatar": "image()",
      "companyLogo": "image()",
      "images": [
        {
          "url": "image()"
        },
        {
          "url": "image()"
        }
      ],
      "price": {
        "min": "price()",
        "max": "price()"
      },
      "address": {
        "street": "street()",
        "city": "city()"
      },
      "services": {
        "bed": "int(1,3)",
        "bath": "int(1,3)",
        "carPark": "int(1,3)",
        "area": "int(400,1000)"
      },
      "type": "enum(Retirement Living, House, Land, Townhouse, Acreage, Apartment, Villa)",
      "inspectation": "date()",
      "video": "enum(true, false)"
    }     
  ]
}


function generatePagination() {

                    //handle pagination - render page number
                    if (page <= first + 2) {
                        for (let i = 1; i <= first + 3; i++) {
                            appendPageLink(i);
                        }
                    } else if (page >= last - 2) {
                        for (let i = last - 3; i <= last; i++) {
                            appendPageLink(i);
                        }
                    }
                    else {
                        appendPageLink(first)
                        appendDot()

                        for (let i = page - 1; i <= (page + 1); i++) {
                            console.log("page" + page);
                            appendPageLink(i);
                        }
                        appendDot()
                        appendPageLink(last)
                    }

                    //pagination page number display logic
               prevBtn.toggleClass('d-none', page === first)
               nextBtn.toggleClass('d-none', page === last)
                }
                function appendPageLink(pageNumber) {
                    $(`<li class="page-item"><a class="page-link" href="search.html?page=${pageNumber}">${pageNumber}</a></li>`)
                        .insertBefore('.pagination .page-item:last');
                }
                function appendDot() {
                    $(`<li>...</li>`).insertBefore('.pagination .page-item:last');
                }
                               //handle previous & next button of pagination
                prevBtn.on('click', function () {
                    $(".previous .page-link").attr("href", `search.html?page=${prev}`);
                })
                nextBtn.on('click', function () {
                    $(".next .page-link").attr("href", `search.html?page=${next}`);
                })
                generatePagination();
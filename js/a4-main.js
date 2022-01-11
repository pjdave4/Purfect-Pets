var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters() {
    var container = document.querySelector("#main-table-body");
    container.innerHTML = "";
    for (var i = 0; i < petData.length; i++) {
      if (
        (filterType == "dog" && petData[i].type == "dog") ||
        (filterType == "cat" && petData[i].type == "cat") ||
        (filterType == "bird" && petData[i].type == "bird") ||
        (filterType == "")
      ) {
        if (petData[i].age > filterAgeMin && petData[i].age < filterAgeMax) {
          var tr = document.createElement("tr");
          var td = document.createElement("td");
          var img = document.createElement("img");
          var newtd = document.createElement("td");
          var h4 = document.createElement("h4");
          var p = document.createElement("p");
          var span = document.createElement("span");
          var name = document.createTextNode(petData[i].name);
          p.innerHTML = petData[i].description;
          var age = document.createTextNode("Age: ");
          var x = document.createTextNode(petData[i].age);
          var y = document.createTextNode(" years old.");
  
          tr.appendChild(td);
          td.appendChild(img);
          img.src = petData[i].image.src;
          img.alt = petData[i].image.alt;
          img.height = petData[i].image.height;
          img.width = petData[i].image.width;
          tr.appendChild(newtd);
          newtd.appendChild(h4);
          h4.appendChild(name);
          newtd.appendChild(p);
          newtd.appendChild(span);
          span.appendChild(age);
          span.appendChild(x);
          span.appendChild(y);
          container.appendChild(tr);
        }
      }
    }
  }
  
  window.onload = function () {
    loadTableWithFilters();
  };
  
  function filterDog() {
    filterType = "dog";
    loadTableWithFilters();
  }
  
  function filterCat() {
    filterType = "cat";
    loadTableWithFilters();
  }
  
  function filterBird() {
    filterType = "bird";
    loadTableWithFilters();
  }
  
  function filter_zero_1() {
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
  }
  function filter_1_3() {
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
  }
  
  function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
  }
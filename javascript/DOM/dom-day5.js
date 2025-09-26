// --step 1:  created table by tag
// --step 2:  created tr by tag
// --step 3:  placed tr inside table
// --step 4:  created th by tag for heading 1
// --step 5:  added a text in th i.e heading1 (order id)
// --step 6:  created one more th by tag for heading 2
// --step 7:  added a text in th  i.e heading2 (item)
// --step 8:  created one more th by tag for heading 3
// --step 9:  added a text in th  i.e heading3 (price)



// -------------------first data entry in table------------------
// --step 1:  created tr by tag
// --step 2:  placed tr inside table
// --step 3:  created td by tag for data 1
// --step 4:  added a text in td i.e data (2342))
// --step 5:  created one more td by tag for data 2
// --step 6:  added a text in td  i.e data (iphone 16)
// --step 7:  created one more td by tag for data 3
// --step 8:  added a text in td  i.e data3 (45000Rs)


{
    //---code to create table---
    let productTable = document.createElement('table')
    let headingRow = document.createElement('tr')
  
//   =============first heading========
    let heading1 = document.createElement('th')
    heading1.innerText = "order Id"

    //   =============second heading========
    let heading2 = document.createElement('th')
    heading2.innerText = "item"
   
    //   =============third heading========
    let heading3 = document.createElement('th')
    heading3.innerText = "Price"
    
    // =============adding all heading in heading row===========
    headingRow.appendChild(heading1)
    headingRow.appendChild(heading2)
    headingRow.appendChild(heading3)


    // =============adding heading row in table===========
    headingRow.style.backgroundColor = "rgb(37, 1, 41)"
    headingRow.style.color = "white"
   productTable.appendChild(headingRow) 

    console.log(productTable)
    console.log(headingRow)
      console.log(heading1, heading2, heading3)




// -------------------first data entry in table------------------
var dataRow1 = document.createElement('tr')
let data1 = document.createElement('td')
let data2 = document.createElement('td')
let data3 = document.createElement('td')
data1.innerText = "2342"
data2.innerText = "iphone 16"
data3.innerText = "45000Rs"

dataRow1.appendChild(data1)
dataRow1.appendChild(data2)
dataRow1.appendChild(data3)

productTable.appendChild(dataRow1)
// -------------------second data entry in table------------------
let dataRow2 = document.createElement('tr')
let datar1 = document.createElement('td')
let datar2 = document.createElement('td')
let datar3 = document.createElement('td')
datar1.innerText = "2344"
datar2.innerText = "samsung s24 ultra"
datar3.innerText = "85000Rs"

dataRow2.appendChild(datar1)
dataRow2.appendChild(datar2)
dataRow2.appendChild(datar3)

productTable.appendChild(dataRow2)









      ///=============appending table in body (for preview on page)==========
     document.body.appendChild(productTable) 

}
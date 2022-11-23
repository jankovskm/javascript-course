function insertRow(){
   const myTable = document.getElementById('sampleTable'); 
   const colNumber = myTable.rows[0].cells.length;
   const rowNumber = myTable.rows.length;
   const newRow = myTable.insertRow();

   for (let i = 1; i <= colNumber; i++) {
        let cell = newRow.insertCell();
        cell.innerText = "Row"+(rowNumber+1)+" cell"+i;
   }
}
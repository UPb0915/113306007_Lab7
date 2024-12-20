document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var mathGrade = parseFloat(document.getElementById('mathGrade').value);
    var englishGrade = parseFloat(document.getElementById('englishGrade').value);

    var table = document.getElementById('gradesTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.textContent = table.rows.length;
    cell2.textContent = mathGrade.toFixed(2);
    cell3.textContent = englishGrade.toFixed(2);
    cell4.textContent = ((mathGrade + englishGrade) / 2).toFixed(2);

    updateAverages();

    document.getElementById('gradeForm').reset();
});

    function updateAverages() {
        var table = document.getElementById('gradesTable').getElementsByTagName('tbody')[0];
        var rowCount = table.rows.length;

        var mathTotal = 0;
        var englishTotal = 0;
        var overallTotal = 0;

        for (let i = 0; i < rowCount; i++) {
        mathTotal += parseFloat(table.rows[i].cells[1].textContent);
        englishTotal += parseFloat(table.rows[i].cells[2].textContent);
        overallTotal += parseFloat(table.rows[i].cells[3].textContent);
        }

        var mathAverage = mathTotal / rowCount;
        var englishAverage = englishTotal / rowCount;
        var overallAverage = overallTotal / rowCount;

        document.getElementById('mathAverage').textContent = mathAverage.toFixed(2);
        document.getElementById('englishAverage').textContent = englishAverage.toFixed(2);
        document.getElementById('overallAverage').textContent = overallAverage.toFixed(2);
    }

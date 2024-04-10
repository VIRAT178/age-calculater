const months = [31,28,31,30,31,30,31,31,30,31,30,31];
function agecalculate() {
    var inputDate = document.getElementById("date-input").value;
    var today = new Date();
    var birthDate = new Date(inputDate);
    
    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += tempDate.getDate();
    }

    document.getElementById("years").textContent = ageYears;
    document.getElementById("months").textContent = ageMonths;
    document.getElementById("days").textContent = ageDays;
}
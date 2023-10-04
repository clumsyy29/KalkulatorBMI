document.addEventListener("DOMContentLoaded", function () {
    var hitungButton = document.getElementById("hitungButton");
    var darkModeToggle = document.getElementById("darkModeToggle");

    hitungButton.addEventListener("click", hitungBMI);
    darkModeToggle.addEventListener("click", toggleDarkMode);

    function hitungBMI() {
        var beratBadan = parseFloat(document.getElementById("beratBadan").value);
        var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);

        if (isNaN(beratBadan) || isNaN(tinggiBadan)) {
            alert("Masukkan berat badan dan tinggi badan yang valid.");
            return;
        }

        var loader = document.querySelector(".loader");
        loader.style.display = "inline-block";

        setTimeout(function () {
            var bmi = beratBadan / Math.pow(tinggiBadan / 100, 2);
            var statusBMI = "";

            if (bmi < 18.5) {
                statusBMI = "Underweight";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                statusBMI = "Normal weight";
            } else if (bmi >= 25 && bmi <= 29.9) {
                statusBMI = "Overweight";
            } else {
                statusBMI = "Obesity";
            }

            var hasilBMI = "BMI = " + bmi.toFixed(1) + "<br>";
            hasilBMI += "BMI Categories: <span class='" + getStatusColor(statusBMI) + "'>" + statusBMI + "</span>";

            document.getElementById("hasilBMI").innerHTML = hasilBMI;

            loader.style.display = "none";
        }, 2000);
    }

    function toggleDarkMode() {
        var body = document.body;
        var container = document.querySelector(".container");

        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            container.classList.remove("dark-mode");
        } else {
            body.classList.add("dark-mode");
            container.classList.add("dark-mode");
        }
    }

    function getStatusColor(status) {
        if (status === "Obesity") {
            return "red-text";
        } else if (status === "Overweight") {
            return "yellow-text";
        } else if (status === "Underweight") {
            return "red-text";
        } else {
            return "green-text";
        }
    }
});

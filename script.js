document.getElementById("step1-input").value = "";

function checkStep1() {
    const input = document.getElementById("step1-input").value;
    if (input === "Gir-Gvxs{O0g$_0u_X1ks3i$}") {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    } else {
        alert("Incorrect decryption. Try again.");
    }
}

function checkStep2() {
    const input = document.getElementById("step2-input").value;
    if (input === "Tri-Tech{L0t$_0f_C1ph3r$}") {
        document.getElementById("step2").style.display = "none";
        document.getElementById("congratulations").style.display = "block";
    } else {
        alert("Incorrect decryption. Try again.");
    }
}

const realFileBtn1 = document.getElementById("real-file1");
    const customBtn1 = document.getElementById("custom-button1");
    const customTxt1 = document.getElementById("custom-text1");

    customBtn1.addEventListener("click", function () {
      realFileBtn1.click();
    });

    realFileBtn1.addEventListener("change", function () {
      if (realFileBtn1.value) {
        customTxt1.innerHTML = realFileBtn1.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        customTxt1.innerHTML = "No file chosen, yet.";
      }
    });
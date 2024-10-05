document.getElementById("analyze").addEventListener("click", function () {
    chrome.devtools.inspectedWindow.eval(
        'chrome.runtime.sendMessage({ action: "getFontMetrics" })',
        function (response) {
            const fonts = response.fonts;
            const tableBody = document.querySelector("#results tbody");
            tableBody.innerHTML = "";

            fonts.forEach((font, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
          <td>${font.fontFamily}</td>
          <td>${font.fontSize}px</td>
          <td>${font.xHeight.toFixed(2)}px</td>
          <td>${font.ratio}</td>
          <td>${font.contrast}</td>
          <td><button data-index="${index}">Anzeigen</button></td>
        `;
                tableBody.appendChild(row);
            });

            document
                .querySelectorAll("button[data-index]")
                .forEach((button) => {
                    button.addEventListener("click", function () {
                        const index = this.dataset.index;
                        const element = fonts[index].element;
                        chrome.devtools.inspectedWindow.eval(`
            const elem = document.querySelectorAll('*')[${index}];
            elem.scrollIntoView({behavior: 'smooth', block: 'center'});
            elem.style.outline = '2px solid red';
          `);
                    });
                });
        }
    );
});

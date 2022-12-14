/** LIBRARY */
export default class Chart {
    constructor(data) {
        this.data = data;
        console.log(this.data[5])
    }

    drawAsPath(canvas) {
        let pathData = [
                this.data[5][1][0],
                this.data[6][1][0],
                this.data[7][1][0],
                this.data[8][1][0],
                this.data[9][1][0],
                this.data[10][1][0],
                this.data[11][1][0],
            ],
            xTimeValue = [
                this.data[5][0],
                this.data[6][0],
                this.data[7][0],
                this.data[8][0],
                this.data[9][0],
                this.data[10][0],
                this.data[11][0],
            ],
            pathElement = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            ),
            pathAttribute = ""; // d="M10,10 L30,40 .."

        // 5 times iteration
        let index = 0;
        pathData.forEach((dataPoint) => {
            let xTime = this.getXTime(xTimeValue[index]),
                xScale = 8;
console.log(xScale, xTime)
            
            
            if (index === 0)
                pathAttribute = `M ${xTime * xScale} ${200 + dataPoint * 1000}`;
            else
                pathAttribute = `${pathAttribute} L ${xTime * xScale} ${
                    200 + dataPoint * 1000
                }`;
            index++;
        });

        pathElement.setAttribute("d", pathAttribute);
        pathElement.classList.add("line-red");

        canvas.appendChild(pathElement);

        return pathElement;
    }

    getXTime(timeValue = undefined) {
        let xTime = undefined;

        // console.log(new Date(timeValue).toISOString());
        // console.log(new Date(timeValue).getDate());
        // console.log(new Date(timeValue).getMonth());
        // console.log(new Date(timeValue).getYear());
        // console.log(new Date(timeValue).getHours());
        // console.log(new Date(timeValue).getMinutes());
        xTime = new Date(timeValue).getSeconds();
        // console.log(new Date(timeValue).getMilliseconds());
        // console.log(new Date(timeValue).valueOf());

        return xTime;
    }
}

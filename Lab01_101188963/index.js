const csv = require("csv-parser");
const fs = require("fs");
const results = [];

paths = ["./usa.txt", "./canada.txt"];
for (let path of paths) {
	if (fs.existsSync(path)) {
		fs.unlinkSync(path);
	}

	fs.writeFileSync(path, 'country,year,population\n');
}


fs.createReadStream("input_countries.csv")
	.pipe(csv())
	.on("data", data => {
		if (data.country == "United States" || data.country == "Canada") {
			results.push(data)
		}
	})
	.on("end", () => {
		for (let data of results) {
			const {country, year, population} = data
			if (data.country === "Canada") {
				fs.appendFileSync(paths[1], `${country},${year},${population}\n`);
			} else {
				fs.appendFileSync(paths[0], `${country},${year},${population}\n`);
			}
		}
	});
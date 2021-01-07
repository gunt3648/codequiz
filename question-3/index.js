const argument = process.argv[2];
const axios = require('axios')

try {
	if (!argument) throw new Error('Invalid argument.');

	axios.get('https://codequiz.azurewebsites.net/', {
		headers: {
			Cookie: "hasCookie=true"
		}
	})
		.then(res => res.data)
		.then(data => {
			const nameIndex = data.indexOf(argument);
			if (nameIndex == -1) throw new Error('Fund name is not found.');
			data = data.slice(nameIndex);

			const rowEndIndex = data.indexOf('</td></tr>');
			data = data.slice(0, rowEndIndex);
			data = data.split('</td><td>');
			console.log(data[1]);
		});
} catch (err) {
	console.error(err);
}
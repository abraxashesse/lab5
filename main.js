function sumcolumns () {
	let column_1 = [7, 6, 6, 1, 6, 6, 1, 1, 8, 1, 9, 8, 2, 1, 2, 5, 1, 2, 6, 5, 4, 4, 10, 1, 1, 4, 5, 8, 6, 4];
	let column_2 = [4, 1, 4, 10, 9, 9, 9, 10, 9, 5, 2, 8, 2, 4, 8, 8, 9, 10, 9, 6, 9, 6, 7, 1, 3, 7, 1, 2, 10, 2];
	let column_3 = [66, 59, 70, 74, 90, 58, 60, 97, 40, 66, 58, 88, 78, 74, 64, 96, 96, 57, 52, 84, 56, 51, 91, 95, 53, 95, 81, 66, 65, 78];
	let column_4 = [89, 64, 74, 48, 75, 61, 48, 93, 84, 52, 93, 62, 97, 73, 68, 70, 57, 81, 63, 90, 78, 100, 59, 74, 57, 88, 91, 74, 77, 86];
	
	let sum_1 = column_1.reduce((a, b) => a + b, 0);
	let sum_2 = column_2.reduce((a, b) => a + b, 0);
	let sum_3 = column_3.reduce((a, b) => a + b, 0);
	let sum_4 = column_4.reduce((a, b) => a + b, 0);
	let sums = [sum_1, sum_2, sum_3, sum_4];

	let total_score = 0;
	for (let i = 0; i < column_1.length; i++) {
		total_score += column_1[i];
		total_score += column_2[i];
		total_score += column_3[i];
		total_score += column_4[i];
	};

   return {
   	col1: column_1,
   	col2: column_2,
   	col3: column_3,
   	col4: column_4,
   	sums: sums,
   	total_score: total_score
   };
}

let results = sumcolumns();
console.log("Results:", results);
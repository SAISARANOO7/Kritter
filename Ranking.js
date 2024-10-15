function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    
    const eligibleColleges = colleges.filter(college => 
        college.location === preferredLocation && college.fees <= maxFees
    );

    eligibleColleges.forEach(college => {
        college.score =  (college.ranking * rankingWeight) + ((college.fees / maxFees) * feesWeight);

    });

    eligibleColleges.sort((a,b)=> a.score - b.score);

    return eligibleColleges.map(college => ({
          name: college.name,
          location: college.location,
          fees: college.fees,
          ranking: college.ranking,
          score: college.score.toFixed(2)
    }));
}

const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
];

const preferredLocation = "New York";
const maxFees = 20000;
const rankingWeight = 2;
const feesWeight = 1;

console.log(rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight));


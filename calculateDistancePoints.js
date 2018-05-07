const calculateDistancePoints = (distance, hillSize, kPoint) => {
 
 //The Flying Hill

 if (kPoint >= 170 && hillSize >= 185) {
     console.log('The Flying Hill');
     return (120 + ((distance - kPoint) * 1.2));
 };
 
 //The Large Hill
 if (kPoint >= 100 && hillSize >= 110) {
     console.log('The Large Hill')
     return (60 + ((distance - kPoint) * 1.8)); 
 };

 //The Normal Hill
 if (kPoint <= 99 && hillSize >= 85) {
     console.log('The Normal Hill');
     return (60 + ((distance - kPoint) * 2));
 }
};

module.exports = calculateDistancePoints;
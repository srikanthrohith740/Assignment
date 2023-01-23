function Points(points) {
    let maxPoints = 0;
    for (let i = 0; i < points.length; i++) {
      let samePoints = 1;
      let sameXPoints = 0;
      let sameLinePoints = 0;
      let slopes = new Map();
      let point1 = points[i];
  
      for (let j = i + 1; j < points.length; j++) {
        let point2 = points[j];
  
        if (point1[0] === point2[0] && point1[1] === point2[1]) {
          samePoints++;
        } else if (point1[0] === point2[0]) {
          sameXPoints++;
        } else {
          let slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);
          if (slopes.has(slope)) {
            slopes.set(slope, slopes.get(slope) + 1);
          } else {
            slopes.set(slope, 1);
          }
          sameLinePoints = Math.max(sameLinePoints, slopes.get(slope));
        }
      }
  
      maxPoints = Math.max(maxPoints, samePoints + sameXPoints + sameLinePoints);
      slopes.clear();
    }
    return maxPoints;
  }
  console.log(Points([[1,1],[2,2],[3,3],[4,4]]))
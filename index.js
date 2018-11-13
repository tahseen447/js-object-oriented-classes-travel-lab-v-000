class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1);
    let diff = endDate - this.startDate;
    console.log(diff)
  }
}

class Train {
  fillDetails(trainNumber, source, destination, depTime) {
    this.trainNumber = trainNumber;
    this.source = source;
    this.destination = destination;
    this.depTime = depTime;
  }
}

class Ticket extends Train {
  details(passengerName, train, date) {
    super.fillDetails(12345, "Surat", "Somewhere", "7:30 PM");
    this.passengerName = passengerName;
    this.train = train;
    this.date = date;
  }

  display() {
    console.log(
      `${this.passengerName} ${this.train} ${this.date} ${this.trainNumber} ${this.source} ${this.destination} ${this.depTime}`
    );
  }
}

const ticket1 = new Ticket();

ticket1.details("Afiya", "AC", "07/09/24");
ticket1.display();

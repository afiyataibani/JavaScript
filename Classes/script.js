class Train{

    constructor(trainNumber, capacity, availableSeats){
        this.trainNumber = trainNumber;
        this.capacity = capacity;
        this.bookedSeats = 0;
        this.availableSeats = availableSeats;
    }

    bookSeat(){
        if (this.bookedSeats < this.capacity){
            this.bookedSeats++;
            console.log(`Seat booked successfully for ${this.trainNumber}`)
        } else {
            console.log(`Sorry no seat available for ${this.trainNumber}`)
        }
    }

    cancelSeat(){
        if(this.bookedSeats > 0){
            this.bookedSeats--;
            console.log(`Seat cancelled successfully for ${this.trainNumber}`)
        } else {
            console.log(`Sorry seat cannot be cancelled for ${this.trainNumber}`)
        }
    }

    checkAvailability(){
        this.availableSeats = this.capacity - this.bookedSeats
        console.log(`Train ${this.trainNumber} has ${this.availableSeats} available seats out of ${this.capacity}`)
    }
}

let t = new Train(12345, 100)
t.bookSeat()
t.bookSeat()
t.bookSeat()
t.cancelSeat()
t.checkAvailability()
class bookTicket{
    create() {
        console.log("Fill Form")
    }

    reservation(source, target, date, reservation, reservationType){
        console.log(source, target, date, reservation, reservationType)
    }

    search(){
        console.log("Search for train")
    }

    submit(){
        console.log("Reservation Successful")
    }
}

let a = new bookTicket()
a.create()
a.reservation("Surat", "Kerala", "15/05/2024", "First Class", "General")
a.search()
a.submit()
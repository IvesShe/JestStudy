export default class Message{
    welcome(number){
        this.user = number==1?"chichi":"ivesshe";
    }

    server_foot(){
        this.server = this.user+"走進房間為您足療";
    }

    server_massage(){
        this.server = this.user+"走進房間為您按摩";
    }

    server_massage_thai(){
        this.server = this.user+"走進房間為您泰式保健";
    }

    server_massage_ear(){
        this.server = this.user+"走進房間為您耳療";
    }
}
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    const logShout = string;
    string = logShout.toUpperCase();
    console.log(string);
}
function logWhisper(string) {
    const logWhisper = string
    string = logWhisper.toLowerCase();
    console.log(string)
}
function sayHiToHeadphonedRoommate(string) {
    if(string===string.toLowerCase()){
        return "I can't hear you!";
    }else if(string===string.toUpperCase()){
        return "YES INDEED!"
    }else if(string="Let's have dinner together!"){
        return "I would love to!"
    }

}

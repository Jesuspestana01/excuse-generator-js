window.onload = function() {
    console.log("Loaded excuse")
    document.querySelector("#excuse").innerHTML = generateExcuse();
};

function generateExcuse(){
    let who = ["A bird", "My annoying brother", "My other self"];
    let reason = ["break my pc", "delete my account", "didn't help me"];
    let when = ["yesterday.", "before work.", "over the span of 6 months."];

    let whoPosition = Math.floor(Math.random() * who.length);
    let reasonPosition = Math.floor(Math.random() * reason.length);
    let whenPosition = Math.floor(Math.random() * when.length);

    return who[whoPosition] + " " + reason[reasonPosition] + " " + when[whenPosition];
}

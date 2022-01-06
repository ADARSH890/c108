function start_button(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cMHFDV-QmT/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        rand_r=Math.floor(Math.random()*255)+1;
        rand_g=Math.floor(Math.random()*255)+1;
        rand_b=Math.floor(Math.random()*255)+1;
     document.getElementById("result_label").style.color="rgb("+rand_r+","+rand_g+","+rand_b+")";
     document.getElementById("accuracy").style.color="rgb("+rand_r+","+rand_g+","+rand_b+")";
     document.getElementById("result_label").innerHTML="i can hear"+results[0].label;
     document.getElementById("accuracy").innerHTML="accuracy"+(results[0].confidence*100).toFixed(2)+"%";
     i1=document.getElementById("img1");
     i2=document.getElementById("img2");
     i3=document.getElementById("img3");
     i4=document.getElementById("img4");
if(results[0].label=="bark"){
    i1.src="gif2.gif";
    i2.src="IMG2.png";
    i3.src="IMG3.png";
    i4.src="IMG4.png";

}
else if(results[0].label=="bell"){
    i1.src="IMG1.png";
    i2.src="gif1.gif";
    i3.src="IMG3.png";
    i4.src="IMG4.png";

}
else if(results[0].label=="clap"){
    i1.src="IMG1.png";
    i2.src="IMG2.png";
    i3.src="gif4.gif";
    i4.src="IMG4.png";

}
else if(results[0].label=="whistle"){
    i1.src="IMG1.png";
    i2.src="IMG2.png";
    i3.src="IMG3.png";
    i4.src="gif3.gif";
    

}
else{
    i1.src="aliens-01.gif";
    i2.src="aliens-01.gif";
    i3.src="aliens-01.gif";
    i4.src="aliens-01.gif";

}


    }

}






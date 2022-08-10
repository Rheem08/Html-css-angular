function alertFinished(){
    console.log(`Finished my homework`);
}

function doHomework(subject, alertFinished){
    console.log(`Starting my ${subject}homework.`);
}

doHomework('math', alertFinished);
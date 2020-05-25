const minhaPromesse = () => new Promise((resolve, reject )=> {
    setTimeout(() => {resolve('OKEY')}, 2000);
});

minhaPromesse()
.then(response => {
    console.log(response);
})
.catch(err =>{
    console.warn(err);
});
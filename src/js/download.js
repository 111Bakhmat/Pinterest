export const downloadOnScreen = (e) => (download, AllCards, downloadPic) => {
    if (e.target.closest('.bottom-bar__link-download')){
        let idImg = e.target.id ? e.target.id : e.target.parentNode.id ? e.target.parentNode.id: e.target.parentNode.parentNode.id;
        let onScreen = document.createElement('img');
            for (let i of downloadPic) {
                if (i.id === idImg){
                    
                    onScreen.src = i.image;
                    console.log(onScreen.src);
                };
            };
        onScreen.style.position = 'absolute';
        onScreen.style.zIndex = '100';
        document.body.append(onScreen);
    }
}
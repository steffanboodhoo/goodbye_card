window.onload = () => {
    steffan_boodhoo_init();
    nicholas_chamansingh_init();
}

const steffan_boodhoo_init = () => {
    console.log('I can still access the DOM, don\'t worry')
    // $('#steffan_boodhoo').append('I can use jquery here')
}

const nicholas_chamansingh_init = () => {
    let links = [
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t31.0-8/457552_10151858947065171_651695955_o.jpg?_nc_cat=105&_nc_ht=scontent.fpos3-1.fna&oh=e1cec3deecd84e0b1a88451ccb70de14&oe=5D7EF90B",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t31.0-8/470449_10151858950145171_1706199299_o.jpg?_nc_cat=103&_nc_ht=scontent.fpos3-1.fna&oh=6ff934ec5aa78896a09b52769de94a34&oe=5DB7BDFD",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/3764_10152278754645171_1992706418_n.jpg?_nc_cat=107&_nc_ht=scontent.fpos3-1.fna&oh=3fc1d7bd954c14d9a2ffa0bc0f2af6f9&oe=5DB5BA5D",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/198371_10152308086675171_1143696838_n.jpg?_nc_cat=111&_nc_ht=scontent.fpos3-1.fna&oh=ec1e067f14f40a9cdfa86bbe918cb9b8&oe=5DBC4412",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/155967_10152308096925171_88570635_n.jpg?_nc_cat=105&_nc_ht=scontent.fpos3-1.fna&oh=553381e5ca41b841ea3d4da00a63a4cc&oe=5DB9874F",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/544230_10152630870440171_343193523_n.jpg?_nc_cat=111&_nc_ht=scontent.fpos3-1.fna&oh=4aeb918fcfaa97f8a190e6e72ada4a16&oe=5D7DABE2",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/533727_10152228903095713_67575836_n.jpg?_nc_cat=111&_nc_ht=scontent.fpos3-1.fna&oh=5f45a6efbb28623e8950a38367b6f486&oe=5DB945D1",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/999867_10153087667025713_1473427135_n.jpg?_nc_cat=103&_nc_ht=scontent.fpos3-1.fna&oh=f2f20c2132c88240d090722a072ac92a&oe=5D7CBF73",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/384685_10151040033255171_1762478219_n.jpg?_nc_cat=105&_nc_ht=scontent.fpos3-1.fna&oh=47b748ebc2c2b9ea4bb136e46e24226b&oe=5DBDB505",
      "https://scontent.fpos3-1.fna.fbcdn.net/v/t1.0-9/481383_10151850990145495_551075400_n.jpg?_nc_cat=106&_nc_ht=scontent.fpos3-1.fna&oh=82c1f0cb4535c5bf11ef9e070b3b89f8&oe=5D863C38"
    ];
    let main = $('.nicholas_chamansingh_imgs');
    $.each(links, function(i, d){
      let img = $('<div class="col-md-3">'+
                      '<img src="'+d+'" class="img-fluid nicholas_chamansingh_imgs_item">'+
                    '</div>');
      main.append(img);
    });
    // $('#steffan_boodhoo').append('I can use jquery here')
}

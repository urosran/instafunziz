const axios = require("axios")
export function uploadIssue(issueType, reporterData, imgUrl, zip, status, coords) {
    body = {
        issueType: issueType,
        reporterData: reporterData,
        imgUrl: imgUrl,
        zip: zip,
        status: status,
        coords: coords
    }
    const file = {
        uri: imgUrl,             // e.g. 'file:///path/to/file/image123.jpg'
        name: "123.jpg",            // e.g. 'image123.jpg',
        type: "image/jpg"             // e.g. 'image/jpg'
    }
      
    
    const createFormData = (imageUrl, body) => {
        // const data = new FormData();
        const image = new File([imageUrl],"name.jpeg")
        console.log(image)
        var form = new FormData();
        form.append("issueType", "12");
        form.append("reporterData", "2");
        form.append("file", image);
        form.append("coords", "3");
        form.append("status", "4");
        form.append("imgName", "ldaiuwdlakuwlhda");
        form.append("zip", "12220");
      
        // Object.keys(body).forEach(key => {
        //   data.append(key, body[key]);
        // });
      
        return form;
    };

    // console.log(createFormData(imgUrl))
    console.log(imgUrl)
    axios({
        url:'https://desolate-lowlands-52819.herokuapp.com/addIssue',     
        method: 'POST',
      
        data: createFormData(imgUrl),
        }).then((response) => response.text())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
}

// FormData {
//     "_parts": Array [
//       Array [
//         "issueType",
//         "12",
//       ],
//       Array [
//         "reporterData",
//         "2",
//       ],
//       Array [
//         "image",
//         "file:///var/mobile/Containers/Data/Application/21ECF4C1-63F6-4075-9417-5365677D84BE/Library/Caches/ExponentExperienceData/%2540urosr%252Finstagram/ImagePicker/0EEE44B5-DA53-4715-A3B5-BEC02EE1FDA9.jpg",
//       ],
//       Array [
//         "coords",
//         "3",
//       ],
//       Array [
//         "status",
//         "4",
//       ],
//       Array [
//         "imgName",
//         "ldaiuwdlakuwlhda",
//       ],
//       Array [
//         "zip",
//         "12220",
//       ],
//     ],
//   } url
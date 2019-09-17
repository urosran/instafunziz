export function uploadIssue(issueType, reporterData, imgUrl, zip, status, coords) {
    body = {
        issueType: issueType,
        reporterData: reporterData,
        imgUrl: imgUrl,
        zip: zip,
        status: status,
        coords: coords
    }
    
    const createFormData = (imageUrl, body) => {
        const data = new FormData();
      
        data.append("imageUrl", {
          name: "not important",
          type: jpeg,
          uri: imgUrl
        });
      
        Object.keys(body).forEach(key => {
          data.append(key, body[key]);
        });
      
        return data;
    };

    console.log()
    fetch('https://desolate-lowlands-52819.herokuapp.com/addIssue', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createFormData),
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
}
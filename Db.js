export function uploadIssue(issueType, reporterData, imgUrl, zip, status, coords) {

    fetch('https://desolate-lowlands-52819.herokuapp.com/addIssue', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                issueType: issueType,
                reporterData: reporterData,
                imgUrl: imgUrl,
                zip: zip,
                status: status,
                coords: coords
            },
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
}
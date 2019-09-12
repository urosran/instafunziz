export default function uploadIssue(issueType, reporterData, imgUrl, zip, status, coords) {

    fetch('https://desolate-lowlands-52819.herokuapp.com/addIssue', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                issueType: issueType,
                reporterData: reporterData,
                imgUrl: imgUrl,
                zip: zip,
                status: status,
                coords: coords
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}
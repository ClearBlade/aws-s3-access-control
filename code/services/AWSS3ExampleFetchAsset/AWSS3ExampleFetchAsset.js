/**
 * Fetch the contents of an access-controlled AWSS3 Resource
 * 
 * @param {string} fileName - filename associated with a row in s3_resources collection
 * @returns {string} content - contents of AWSS3 hosted file
 */
function AWSS3ExampleFetchAsset(req, resp) {
    const COLLECTION = "s3_resources";

    if (!req.params.fileName || req.params.fileName === "") {
        req.params.fileName = "s3.txt";
    }

    const fileName = req.params.fileName;
    ClearBlade.init({ request: req });

    var s3 = AWSS3(COLLECTION);

    s3.GetFile(fileName, function (err, data) {
        if (err) {
            resp.error("Failed to GET File from AWSS3: " + JSON.stringify(err));
        }
        resp.success(data);
    });
}
var profilePictureInput = document.getElementById("profile-picture");
var profilePreview = document.getElementById("profile-preview");
profilePictureInput.addEventListener("change", function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                profilePreview.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
});

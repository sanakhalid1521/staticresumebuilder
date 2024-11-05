


const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
const profilePreview = document.getElementById("profile-preview") as HTMLImageElement;

profilePictureInput.addEventListener("change", (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
                profilePreview.src = e.target.result as string;
            }
        };
        
        reader.readAsDataURL(file);
    }
});

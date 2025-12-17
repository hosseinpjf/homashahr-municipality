const DateInput = document.getElementById("date");
if (DateInput && window.jQuery) {
    window.jQuery(DateInput).persianDatepicker({
        format: "YYYY/MM/DD",
        initialValue: false,
        autoClose: true
    });
}

const fileInput = document.querySelector("input[type=file]");
const fileName = fileInput.parentElement.children[2];

fileInput?.addEventListener("change", () => {
    if (fileInput.files.length == 1) {
        fileName.textContent = fileInput.files[0].name;
    }
    else if (fileInput.files.length > 1) {
        fileName.textContent = `تعداد ${fileInput.files.length} فایل انتخاب شده`;
    }
    else {
        fileName.textContent = "فایلی انتخاب نشده";
    }
});
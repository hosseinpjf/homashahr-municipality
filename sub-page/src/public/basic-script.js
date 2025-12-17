let initBarChartImport, initDonutChartImport;
async function importing() {
    try {
        const { initBarChart, initDonutChart } = await import('../../main.js');
        initBarChartImport = initBarChart;
        initDonutChartImport = initDonutChart;
    } catch (err) {
        initBarChartImport = false;
        initDonutChartImport = false;
    }
}

let isDark = false;

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('isDark')) {
        isDark = localStorage.getItem('isDark') == 'true';
        darkModeHandler('load');
    }
})

const button = document.querySelector('.theme-toggle');
button.addEventListener('click', () => {
    isDark = !isDark;
    darkModeHandler();
});

async function darkModeHandler(hi) {
    await importing();
    changeTheme();
    if (initBarChartImport)
        initBarChartImport();
    if (initDonutChartImport)
        initDonutChartImport();
    localStorage.setItem('isDark', isDark);
}

function changeTheme() {
    if (!isDark) {
        button.classList.remove('theme-toggle--toggled');
        setCssVariables('--color-background', '#f4f5f9');
        setCssVariables('--color-text-primary', '#605a5a');
        setCssVariables('--color-surface', '#ffffff');
        setCssVariables('--border-color', '#d0d2d6');
        // setCssVariables('--hover-smooth', '#d9dbe0');
        setCssVariables('--hover-smooth', 'rgba(217, 219, 224, 0.5)');
    }
    else {
        button.classList.add('theme-toggle--toggled');
        setCssVariables('--color-background', '#2c2d31');
        setCssVariables('--color-text-primary', '#e4e6eb');
        setCssVariables('--color-surface', '#3a3d44');
        setCssVariables('--border-color', '#44474d');
        // setCssVariables('--hover-smooth', '#454851');
        setCssVariables('--hover-smooth', 'rgba(69, 72, 81, 0.5)');
    }
}

function setCssVariables(key, value) {
    return document.documentElement.style.setProperty(key, value);
}

export function getCssVariables(key) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(key)
        .trim();
}
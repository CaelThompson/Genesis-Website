// autocomplete.js
const basePath = import.meta.env.PROD ? '/Genesis/' : '/';
export const items = ['option1', 'option2', 'option3', 'option4', 'option5'];

export function showSuggestions(query) {
    const autocompleteList = document.getElementById('autocompleteList');
    autocompleteList.innerHTML = '';
    if (query.length === 0) {
        return;
    }
    const suggestions = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = suggestion;
        item.onclick = () => {
            const searchInput = document.getElementById('searchbutton');
            if (searchInput instanceof HTMLInputElement) {
                searchInput.value = suggestion;
            }
            autocompleteList.innerHTML = '';
        };
        autocompleteList.appendChild(item);
    });
}

export function executeSearch() {
    console.log('Ran Search!');
    const searchInput = document.getElementById('searchbutton');
    window.location.href = `${basePath}searchresult`;
    if (searchInput instanceof HTMLInputElement) {
        const query = searchInput.value;
        // Add your logic here to handle different options based on the search query
        if (items.includes(query)) {
            window.location.href = `${basePath}searchresult`;
        } else {
            alert('No matching option found');
        }
    }
}